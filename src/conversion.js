/*
function convert(str) {
  console.debug("called the little convert");
  return condenseSpaces(str);
  let splitedLine = str.split('\n');
  let newLineStr = "";
  for (let sl of splitedLine){
    let splited = sl.split(' ');
    let newstring = "";
    for (let s of splited){
      newstring += plusminus(s);
    }
    newLineStr += newstring + "\n";
  }

  return newLineStr;
}
*/
import {dictionary, outputTagsOf, greedyfunctions, integrals, symbolswithlimits, charactersymbols, particulargreedyfunctions, operatorsymbols } from './dictionary.js'

export function condenseSpaces(str){
    return str.replace(/\s\s+/g, ' ');
}

function plusminus(str){
  for (let sym of ['+','-']){
    if (str.includes(sym)){
      let splited = str.split(sym);
      let newstring = plusminus(splited[0]) + sym + plusminus(splited[1]);
      return newstring;
    }
  }
  return multidivision(str);
}

function multidivision(str){
  if (str.includes("*")){
    let splited = str.split("*");
    let newstring = multidivision(splited[0])+" \\cdot "+multidivision(splited[1]);
    return newstring;
  }
  if (str.includes("/") && str.split("/")){
    let splited = str.split("/");
    let newstring = "\\frac{"+multidivision(splited[0])+"}{"+multidivision(splited[1])+"}";
    return newstring;
  }
  return script(str);
}

function script(str){
  for (let sym of ['^','_']){
    if (str.includes(sym)){
      let splited = str.split(sym);
      let newstring = "";
      for (let i = 0; i < splited.length; i++){
        let s = splited[i];
        let t = script(s);
        if (i > 0 && t.length > 1){
          t = "{"+t+"}"
        }
        newstring += t;
        if (i < splited.length - 1){
          newstring += sym;
        }
      }
      return newstring;
    }
  }
  return map1(str);
}

function map1(str){
  const map = new Map();
  map.set("sin", "\\sin ");
  map.set("cos", "\\cos ");
  let iterator = map.keys();
  let temp;
  temp = iterator.next().value;
  let newstring = "";
  while (temp){
    if (str.includes(temp)){
      let splited = str.split(temp);
      for (let i = 0; i < splited.length; i++){
        let s = splited[i];
        let t = map1(s);
        newstring += t;
        if (i < splited.length - 1){
          newstring += map.get(temp);
        }
      }
    }
    temp = iterator.next().value;
    //iterator.next();
  }
  if (newstring == ""){
    return map2(str);
  } else {
    return map2(newstring);
  }
}

function map2(str){
  const map = new Map();
  map.set("le", "\\le");
  map.set('ge', "\\ge");

  if (map.has(str)){
    return " " + map.get(str) + " ";
  } else {
    return str;
  }
}

function numberQ(str) {
    return (/^[0-9\.,]+$/).test(str);
}
function variableQ(str) {
    return (/^[a-zA-Z]+$/).test(str);
}
function symbolQ(str) {
    return (/^&[a-zA-Z]+;$/).test(str);
}
function numbervariableQ(str) {
    return (/^[0-9\.,].*[a-zA-Z]$/).test(str);
}
function atomicQ(str) {
    return variableQ(str) || numberQ(str)
}

export function singletonQ(str) {
  // need to include things like Greek letters
  // the issue is whether  quantity ... endquantity  is needed
    return numberQ(str) || str.length == 1 ||
        (str.trim() in dictionary && dictionary[str.trim()]["type"] == "symbol")
}

function convertSymbol(str, conversiontarget) {
    let ans = str;

    if(conversiontarget == "MathML") {
        ans = dictionary[ans]["ruleML"]
    } else if (conversiontarget == "Speech") {
        ans = dictionary[ans]["speech"]
    } else {
        ans = dictionary[ans]["rule"]
    }
    return ans
}

export function markAtomicItem(str, conversiontarget) {
  if(numbervariableQ(str)) {
    let numberpart = str.replace(/[a-zA-Z]+$/, "");
    let variablepart = str.replace(/^[0-9\.,]+/, "");
    console.debug("found mixed", str, "with parts", numberpart, ",", variablepart);
    numberpart = markAtomicItem(numberpart, conversiontarget);
    variablepart = markAtomicItem(variablepart, conversiontarget);
    let multiplication = "";
    if(conversiontarget == "MathML") { multiplication = "<mo>&InvisibleTimes;</mo>"}
    else if(conversiontarget == "Speech") { multiplication = " times " }
    return numberpart + multiplication + variablepart
  }
  let ans = str;
console.debug("markAtomicItem of", ans, "endans", symbolQ(str));
  if(conversiontarget == "MathML") {
    if(numberQ(str)) {
      ans = "<mn>"+ans+"</mn>"
    } else if(symbolQ(str)) {
      ans = "<mi>"+ans+"</mi>"
    } else if(variableQ(str)) {  // need to separate each letter
  //    ans = "<mi>"+ans+"</mi>"
      ans = ans.replace(/(.)/g, "<mi>$1</mi>");
    } else if(operatorsymbols.includes(str)) {
      ans = "<mo>"+ans+"</mo>"
    } else if(str.includes("mtext")) {  // probably text in math
      // do nothing
    } else if (ans != "") {  // this is a hack, because there are many places where an empty string should be handled properly.
      ans = "<unknown>"+ans+"</unknown>"
console.warn("unknown type", "X"+ans+"X")
    }
  } else {
  }

  return ans
}

