/*
The js file for the test interface.

2022.09.27 created

2022.10.17 add global call
2022.10.25 add MathJax support
*/
import './spacemath.css'
import { convert } from './convert.js'
import { TranslateTable } from './TranslateTable.js'



"use strict";
let sourceTextArea = document.getElementById("sourceTextArea");
let echosourceTextArea = document.getElementById("echosourceTextArea");
let mathmlTextArea = document.getElementById("mathmlTextArea");
let pretextTextArea = document.getElementById("pretextTextArea");
let speechTextArea = document.getElementById("speechTextArea");
let mathJaxArea = document.getElementById("MathJaxArea");
let mathmlDisplayArea = document.getElementById("mathmlDisplayArea");


/*
var dictionary;
fetch("dictionary.json").then(
        function(u){ return u.json();}
      ).then(
        function(json){
          dictionary = json;
        }
      )
      */

var theSpaceMathInML;

var thisEnvironment = "";  // bad idea, not used

if (sourceTextArea.addEventListener) {
  sourceTextArea.addEventListener('input', function() {
/*
*/
      let allthetext = sourceTextArea.value;
      allthetext = allthetext.replace(/&/g, "🎯");

      if(echosourceTextArea) {
          echosourceTextArea.value = convert(allthetext, "LaTeX");
      }

      if(speechTextArea) {
          speechTextArea.innerHTML = '" ' + convert(allthetext, "Speech") + ' "';
      }

      if(mathmlTextArea ||  mathmlDisplayArea) {
          theSpaceMathInML = convert(allthetext, "MathML");

          if(mathmlTextArea) { mathmlTextArea.value = theSpaceMathInML }
          if(mathmlDisplayArea) { mathmlDisplayArea.innerHTML = theSpaceMathInML }
      }
/*
*/
/*
      mathJaxArea.innerHTML = convert(echosourceTextArea.value, "LaTeX2MathJax");
      MathJax.Hub.Queue(["Typeset",MathJax.Hub,"MathJaxArea"]);
*/
  }, false);
}
/* is this part ever used? */
/*
 else if (sourceTextArea.attachEvent) {
  error
  sourceTextArea.attachEvent('onpropertychange', function() {
      echosourceTextArea.value = convert(sourceTextArea.value, "LaTeX");
      mathmlTextArea.value = convert(sourceTextArea.value, "LaTeX");
      speechTextArea.value = '"' + convert(sourceTextArea.value, "LaTeX") + '"';
      pretextTextArea.value = convert(sourceTextArea.value, "LaTeX");
      mathJaxArea.innerHTML = convert(echosourceTextArea.value, "LaTeX2MathJax");
      MathJax.Hub.Queue(["Typeset",MathJax.Hub,"MathJaxArea"]);
  });
}
*/
