/*
Input: the user input, conversiontarget of conversion: Latex, MathJax
Output: the corresponding Latex string of the user input
Description: the major abstract function which takes the user input and return the supposed output

2022.10.07 created
2022.10.25 refined to support MathJax
2022.10.26 add conversiontarget to support both cases
*/
import {hide_xml, unhide_xml, separatePieces, assemble, postprocess, mathpreprocess, simplifyAnswer} from './conversion.js'
import {M2LConvert} from './M2LConvert.js'
import {TranslateTable} from './TranslateTable.js'


export let translateTable = new TranslateTable();

export function convert(str,conversiontarget) {

console.debug("converting to target", conversiontarget);
  let str_no_xml = hide_xml(str);
  let str_separated = separatePieces(str_no_xml);

console.debug("str_separated", str_separated);

  let convertedComponent = convertPieces(str_separated, conversiontarget);

console.debug("firsttest", convertedComponent);
/*
console.debug("test",convertMathSnippet("x^447","MathML"));
*/

  let answer_processed = assemble(str_separated, convertedComponent,conversiontarget);

console.debug("answer_processed", answer_processed);
console.debug("convertedComponent", convertedComponent);
console.debug(" ");
console.debug("*************************************************************");
console.debug(" ");

  answer_processed = postprocess(answer_processed, conversiontarget);

  return answer_processed

}  // convert(str target)

/*
Input:
str: user input after spaces are trimmed
p: an integer indicating which deliminator should be check next

Output: the corresponding Latex string of the user input
Description: use BNF grammar to split user input into text and math part, call M2LConvert to transform the math part, then combine them and return the final string.

2022.10.07 created
            currently based on symmetry of deliminators
            rule1 : isolated deliminators will be ignored
            rule2 : deliminators with lower priority inside ones with higher priority will be ignored
2022.10.26 modified to support none-symmetry shape.
2022.10.28 modified to support case when user types one half of deliminator
*/
function convert2(str,p, conversiontarget) {
console.debug("starting conversiontarget", conversiontarget, p, "on", str);
  let splitStr = [];
  let newStr = "";
  let deliminators = [["\\[","\\]"],["$$","$$"],["\\(","\\)"],["$","$"]]; //all tokens that will be seen as math mode, in priority (left to right)
  if (p >= deliminators.length){
    return str; // if we already checked all deliminators, just return the original string
  }
  let d = deliminators[p];

  let counter = 0;
  while (str.substring(counter,counter + d[0].length) != d[0] && str.length > counter + d[0].length){
      counter++;
  }
  if (str.substring(counter,counter + d[0].length) != d[0]){
      p += 1;
      return convert2(str,p,conversiontarget);
  } else {
      let right = findPositionOfRightPairConvert(str, counter, d[0],d[1]);
      if (right > 0){
          let convertedStr = str.substring(counter+d[0].length,right); // the part that need to be converted (math)
          for (let j = p; j < deliminators.length; j++){
            convertedStr = convertedStr.replaceAll(deliminators[j][0], '');
            convertedStr = convertedStr.replaceAll(deliminators[j][1], ''); // removed all lower priority deliminators
          }
          convertedStr = M2LConvert(convertedStr,d[0],d[1], conversiontarget);
          convertedStr = d[0] + convertedStr + d[1];
          convertedStr = convertedStr.replaceAll(d[0]+d[1],"");
console.debug("convertedStr", convertedStr);
          return convert2(str.substring(0,counter),p+1, conversiontarget) + convertedStr + convert2(str.substring(right+d[1].length),p, conversiontarget);
      } else {
          p += 1;
          return convert2(str,p, conversiontarget);
      }

  }
}