function markBrackets(str, conversiontarget) {
  let ans = str;
console.debug("markBrackets of", ans, "endans");
  if(conversiontarget == "MathML") {
    if(numberQ(ans)) {
        ans = "<mn>" + ans + "</mn>"
    } else {
        ans = "<mrow>" + ans + "</mrow>"
    }
  } else if(conversiontarget == "Speech") {
    if(numberQ(ans)) {
        // nothign to do
    } else {
console.debug("aDDing qUAntity",str);
        ans = "quantityC " + ans + " Cendquantity"
    }
  } else {
    ans = "{" + ans + "}"
  }
  return ans
}

// remove redundancies and un-necessary markup.  For example:
// <mrow><mi>x</mi></mrow> --> <mi>x</mi>
export function simplifyAnswer(str) {
    let ans = str;

// console.log("   starting to simplify Answer", ans);
    for (let i=0; i <= 2; ++i) {
        ans = ans.replace(/to the quantity([A-Z]?) +negative 1 +([A-Z]?)endquantity/g, "inverse");
        ans = ans.replace(/to the quantity([A-Z]?) +2 +([A-Z]?)endquantity/g, "squared");
        ans = ans.replace(/power +2 +/g, "squared ");

        ans = ans.replace(/(^| )quantity([A-Z]?) +([^ ]+) +([A-Z]?)endquantity/g, " $3 ");
        ans = ans.replace(/(^| )quantity([A-Z]?) +(negative +[^ ]+) +([A-Z]?)endquantity/g, " $3 ");
        ans = ans.replace(/<mrow ([^<>]+)><(mi|mo|mn)>([^<>]+)(<\/(mi|mo|mn)>)<\/mrow>/g, "<$2 $1>$3$4");
        ans = ans.replace(/<mrow>(<([a-z]+)>)([^<>]+)(<\/$2>)<\/mrow>/g, "$1$3$4");
console.debug("now ans", ans);
        ans = ans.replace(/<mrow>(<mi>)([^<>]+)(<\/mi>)<\/mrow>/g, "$1$2$3");
        ans = ans.replace(/<mrow>(<mo>)([^<>]+)(<\/mo>)<\/mrow>/g, "$1$2$3");
        ans = ans.replace(/<mrow>(<mn>)([^<>]+)(<\/mn>)<\/mrow>/g, "$1$2$3");

// next is quick and dirty: fails on some content. but note that we
// save the outer mrow in case of attributes
        ans = ans.replace(/(<mrow[^<>]*>)<mrow>([^w]*)<\/mrow>(<\/mrow>)/g, "$1$2$3");
// 3/12/23 above fails on <mrow><mrow><mo>-</mo><mi>s</mi></mrow></mrow>
        console.debug("removed layer", i, "to get", ans);
    }

    ans = ans.replace(/quantity([A-Z]?)/g, "quantity");
    ans = ans.replace(/([A-Z]?)endquantity([A-Z]?)/g, "endquantity");
    ans = ans.replace(/(quantity *)quantity([^q]*)endquantity( *endquantity)/g, "$1$2$3");
    ans = ans.replace(/(quantity *)quantity([^q]*)endquantity( *endquantity)/g, "$1$2$3");

    if (ans.endsWith("\\")) { ans += " " }  // a hack because of \ \ \\text{...}\ \
                                            // track down why the ending space goes away

    return ans
}

// convert common constructions to functional or infix notation,
// so that the existing tree structures can be used.

export function mathpreprocess(rawstring) {
    let str = rawstring;

    str = mathpreprocessquotes(str);
    str = mathpreprocessarithmetic(str);
console.debug("after mathpreprocessarithmetic", str);
    str = mathpreprocessparentheses(str);
    str = mathpreprocessbrackets(str);
//next two are called in preprocessarithmetic
//    str = preprocessintegrals(str);
//    str = preprocesslargeoperators(str);

console.debug("before other", str);
    str = mathpreprocessother(str);
console.debug("after other", str);

    return str
}

