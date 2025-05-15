/*
Input: a string of math text
Output: the corresponding Latex string of that math text
Description: A helper function which generalize several steps to take the original Spacemath input into corresponding Latex output.

2022.10.07 created, only trivial return of test need is done at this stage.
2022.10.12 test method for M2Tree;
2022.11.02 deal with sentence structure & indent
2022.11.04 compatibility with sentence structure: add in new arguments lp,rp for the left/right pair of delimiters.
2022.11.14 add a preprocessing to transfer inline structures to multiline form
*/
import { findPositionOfRightPairConvert, translateTable } from './convert.js'
import { M2TreeConvert } from './M2TreeConvert.js'
import { dictionary } from './dictionary.js';
import { combineTree2Latex } from './combineTree2Latex.js'
import { condenseSpaces } from './conversion.js'


export function M2LConvert(str,lp,rp, conversiontarget){
    //preprocessing for inline structure
str = str.replace(/(&|\\amp)/g, "🎯");
console.log("M2LConvert(str,lp,rp, conversiontarget)", str,lp,rp, conversiontarget);
    for (let key of translateTable.getAllMultiLine()) { // iterate through dictionary
        let index = str.indexOf(key.slice(0, -1)+"(");
        while (index != -1){
            let rpos = findPositionOfRightPairConvert(str,index + key.length - 1, "(",")");
            if (rpos != -1){
                let splitStr = [str.substring(0,index),str.substring(index + key.length,rpos),str.substring(rpos+1)];
                newMiddleStr = key + "\n ";
                if (dictionary[key]["emptyLineBeforeIndent"]){
                    newMiddleStr += splitStr[1].replaceAll(";","\n\n ");
                    newMiddleStr += "\n";
                } else {
                    newMiddleStr += splitStr[1].replaceAll(";","\n ");
                }

                str = splitStr[0] + newMiddleStr + splitStr[2];
                index = str.indexOf(key.slice(0, -1)+"(");
            } else {
                continue;
            }
        }
    }

    //remove backslash and space derivatives
    //this may pollutes some of the keyword containing \\, maybe we should save them before the transformation
    str = str.replaceAll("\\,","");
    str = str.replaceAll("\\:","");
    str = str.replaceAll("\\;","");
    str = str.replaceAll("\\!","");
//    str = str.replaceAll("\\","");
    str = str.replace(/([a-zA-Z])\\/g,"$1 ");
    str = str.replaceAll("\\","");

// console.log("str now", str)

    let splitStr = str.split("\n");
    let latexStr = "";
    let paramStack = [];
    let lastLine = "";
    while (splitStr.length > 0){
        var params = [];   // are params only for multiline constructions?
                           //sort of a hack because we need params after this loop
        if (paramStack[0] && dictionary[paramStack[0]].params){
            params = dictionary[paramStack[0]].params;
        }
console.debug("  ++  ++  ++  ++  ++  ++  ++  ++  ++  ++ ");
console.debug("top of loop  ",splitStr);
console.debug("params = ",params);
//console.debug("thisEnvironment = ",thisEnvironment);

console.log("next step: ", params, "gg", splitStr);
      if (splitStr[0].trim() == "" && !params.includes("system") && !params.includes("derivation") && !params.includes("align")) {console.info("skipping empty string");  splitStr.shift();  continue }  // may need this as an indicator in some cases ??
   // sort of a hack, but working toward better multiline expressions
      if (params.length > 0 && params.includes("caseEnvironment")) {
        let thisLine = splitStr[0];
  // move the keywords to dictionary
        let thisLinePieces = thisLine.split(/(if|when|unless|otherwise)/g);
        if (thisLinePieces.length != 3) { console.error("invalid cases line", thisLine) }
        else {
            thisLine = "casesline(" + thisLinePieces[0] + ")(" + thisLinePieces[1] + ")(" + thisLinePieces[2] + ")";
            splitStr[0] = thisLine;
        }
console.debug("thisLinePieces", thisLinePieces);
      } else if (params.length > 0 && (params.includes("system") || params.includes("derivation") ) ) {
        let thisLine = splitStr[0];
        // a if the next line is not blank, it is a ontinuation of the current line
        while (splitStr.length > 1 && splitStr[1].trim() != "") {
            thisLine += splitStr[1];
            splitStr.splice(1,1);
        }
  // move the relations to dictionary
        let thisLinePieces = thisLine.split(/(<=|>=|:=|<|>|=|~|≈|approx|asymp).*?/);
        // maybe more than one relation on the line
        if (thisLinePieces.length > 3) {
            let newthirdpiece = "";
            while (thisLinePieces.length >= 3) { newthirdpiece = thisLinePieces.pop() + newthirdpiece }
            thisLinePieces[2] = newthirdpiece;
        }
        if (thisLinePieces.length != 3) { console.error("invalid system/derivation/align line", thisLine, "with pieces", thisLinePieces) }
        else {

// in the derivation case, we have to treat the first line differently
// the implementation below assumes too much
            if (thisLinePieces[0].trim() == "") {
                thisLine = "derivationline(" + thisLinePieces[1].trim() + ")(" + thisLinePieces[2].trim() + ")";
            } else {
                thisLine = "systemline(" + thisLinePieces[0].trim() + ")(" + thisLinePieces[1].trim() + ")(" + thisLinePieces[2].trim() + ")";
//   alignline 
            }
            splitStr[0] = thisLine;
        }
console.log("thisLine system, derivation", thisLine, "thisLinePieces", thisLinePieces, "params", params);
      }
        else if ( (params.length > 0) && params.includes("align") ) { 
        let thisLine = splitStr[0];
        // a if the next line is not blank, it is a ontinuation of the current line
        while (splitStr.length > 1 && splitStr[1].trim() != "") {
            thisLine += splitStr[1];
            splitStr.splice(1,1);
        }
  // move the relations to dictionary
        let thisLinePieces = thisLine.split(/(🎯).*?/);
console.log("thisLine", thisLine, "thisLinePieces", thisLinePieces);
        if (thisLinePieces[1] == "🎯") { thisLinePieces[1] = "" }
        // maybe more than one relation on the line
        if (thisLinePieces.length > 3) {
            let newthirdpiece = "";
            while (thisLinePieces.length >= 3) { newthirdpiece = thisLinePieces.pop() + newthirdpiece }
            thisLinePieces[2] = newthirdpiece;
        }
        if (thisLinePieces.length != 3) { console.error("invalid system/derivation/align line", thisLine, "with pieces", thisLinePieces) }
        else {

// in the derivation case, we have to treat the first line differently
// the implementation below assumes too much
  //          if (thisLinePieces[0].trim() == "") {
  //              thisLine = "alignline(" + thisLinePieces[1].trim() + ")(" + thisLinePieces[2].trim() + ")";
  //          } else {
                thisLine = "alignline(" + thisLinePieces[0].trim() + ")(" + thisLinePieces[1].trim() + ")(" + thisLinePieces[2].trim() + ")";
  //          }
            splitStr[0] = thisLine;
        }
console.log("thisLine align", thisLine, "thisLinePieces", thisLinePieces, "params", params);
      } 







   // this is the key parsing step, when one meaningful string is parsed into a tree
// 4/1/23 added .trim(); may need to rethink, if the indentation level is relevant
console.log("about to M2TreeConvert", splitStr[0].trim(), "ooo", params);
        let temp = M2TreeConvert(splitStr[0].trim(),params, conversiontarget);
console.debug("temp");
        let tree = temp[0];
        let exParam = temp[1];
        let response = temp[2];
console.log("about to combineTree2Latex", tree, "ooo", params);
        let latexLine = combineTree2Latex(tree,params);
console.log("latexLine", latexLine);
        let thisEnvironment = "";
        if (params.length && params.includes("caseEnvironment")) {
            thisEnvironment = "cases";
            if (conversiontarget == "MathML") {
    //            latexLine = "<mtr>" + latexLine
            } else if (conversiontarget == "Speech") {
                latexLine = " case " + latexLine
            }
        } else if (params.length && (params.includes("system") || params.includes("derivation") || params.includes("align")) ) {
            if (params.includes("system")) { thisEnvironment = "system"}
            else if (params.includes("derivation")) { thisEnvironment = "derivation" }
            else if (params.includes("align")) { thisEnvironment = "align" }
            if (conversiontarget == "MathML") {
    //            latexLine = "<mtr>" + latexLine
            } else if (conversiontarget == "Speech") {
                latexLine = " line " + latexLine
            }
        }
        if (splitStr.length > 0 && exParam.length == 0) {
            if (paramStack.length > 0 && ((!dictionary[paramStack[0]].absorbEmptyLine) || splitStr[0].trim().length > 0)){
                if ((dictionary[paramStack[0]].absorbEmptyLine && splitStr.length > 1 && splitStr[1].trim().length > 0) || (splitStr.length == 2 && splitStr[1].trim().length == 0) || splitStr.length == 1){
                    // do nothing
                } else{
                    if (dictionary[paramStack[0]].changeLineTurn){
                        latexLine += dictionary[paramStack[0]].changeLineTurn + "\n";
                    } else {
                      if (conversiontarget == "MathML") {
     //                   latexLine += "</mtr>\n"
                      } else if (conversiontarget == "Speech") {
   // why is this here and not in dictionary?
                        if (thisEnvironment == "cases") {latexLine += " end_case\n"}
                        if (thisEnvironment == "system" || thisEnvironment == "derivation" || thisEnvironment == "align") {latexLine += " end_line\n"}
                      } else {
                  //      latexLine += "\\\\\n";
                        latexLine += "";
                }
                    }
                }

                // treating cases where response show some requirements are not fulfilled
// turned off while debugging system
//  oooooo go back and consider align
                if (false && dictionary[paramStack[0]].params && dictionary[paramStack[0]].params.includes("&beforeFirstRelation") && !response["&beforeFirstRelation"] && lastLine.trim().length == 0){
                    latexLine = "QQQQ& \\;" + latexLine;
                }
            } else {
                if (splitStr.length > 1){
                    if (dictionary[paramStack[0]] && dictionary[paramStack[0]].absorbEmptyLine && splitStr[0].trim().length == 0){

                    } else {
                        latexLine += "\n";
                    }
                }
            }
        }
        lastLine = splitStr[0];
        splitStr.shift();
console.log("============ exParam", exParam, "jjj", lastLine, "mmm", splitStr);
        if (dictionary[exParam]){
            if (dictionary[exParam].seperateOut){  // don;t know why?
                latexLine += rp;
            }
            if (dictionary[exParam].noBeginEnd){
                latexLine += dictionary[exParam].note+"{";
            } else {
                if (conversiontarget == "MathML") {
                    if (exParam == "cases:") {
                        latexLine += "<mrow intent=\"$table\"><mo>{</mo>"   // + latexLine;  // where does the intent go"
                    }
                    latexLine += "<mtable arg=\"table\" intent=\":" + dictionary[exParam].MathMLnote + "\">\n";
                } else if (conversiontarget == "Speech") {
                    latexLine += " begin-" + dictionary[exParam].speechnote + " ";
                } else {
                //    latexLine += "\\begin{"+dictionary[exParam].note+"}";
                    latexLine += "\n<"+dictionary[exParam].note+">\n";
                }
            }

            paramStack.push(exParam);
        }

        if (paramStack.length > 0 && splitStr[0] && splitStr[0][0] != " "){
            if (!dictionary[paramStack[0]].emptyLineBeforeIndent || (lastLine.trim().length == 0)){
                if (dictionary[paramStack[0]].noBeginEnd){
                    latexLine += "}";
                } else {
                    latexLine += "AA\\end{"+dictionary[paramStack[0]].note+"}";
                }

                if (dictionary[paramStack[0]].lineBreak){
                    latexLine += "\n";
                }
                if (dictionary[paramStack[0]].seperateOut){  // don't know why this is here
                    latexLine += lp;
                }
                paramStack.shift();
            }
        } //no indent
        latexStr += latexLine;

    }
console.log("next paramStack", paramStack);
console.log("was latexStr", latexStr);
    while (paramStack.length > 0){
console.log("next latexStr", latexStr);
        if (dictionary[paramStack[0]].noBeginEnd){
            latexStr += "}";
        } else {
                if (conversiontarget == "MathML") {
                    latexStr += "</mtable><!-- " + dictionary[paramStack[0]].MathMLnote + " -->\n";
                    if (params.length && params.includes("caseEnvironment")) {
                        latexStr += "</mrow>\n";  // because of the mrow supplying the big left curly bracket
                    }
                } else if (conversiontarget == "Speech") {
         // it seems anomalous that we need to stick in end_case here
                    if (dictionary[paramStack[0]].note == "cases") { latexStr += "end_case " }
                    if (dictionary[paramStack[0]].note == "align") { latexStr += "end_line " }
                    latexStr += "end-" + dictionary[paramStack[0]].speechnote;
                } else {
         //           latexStr += "\\end{"+dictionary[paramStack[0]].note+"}";
                    latexStr += "</"+dictionary[paramStack[0]].note+">\n";
                }
        }
        if (dictionary[paramStack[0]].seperateOut){  // don;t know why?
            latexStr += lp;
        }
        paramStack.shift();
    } //no indent
    console.log("latexStr", latexStr);
    return condenseSpaces(latexStr)
}