function convertPieces(pieces, conversiontarget) {

  let converted_component = {};

  for (const piece of pieces) {
    const piece_type = piece[0];
    const contentkey = piece[3] + "," + conversiontarget;
    if (piece_type == "text") { converted_component[contentkey] = [piece[0], piece[1], piece[2]] }
        // in the future will will process text, like M\\"obius
    else if ( !(contentkey in converted_component)) {
      if (piece_type == "m" || piece_type == "md") {
          let thiscontentpiece = piece[2];
          thiscontentpiece = unhide_xml(thiscontentpiece);
          thiscontentpiece = mathpreprocess(thiscontentpiece);
  //        converted_component[contentkey] = [piece[0], piece[1],convertMathSnippet(piece[2], conversiontarget)]
          converted_component[contentkey] = [piece[0], piece[1],convertMathSnippet(thiscontentpiece, conversiontarget)]
      } else {
        console.error("unknown piece_type", piece)
      }
    }
  }

//  const conversiontargets = ["MathML", "speech", "tex"];
//    for (const ctype of conversiontargets) {
//
//  // nothign yet, because we need 'convert' to not depend on the conversiontarget.
//
//    }

  return converted_component

}


// like convert2, except no delimiters because we have alread separated the math
export function convertMathSnippet(str, conversiontarget) {
// console.log("starting convertMathSnippet", conversiontarget, "on", str);
    str = str.replace(/(&|\\amp)/g, "🎯");   // for alignment.  Can't use & because of xml later
// console.log("continuing convertMathSnippet", conversiontarget, "on", str);
    str = str.replace(/REtuRn/g, "\n");  
// console.log("recontinuing convertMathSnippet", conversiontarget, "on", str);
    let convertedStr = M2LConvert(str,"LBRACK","RBRACK", conversiontarget);
    convertedStr = simplifyAnswer(convertedStr);
// console.log("returning", convertedStr);
    return convertedStr
}

/*
Input:
str: a Latex string
p: an integer indicating which deliminator should be check next

Output: the corresponding MathJax output
Description: use BNF grammar to split user input into text and math part, call M2LConvert to transform the math part, then combine them and return the final string.

2022.10.07 created
            currently based on symmetry of deliminators
            rule1 : isolated deliminators will be ignored
            rule2 : deliminators with lower priority inside ones with higher priority will be ignored
*/
function convertLaTeX2MathJax(str,p) {
  let splitStr = [];
  let newStr = "";
  let deliminators = [["\\[","\\]"],["$$","$$"],["\\(","\\)"],["$","$"]]; //all tokens that will be replaced, in priority (left to right)
  let newdeliminators = [["\\[","\\]"],["\\[","\\]"],["\\(","\\)"],["\\(","\\)"]]; //all tokens that will be replaced, in priority (left to right)
  if (p >= deliminators.length){
    return str.replaceAll("\n","<br>"); // if we already checked all deliminators, just return the original string with lineswitch replacement
  }
  let d = deliminators[p];
  let nd = newdeliminators[p];

  let counter = 0;
  while (str.substring(counter,counter + d[0].length) != d[0] && str.length > counter + d[0].length){
      counter++;
  }
  if (str.substring(counter,counter + d[0].length) != d[0]){
      p += 1;
      return convertLaTeX2MathJax(str,p);
  } else {
      let right = findPositionOfRightPairConvert(str, counter, d[0],d[1]);
      if (right > 0){
          let innerStr = str.substring(counter+d[0].length,right); // the part that need to be converted (math)
          innerStr = nd[0] + innerStr + nd[1];
          return convertLaTeX2MathJax(str.substring(0,counter),p+1).replaceAll("\n","<br>") + innerStr.replaceAll("\\\\\n","\\\\").replaceAll("\n","\\\\") + convertLaTeX2MathJax(str.substring(right+d[1].length),p);
      } else {
          p += 1;
          return convertLaTeX2MathJax(str,p);
      }

  }
}

/*
cited:https://codereview.stackexchange.com/questions/179471/find-the-corresponding-closing-parenthesis
Description: given a string, a position of the left parenthese, the left and right parenthese, find the position of the paired up right parenthese.
2022.10.14 created,
2022.10.26 support multi digit search, moved to convert
*/

export function findPositionOfRightPairConvert(str, pos, lp, rp) {
  if (str.substring(pos,pos+lp.length) != lp) {
    throw new Error("No" + lp + " at index " + pos);
  }
  for (let i = pos + 1; i < str.length; i++) {
    switch (str.substring(i,i+rp.length)) {
    case rp:
      return i;
      break;
    }
  }
  return -1;    // No matching closing parenthesis
}