function mathpreprocessquotes(rawstring) {
    let str = rawstring;

//    str = str.replace(/(\s)"(\S[^"]+)"(\s|$)/g, '$1quote($2)$3');
    str = str.replace(/(\s|\$|^)"(\S[^"]+)"(\s|\$|$)/g, wrapquotes);

    return str
}
function wrapquotes(match, before, thequote, after, offset, string) {
    return before + "quote(␣" + thequote.replaceAll(" ", "␣") + "␣)" + after
}

function mathpreprocessarithmetic(rawstring) {
    let str = rawstring;

    str = str.replace(/-->/g, 'longrightarrow');
    str = str.replace(/->/g, 'to');
    str = str.replace(/<--/g, 'longleftarrow');
    str = str.replace(/<-/g, 'from');
    str = str.replace(/(\$| |\(|\^|_)[\-\−]([^ +])/g, '$1😑$2');  // ascii dash or negative sign, but not -+
// why |.|.| instead of [...]
// also a place where we need to be more clever about (word) boundaries
    str = str.replace(/(^|\$|\(|\[|\{) *[\-\−]/, '$1😑');

// groupings which seem to be needed to overcome the implied left-to-right(?) precedence
// should these be "wrapper" instead of literal parentheses?

// inline fractions
// this is wrong, because x + 3//5 does not need any parentheses
  //  str = str.replace(/([^ \(\)\[\]\{\}\$]*[^ \)\]}\/])(\/\/)/g, '($1)//');  // numerator
  //  str = str.replace(/\/\/([^ \(\[{\/][^ \(\)\[\]\{\}\$]*)/g, '//($1)');  // denominator
// this is only slightly better
    str = str.replace(/([^ \(\)\[\]\{\}\$]*[+\-][^ \(\)\[\]\{\}\$]*[^ \)\]}\/])(\/\/)/g, '($1)//');  // numerator
    str = str.replace(/\/\/([^ \(\[{\/][^ \(\)\[\]\{\}\$]*[+\-][^ \(\)\[\]\{\}\$]*)/g, '//($1)');  // denominator

// over-under fractions
    str = str.replace(/([^ \(\)\[\]\{\}\$]*[^ \)\]}\/])(\/)/g, '❲$1❳/');  // numerator
//    str = str.replace(/\/([^ \(\[{\/][^ \(\)\[\]\{\}\$]*)/g, '/❲$1❳');  // denominator
// greedy denominator.  When does that fail?
    str = str.replace(/\/([^ \(\[{\/][^ \)\]\}\n\$]*)/g, '/❲$1❳');  // denominator
console.debug("after mathpreprocess fractions", "A" + str + "B");

// wrap argument of greedy function in fake parentheses
    for (const symbolname of greedyfunctions) {
  //      var regExStrStub = "(^|[\\$ \\(\\[\\{])" + symbolname + " " + "([^ \\(\\)\\[\\]\\{\\}\\$]+)";
        var regExStrStub = "(^|[ \\(\\[\\{])" + symbolname + " " + "([^ \\(\\)\\[\\]\\{\\}]+)";
        var regExStr = regExStrStub + "($|[ \\(\\)\\[\\]\\{\\}])";
// console.debug("regExStr", regExStr);
        var regEx = new RegExp(regExStr, "g");
// note that we wrap in brackets the user should not write: ⁅⁆
        str = str.replace(regEx, '$1' + symbolname + '⁅$2⁆$3');
    }
console.debug("after wrapping greedy arguments", "A" + str + "B");

// need to mathpreprocess integrals, summation, etc, before wrapping bases
// (but we gave up on wrapping bases)

    str = mathpreprocessderivatives(str);
console.debug("before operators", str);
    str = mathpreprocessintegrals(str);
    str = mathpreprocesslargeoperators(str);
console.debug("after operators", str);

// not so fast!
//  // we have previously put in grouping parentheses, so now we separate addition and subtraction
    str = str.replace(/([0-9a-zA-Z])(\+|-|\+-|-\+)([0-9a-zA-Z])/g, '$1 $2 $3');

    str = str.replace(/ \* /g, ' ⭐ '); // star/asterisk operator (retaining a*b for multiplication
// need a way to specify what * means

// maybe after number multiplication and +/- have been spaced out, it is okay to
// parenthesixe sub and superscript ( for things like

console.debug("before sub and sup grouping", str);

// go back and see how e^x^2/2 is working

    str = str.replace(/\^([^ ❲❳\/\(\[{][^ \"❲❳\/\(\)\[\]\{\}\$]*)/, '^❲$1❳');  // exponent
console.debug("after exponents once ", str);
    str = str.replace(/\^([^ ❲❳\/\(\[{][^ \"❲❳\/\(\)\[\]\{\}\$]*)/, '^❲$1❳');  // exponent
console.debug("after exponents twice", str);
    str = str.replace(/_([^ ❲❳\/\(\[{\$][^ \"❲❳\/\^\(\)\[\]\{\}\$]*)/, '_❲$1❳');  // subscript
    str = str.replace(/_([^ ❲❳\/\(\[{\$][^ \"❲❳\/\^\(\)\[\]\{\}\$]*)/, '_❲$1❳');  // subscript
console.debug("after subscript twice", str);

// do after the implied grouping for exponents
    str = mathpreprocessfunctionpowers(str);

//Is this too late? An issue is e^2x+5
// number-group might not be multiplicaiton, as in  J_0(x)
    str = str.replace(/([0-9])([a-zA-Z])/g, '$1 $2'); // implied multiplication number times letter

console.debug("after implied number letter multiplication", str);

    str = str.replace(/([0-9])([\(\[\{])/g, '$1 $2'); // implied multiplication number times group

//  having )( is not always multiplication:  J_(0)(x)
//  these substitution are too simplistic, because there can be () in the sub/superscript
    str = str.replace(/(_[\(❲][^❲❳\(\)]+)[\)❳]\(/g, '$1) ⚡ ('); // subscripted function application
    str = str.replace(/([\^▲][\(❲][^❲❳\(\)]+)[\)❳]\(/g, '$1) ⚡ ('); // superscripted function application
// twice, because we have not separated the math part
    str = str.replace(/(_[\(❲][^❲❳\(\)]+)[\)❳]\(/g, '$1) ⚡ ('); // subscripted function application
    str = str.replace(/([\^▲][\(❲][^❲❳\(\)]+)[\)❳]\(/g, '$1) ⚡ ('); // superscripted function application
// this is a bad hack, because it is specific do doubly wrapped sub- or superscripts.
// need to go back and properly parse complicated sub- abd super
    str = str.replace(/(_\(\([^❲❳\(\)]+)\)\)\(/g, '$1)) ⚡ ('); // subscripted (()) function application
    str = str.replace(/(\^\(\([^❲❳\(\)]+)\)\)\(/g, '$1)) ⚡ ('); // superscripted (()) function application

// separatnig )( caused problems, so maybe need another way to recognize it as implies multiplication
//    str = str.replace(/\)\(/g, ') ('); // implied multiplication (.)(.)

    return str
}

function mathpreprocessparentheses(rawstring) {
    let str = rawstring;

    str = str.replace(/(\$| )\(([^,()]+)\, +([^,()]+)\)/g, '$1($2) oointerval ($3)');  //open interval
    str = str.replace(/(\$| )gcd\( *([^,()]+)\, *([^,()]+) *\)/g, '$1($2) innergcd ($3)');
    str = str.replace(/(\$| )\( ([^,()]+)\, *([^,()]+) \)/g, '$1($2) gcd ($3)');
    str = str.replace(/(\$| )\(([^ ][^,()]*)\,([^ ][^,()]*)\)/g, '$1($2) cartesianpoint ($3)');

    return str
}

function mathpreprocessbrackets(rawstring) {
    let str = rawstring;

// there are several construtions of the form
// leftdelimiter (spaceornospace) (leftcontent) (sornos) (middledelimeter) (rightc) (sornos) rightdelimiter .
// it would be good to fund a general way to handle those.

// the <...> with "|" have to come before the ones with only commas,
// because those can also contain commas
    str = str.replace(/(^| )< ([^<>|]+) >/g, '$1span($2)');
console.debug("did we find span?", str);
    str = str.replace(/(^| )<([^<>|]+) \| ([^<>|]+)>/g, '$1($2) grouppresentation ($3)');
    str = str.replace(/(^| |\(){([^{}|]+) \| ([^{}|]+)}/g, '$1($2) setbuilder ($3)');
    str = str.replace(/(^| ){([^{}]+)}/g, '$1setof($2)');
    str = str.replace(/(^| )<([^,<>|]+)\|([^,<>|]+)>/g, '$1($2) braket ($3)');
    str = str.replace(/(^| )<([^,<>]+)\, ([^,<>]+)>/g, '$1($2) twovector ($3)');
console.debug("looking for vector", str);
 //   str = str.replace(/(^| )<([^ ,<>\$][^,<>\$]*)\, ([^<>\$]+)>/g, '$1vector($2, $3)');
    str = str.replace(/(^| )<([^ ,<>][^,<>]*)\, ([^<>]+)>/g, '$1vector($2, $3)');
console.debug("did we find vector?", str);
// another place where \n can start an expression
    str = str.replace(/(^| |\n)<([^ ][^,<>]*)\,([^ ][^<>]*)>/g, '$1($2) innerproduct ($3)');
// catch all for every other case <...> of unknown meaning
    str = str.replace(/(^| )<([^<>]+)>/g, '$1anglebrackets($2)');

    return str
}

function mathpreprocessderivatives(rawstring) {
//  need special case for \sum'
// also limits
    let str = rawstring;

    str = str.replace(/([^\^\(\[\{❲])(\'+)/g, '$1▲❲$2❳');

    str = str.replace(/(lim(|inf|sup))_([\(\[\{❲])/g, '$1$3');
    str = str.replace(/(lim(|inf|sup))_([^ \(\[\{❲][^ ]+)/g, '$1($3)');

    return str
}

function mathpreprocessintegrals(rawstring) {
    let str = rawstring;

//    str = str.replace(/(\$| )intr\_\(([^()]+)\)\^\(([^()]+)\) ?(.*?) d([a-z])( |\$)/g, '$1limop(∫)($2)($3)($4)($5)$6');
    for (let [symbolname, symbol] of Object.entries(integrals)) {
// console.debug("looking for limits: symbolname", symbolname);
      if(str.includes(symbolname)) {
         symbolname = "\\\\?" + symbolname;  // hack to be partially backward compatible with TeX
// the lower and upper limits might be in parentheses.  We handle these awkwardly
         var regExStrStub = "(^| |\n)" + symbolname + "\\_\\(([^()]+)\\)\\^\\(([^()]+)\\) ?(.*?)";
         var regExStr = regExStrStub + " d([a-z]+)" + "( |\n|$)";
  //       var regExStrWeight = regExStrStub + " \\[d([a-z]+)\\]" + "/\\{([^ $]+)\\}" + "( |\\$)";
  // switched grouping brackets
         var regExStrWeight = regExStrStub + " ❲d([a-z]+)❳" + "/❲([^❲❳]+)❳" + "( |\n|$)";
console.debug("regExStr", regExStr);
console.debug("regExStrWeight", regExStrWeight);
         var regExWeight = new RegExp(regExStrWeight, "g");
         str = str.replace(regExWeight, '$1wrapper(intlimsweight(' + symbol + ')($2)($3)($4)($5)($6))$7');
         var regEx = new RegExp(regExStr, "g");
         str = str.replace(regEx, '$1wrapper(intlims(' + symbol + ')($2)($3)($4)($5))$6');

         // case of no () around limits (but both lower and upper)
         regExStrStub = "(^| |\n)" + symbolname + "\\_([^ ]+?)\\^([^ ]+) (.*?)";
         regExStr = regExStrStub + " d([a-z]+)" + "( |\n|$)";
 //        regExStrWeight = regExStrStub + " \\[d([a-z]+)\\]" + "/\\{([^ $]+)\\}" + "( |\\$)";
         regExStrWeight = regExStrStub + " ❲d([a-z]+)❳" + "/❲([^❲❳]+)❳" + "( |\n|$)";
console.debug("regExStr", regExStr);
console.debug("regExStrWeight", regExStrWeight);
         regExWeight = new RegExp(regExStrWeight, "g");
         str = str.replace(regExWeight, '$1wrapper(intlimsweight(' + symbol + ')($2)($3)($4)($5)($6))$7');
         regEx = new RegExp(regExStr, "g");
         str = str.replace(regEx, '$1wrapper(intlims(' + symbol + ')($2)($3)($4)($5))$6');

         // case of lower lim only, () around lower limit
         // done poorly now, because int_((c)) is tricky
         // we do a special case for that
         regExStrStub = "(^| |\n)" + symbolname + "\\_\\(\\(([^()]+?)\\)\\) (.*?)";
         regExStr = regExStrStub +  " d([a-z]+)" + "( |\\$)";
         regExStrWeight = regExStrStub + " ❲d([a-z]+)❳" + "/❲([^ $]+)❳" + "( |$)";
         regExWeight = new RegExp(regExStrWeight, "g");
         str = str.replace(regExWeight, '$1wrapper(intllimweight(' + symbol + ')(($2))($3)($4)($5))$6');
         regEx = new RegExp(regExStr, "g");
         str = str.replace(regEx, '$1wrapper(intllim(' + symbol + ')(($2))($3)($4))$5');
         // now only () around lower limit
         regExStrStub = "(^| )" + symbolname + "\\_\\(([^()]+?)\\) (.*?)";
         regExStr = regExStrStub +  " d([a-z]+)" + "( |\\$)";
         regExStrWeight = regExStrStub + " ❲d([a-z]+)❳" + "/❲([^ $]+)❳" + "( |$)";
         regExWeight = new RegExp(regExStrWeight, "g");
         str = str.replace(regExWeight, '$1wrapper(intllimweight(' + symbol + ')($2)($3)($4)($5))$6');
         regEx = new RegExp(regExStr, "g");
         str = str.replace(regEx, '$1wrapper(intllim(' + symbol + ')($2)($3)($4))$5');

         // case of lower lim only, no () around lower limit (unless intended)
         regExStrStub = "(^| |\n)" + symbolname + "\\_([^ ]+?) (.*?)";
         regExStr = regExStrStub +  " d([a-z]+)" + "( |\\$)";
         regExStrWeight = regExStrStub + " ❲d([a-z]+)❳" + "/❲([^ $]+)❳" + "( |$)";
         regExWeight = new RegExp(regExStrWeight, "g");
         str = str.replace(regExWeight, '$1wrapper(intllimweight(' + symbol + ')($2)($3)($4)($5))$6');
         regEx = new RegExp(regExStr, "g");
console.debug("final regExStr", regExStr);
         str = str.replace(regEx, '$1wrapper(intllim(' + symbol + ')($2)($3)($4))$5');

      }
    }
console.debug("did we find integral?", str);

    return str
}

function mathpreprocessfunctionpowers(rawstring) {
    let str = rawstring;
// this is for "known" funcitons like log and sin.
// generic functions, like f^2(x), are handled differently
console.debug("looking for powers of known functions");

    for (let symbolname of greedyfunctions) {
        let slashsymbol = "\\\\?" + symbolname;
// when we refactor to pull out the math pieces, allow more general
// characters that "(" as in (log^2 x
 //  why \$ and not ^ ?       var regExStr = "([\\$ \\(\\[\\{])" + slashsymbol + "\\\^❲([^❲❳]*)❳";
        var regExStr = "(^|[ \\(\\[\\{])" + slashsymbol + "\\\^❲([^❲❳]*)❳";
//first case is already have parentheses around function argument
        var regExStrPlus = regExStr + " *" + "([\\(\\[\\{][^\\(\\)\\[\\]\\{\\}]+[\\)\\]\\}])";
 // console.debug("regExStrPlus", regExStrPlus);
        var regEx = new RegExp(regExStrPlus, "g");
        str = str.replace(regEx, '$1wrapper❲functionpower(' + "base" + symbolname + ')($2)$3❳');
//second case is trig-like implied parentheses for function argument
   // another place where maybe we can better handle what the greed funciton grabs
        regExStrPlus = regExStr  + " " + "([^ \\$\\(\\)\\[\\]\\{\\}]+)";
        regEx = new RegExp(regExStrPlus, "g");
        str = str.replace(regEx, '$1wrapper❲functionpower(' + "base" + symbolname + ')($2)wrapper❲$3❳❳');
    }
console.debug("processed powers of functions", str);
// subscripts (redundant, consolidate)
    for (let symbolname of greedyfunctions) {
        let slashsymbol = "\\\\?" + symbolname;
// when we refactor to pull out the math pieces, allow more general
// characters that "(" as in (log^2 x
 // same err as in sup case above       var regExStr = "([\\$ \\(\\[\\{])" + slashsymbol + "\\_❲([^❲❳]*)❳";
        var regExStr = "(^|[\\$ \\(\\[\\{])" + slashsymbol + "\\_❲([^❲❳]*)❳";
//first case is already have parentheses around function argument
        var regExStrPlus = regExStr + " *" + "([\\(\\[\\{][^\\(\\)\\[\\]\\{\\}]+[\\)\\]\\}])";
// console.debug("regExStrPlus", regExStrPlus);
        var regEx = new RegExp(regExStrPlus, "g");
        str = str.replace(regEx, '$1wrapper❲functionsubscript(' + "base" + symbolname + ')($2)$3❳');
//second case is trig-like implied parentheses for function argument
   // another place where maybe we can better handle what the greed funciton grabs
        regExStrPlus = regExStr  + " " + "([^ \\$\\(\\)\\[\\]\\{\\}]+)";
        regEx = new RegExp(regExStrPlus, "g");
        str = str.replace(regEx, '$1wrapper❲functionsubscript(' + "base" + symbolname + ')($2)wrapper❲$3❳❳');
    }
    return str
}

function mathpreprocesslargeoperators(rawstring) {
    let str = rawstring;

// extract sum, prod, and other big tsings with limits
    for (let [symbolname, symbol] of Object.entries(symbolswithlimits)) {
// console.debug("looking for limits operator: symbolname", symbolname);
      if(str.includes(symbolname)) {
         symbolname = "\\\\?" + symbolname;
// first check for limits in brackets
         var regExStr = "(^| )" + symbolname + "\\_[\\[\\(\\{]([^ ]+)[\\]\\)\\}]\\^[\\[\\(\\{]([^ ]+)[\\]\\)\\}]";
         var regEx = new RegExp(regExStr, "g");
         str = str.replace(regEx, '$1opwrap(limsop(' + symbol + ')($2)($3))⚡');
// then only lower limit in brackets
         var regExStr = "(^|\\$| )" + symbolname + "\\_[\\[\\(\\{]([^ ]+)[\\]\\)\\}]\\^([^ ]+)";
         var regEx = new RegExp(regExStr, "g");
         str = str.replace(regEx, '$1opwrap(limsop(' + symbol + ')($2)($3))⚡');
// now assume the limits are not in parentheses.  First check for lower and upper
         regExStr = "(\\b)" + symbolname + "\\_([^ ]+)\\^([^ ]+)";
    // for now assume no spaces in the limits
console.debug("regExStr", regExStr);
         regEx = new RegExp(regExStr, "g");
         str = str.replace(regEx, '$1opwrap(limsop(' + symbol + ')($2)($3))⚡');
// now only lower, in brackets
         regExStr = "(^|\\$| )" + symbolname + "\\_[\\[\\(\\{]([^ ]+)[\\]\\)\\}]";
 // experiment       regExStr = "(\\$| )" + symbolname + "\\_[\\[\\(\\{]([^ ]+)[\\]\\)\\}] *([^ \\$]+)( |\\$)";
console.debug("regExStr", regExStr);
         regEx = new RegExp(regExStr, "g");
         str = str.replace(regEx, '$1opwrap(llimop(' + symbol + ')($2))⚡');
 // experiemnt        str = str.replace(regEx, '$1opwrap(llimop(' + symbol + ')($2)($3))$4');
// now only lower limit no brackets (when do we wrap all subscripts?)
         regExStr = "(^|\\$| )" + symbolname + "\\_([^ ]+)";
 //experiment        regExStr = "(\\$| )" + symbolname + "\\_([^ ]+) *([^ \\$]+)( |\\$)";
    // for now assume no spaces in the summand
console.debug("regExStr for llimop", regExStr);
         regEx = new RegExp(regExStr, "g");
         str = str.replace(regEx, '$1opwrap(llimop(' + symbol + ')($2))⚡');
  //experiment       str = str.replace(regEx, '$1opwrap(llimop(' + symbol + ')($2)($3))$4');
// no limits
         regExStr = "(^|\\$| )" + symbolname + "( |\\$)";
    // for now assume no spaces in the summand
 // idea: try only mathpreprocessing the limits, and let the parsing code
 // handle the summand
console.debug("regExStr", regExStr);
         regEx = new RegExp(regExStr, "g");
         str = str.replace(regEx, '$1opwrap(bigop(' + symbol + '))$2⚡');
      }
    }

    return str
}

function mathpreprocessother(rawstring) {
    let str = rawstring;

    str = str.replace(/([^ \$\(\)\[\]\{\}]+):([^ ]+) to ([^ \$\(\)\[\]\{\}]+)/g,
               "fundef($1)($2)($3)");
    str = str.replace(/([^\$\|]+) cong(ruent)* ([^\$]+) mod ([^\$\{\}]+)/g,  // note: assumes an isolated equation
                                                   // or maybe a condition in set builder
               "congruentmod($1)($3)($4)");
   // how to we smoothly handle negated relations?
    str = str.replace(/([^\$\|]+) !cong(ruent)* ([^\$]+) mod ([^\$\{\}]+)/g,
               "notcongruentmod($1)($3)($4)");

    return str
}

export function hide_xml(text) {
    let the_ans = text;

    the_ans = the_ans.replace(/</g, "⦉");
    the_ans = the_ans.replace(/>/g, "⦊");

    return the_ans
}
export function unhide_xml(text) {
    let the_ans = text;

    the_ans = the_ans.replace(/⦉/g, "<");
    the_ans = the_ans.replace(/⦊/g, ">");

    return the_ans
}

function dollars_to_tags(text) {
    let the_ans = text;

// see: hide_xml
//    the_ans = the_ans.replace(/<\s/, "&lt; ");

    the_ans = the_ans.replace(/\$\$\s*([^\$]+)\s*\$\$/g, "<md sourcetag=\"dd\">$1</md>");

    the_ans = the_ans.replace(/\\\[/g, "<md sourcetag=\"sb\">");
    the_ans = the_ans.replace(/\\\]/g, "</md>");

    the_ans = the_ans.replace(/(^|\s|-)\$([^\$\f\r\n]+)\$(\s|\.|,|;|:|\?|!|$)/g, "$1<m sourcetag=\"d\">$2</m>$3");
       //twice, for $5$-$6$
    the_ans = the_ans.replace(/(^|\s|-)\$([^\$\f\r\n]+)\$(\s|\.|,|;|:|\?|!|-|$)/g, "$1<m sourcetag=\"d\">$2</m>$3");

    the_ans = the_ans.replace(/\\\(/g, "<m sourcetag=\"sp\">");
    the_ans = the_ans.replace(/\\\)/g, "</m>");

    return the_ans
}

// not "myHash": this shows up repeatedly when you search
String.prototype.myHash = function() {
  var hash = 0,
    i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

function xmlToObject(xml_st) {
  let xml;
  xml_st = "<bbbb>" + xml_st + "</bbbb>";

  if (typeof xml_st == "string") {
 //   parseLog("xml starts", xml_st.slice(0,50));
    let parser = new DOMParser();
    xml = parser.parseFromString(xml_st, "text/xml");
//    xml = $.parseXML(xml_st);
  } else {
    xml = xml_st
  }

  console.debug("xml", xml);
  console.debug("xml.nodeName", xml.nodeName, "xml.nodeType", xml.nodeType);
//  let obj = {};
  let this_id = "";
  let this_node_content = xml.nodeValue;

  if (xml.nodeType == 9) {  // document
      xml = xml.documentElement;
  }

//  return xml

  let these_nodes = [];

  for (const node of xml.childNodes) {
      let this_node = [];
      if (node.nodeName == "#text") {
        this_node.push("text");
        this_node.push("");
        this_node.push(node.nodeValue);  // do I mean textContent ?
      } else {
        this_node.push(node.nodeName);
        this_node.push(node.attributes);
        this_node.push(node.innerHTML);
      }
      this_node.push(this_node[2].myHash());

      these_nodes.push(this_node);
  }

  return these_nodes
}

export function separatePieces(rawstring) {
    let str = rawstring;

    str = dollars_to_tags(str);

console.debug("str with tags", str);

    let str_separated = xmlToObject(str);

console.debug("this_node_content", str_separated);

    return str_separated
}

export function assemble(sourcelist, componentdict, conversiontarget="MathML") {

    let ans = "";

    for (const element of sourcelist) {
        let tags = outputTagsOf[element[0]];
console.debug("element", element);
console.debug("componentdict", componentdict);
console.debug(conversiontarget, "tags",tags);
   //     let content = componentdict[[element[3], conversiontarget]];
        const contentkey = element[3] + "," + conversiontarget;
console.debug("contentkey", contentkey);
        let content = componentdict[contentkey][2];
        ans += tags[conversiontarget][0] + content + tags[conversiontarget][1];
    }

    return ans
}

export function postprocess(answer, conversiontarget) {

  let str = answer.trim();

  str = str.replace(/␣/g, " ");  // can occur in text in math

  if(conversiontarget == "Speech") {
      str = str.replace(/(^| |\n)\$([^$]+)\$( |\.|\,|:|;|\?|\!|\n|$)/g, "$1&nbsp;&nbsp;<em>$2</em>&nbsp;&nbsp;$3");
      str = str.replace(/(^| |\n)\$([^$]+)\$( |\.|\,|:|;|\?|\!|\n|$)/g, "$1&nbsp;&nbsp;<em>$2</em>&nbsp;&nbsp;$3");
      str = str.replace(/(^| |\n)\$([^$]+)\$( |\.|\,|:|;|\?|\!|\n|$)/g, "$1&nbsp;&nbsp;<em>$2</em>&nbsp;&nbsp;$3");
      str = str.replace(/\$\$(.+?)\$\$/sg, "\n<em>$1</em>\n");
      str = str.replace(/\\,/g, " ");
      str = str.replace(/∏/g, "product");
      str = str.replace(/∑/g, "sum");
  } else if(conversiontarget == "MathML") {
  //    str = str.replace(/(^| )\$([^$]+)\$( |$)/g, "\n<math>$2</math>\n");
      str = str.replace(/\$\$(.+?)\$\$/sg, "\n<math display=\"block\">$1</math>\n");
      str = str.replace(/(^| |\n)\$\$(.+?)\$\$( |\.|\,|:|;|\?|\!|\n|$)/g, "\n<math display=\"block\">$2</math>$3\n");
      str = str.replace(/(^| |\n)\$(.+?)\$( |\.|\,|:|;|\?|\!|\n|$)/g, "\n<math>$2</math>$3\n");
      str = str.replace(/\\,/g, "");
// We use "wrap" to add attributes to a child, but don't know if there is
// a single child.  When there is, transfer the attributes to the single child
// refactor to imporve and reconcile this with "simplifyAnswer" in conversion.js
      str = str.replace(/<wrap([^>]+)>(<m[a-z]+[^<>]*)(>[^<>]*<\/m[a-z]+>)<\/wrap>/g, "$2$1$3");
// if (str.match(/.*wrap.*/)) { console.log("wrap on ", str)};
      str = str.replace(/<wrap /g, "<mrow ");
      str = str.replace(/<\/wrap>/g, "</mrow>");
/*
      str = str.replace(/\\,/g, "<mspace width=\"0.16em\"></mspace>");
*/
  }

  return str
}
