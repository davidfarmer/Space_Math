export var dictionary = {
  "+": {
    "comment": [
      "¼Ó"
    ],
    "alternative": [
      "plus",
      "¼Ó"
    ],
    "type": "operator",
    "priority": 10,
    "rule": {
      "2,3": "#1 + #3"
    },
    "ruleML": {
      "2,3": "#1<mo>+</mo>#3"
    },
    "speech": {
      "2,3": "#1 plus #3"
    }
  },
  "-": {
    "comment": [
      "¼õ"
    ],
    "alternative": [
      "minus",
      "subtracts",
      "¼õ"
    ],
    "type": "operator",
    "priority": 10,
    "mustHaveLeftArgument": true,
    "rule": {
      "2,3": "#1 - #3"
    },
    "ruleML": {
      "2,3": "#1<mo>-</mo>#3"
    },
    "speech": {
      "2,3": "#1 minus #3"
    }
   },
"of": {
    "comment": [
    ],
    "alternative": [
      "of",
      "circ"
    ],
    "type": "operator",
    "priority": 10,
    "mustHaveLeftArgument": true,
    "rule": {
      "2,3": "#1 \\circ #3"
    },
    "ruleML": {
      "2,3": "#1<mo intent=\"of\">∘</mo>#3"
    },
    "speech": {
      "2,3": "#1 of #3"
    }
   },

  "⭐": {
    "comment": [],
    "alternative": [],
    "type": "operator",
    "priority": 20,
    "rule": {
      "2,3": "#1 * #3"
    },
    "ruleML": {
      "2,3": "#1<mo>∗</mo>#3"
    },
    "speech": {
      "2,3": "#1 star #3"
    }
  },
  "😑": {    // used for "negative", as distinct from subtraction
    "comment": [ ],
    "alternative": [ ],
    "type": "function",
    "priority": 91,
    "rule": {
      "1,2": "{-#2}"
    },
    "ruleML": {
//      "1,2": "<mo>-</mo>#2"
      "1,2": "<mrow><mo>-</mo>#2</mrow>"
    },
    "speech": {
      "1,2": " quantityN negative #2 Nendquantity "
    }
  },
  "⚡": {   // funciton application
    "comment": [ ],
    "alternative": [ ],
    "type": "operator",
    "priority": 20,
    "rule": {
      "2,3": "#1 #3"
    },
    "ruleML": {
      "2,3": "#1<mo>&ApplyFunction;</mo>#3"
    },
    "speech": {
      "2,3": "#1 of #3"
    }
  },
  "*": {
    "comment": [
      "³Ë"
    ],
    "alternative": [
      "multiply",
      "³Ë"
    ],
    "type": "operator",
    "priority": 20,
    "rule": {
      "2,3": "#1 #3"
    },
    "ruleML": {
      "2,3": "#1<mo>&InvisibleTimes;</mo>#3"
    },
    "speech": {
      "2,3": "#1 times #3"
    }
  },
  "/": {
    "comment": [
      "³ý, ³ýÒÔ"
    ],
    "alternative": [
      "over",
      "divide",
      "³ý",
      "³ýÒÔ"
    ],
    "type": "operator",
    "wrappedarguments": true,
    "priority": 20,
    "rule": {
      "2,3": "\\frac{#1}{#3}"
    },
    "offpair": {
      "2,3": [ 1, 3 ]
    },
    "ruleML": {
      "2,3": "<mfrac><mrow>#1</mrow><mrow>#3</mrow></mfrac>"
    },
    "speech": {
      "2,3": "fraction #1 denominator #3 enddenominator"
    }
  },
  "//": {
    "alternative": [ ],
    "type": "operator",
    "priority": 20,
//    "offpair": {
//      "2,3": [ 1, 3 ]
//    },
    "rule": {
      "2,3": "#1 / #3"
    },
    "speech": {
      "2,3": " inline fraction #1 over #3 endfraction "
    },
    "ruleML": {
      "2,3": "#1<mo>/</mo>#3"
    }
  },
  "=": {
    "comment": [
      "µÈÓÚ"
    ],
    "alternative": [
      "equal",
      "µÈÓÚ"
    ],
    "type": "relation",
    "priority": 0,
//    "offpair": {
//      "2,3": [ 1, 3 ]
//    },
    "rule": {
      "2,3": "#1 = #3"
    },
    "ruleML": {
      "2,3": "#1<mo>=</mo>#3"
    },
    "speech": {
      "2,3": "#1 equals #3"
    }
  },
 "🎯": {
    "comment": [
    ],
    "alternative": [
    ],
    "type": "relation",
    "priority": 0,
//    "offpair": {
//      "2,3": [ 1, 3 ]
//    },
    "rule": {
      "2,3": "#1  #3"
    },
    "ruleML": {
      "2,3": "#1 #3"
    },
    "speech": {
      "2,3": "#1 #3"
    }
  },
  ">=": {
    "comment": [
      "´óÓÚµÈÓÚ"
    ],
    "alternative": [
      "⦊=",
      "ge",
      "geq",
      "´óÓÚµÈÓÚ"
    ],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\geq #3"
    },
    "ruleML": {
      "2,3": "#1<mo>≥</mo>#3"
    },
    "speech": {
      "2,3": "#1 greater than or equal to #3"
    }
  },
  "<=": {
    "comment": [
      "Ð¡ÓÚµÈÓÚ"
    ],
    "alternative": [
      "⦉=",
      "le",
      "leq",
      "Ð¡ÓÚµÈÓÚ"
    ],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\leq #3"
    },
    "ruleML": {
      "2,3": "#1<mo>≤</mo>#3"
    },
    "speech": {
      "2,3": "#1 less than or equal to #3"
    }
  },
  "^": {
    "comment": [
      "µ½",
      "ÖÕÖ¹Öµ",
      "´Î·½",
      "ÉÏ±ê"
    ],
    "alternative": [
      "µ½",
      "ÖÕÖ¹Öµ",
      "´Î·½",
      "ÉÏ±ê"
    ],
    "type": "operator",
    "priority": 30,
    "script": true,
    "rule": {
// go back and compare this to markBrackets called from if (newValue.includes("#@"+(i+1))){ in tree.js
 //     "2,3": "#1^#@3"
      "2,3": "#1^{#@3}"
    },
    "offpair": {
      "2,3": [ 3 ]
    },
    "ruleML": {
      "2,3": "<msup><mrow>#1</mrow><mrow>#@3</mrow></msup>"
   //   "2,3": "<msup>#1<mrow>#@3</mrow></msup>"
    },
    "speech": {
      "2,3": " quantityV #1 Vendquantity to the quantityE #@3 Eendquantity "
   //   "2,3": " #1 to the quantityE #@3 Eendquantity "
    }
  },
  "▲": {
    "comment": [ ],
    "alternative": [ ],
    "type": "operator",
    "priority": 30,
    "script": true,
    "rule": {
      "2,3": "#1^{#@3}"
    },
    "offpair": {
      "2,3": [ 3 ]
    },
    "ruleML": {
      "2,3": "<msup><mrow>#1</mrow><mrow>#@3</mrow></msup>"
    },
    "speech": {
      "2,3": " quantityV #1 Vendquantity derivative quantityE #@3 Eendquantity "
    }
  },
  "_": {
    "comment": [
      "´Ó",
      "³õÊ¼Öµ",
      "ÏÂ±ê"
    ],
    "alternative": [
      "´Ó",
      "³õÊ¼Öµ",
      "ÏÂ±ê"
    ],
    "type": "operator",
    "priority": 30,
    "script": true,
    "rule": {
      "2,3": "#1_{#@3}"
    },
    "offpair": {
      "2,3": [
        3
      ]
    },
    "ruleML": {
      "2,3": "<msub><mrow>#1</mrow><mrow>#@3</mrow></msub>"
    },
    "speech": {
      "2,3": " quantityX #1 Xendquantity sub quantityY #@3 Yendquantity "
    }
  },
  "subsup": {
    "comment": [ ],
    "alternative": [ ],
    "type": "operator",
    "priority": 30,
    "script": true,
    "rule": {
      "2,4": "#1_{#@3}^{#@4}"
    },
    "offpair": {
      "2,4": [ 3, 4 ]  // subsup is 2nd out of 4, and the 3rd and 4th have implied grouping
    },
    "ruleML": {
      "2,4": "<msubsup><mrow>#1</mrow><mrow>#@3</mrow><mrow>#@4</mrow></msubsup>"
    },
    "speech": {
      "2,4": " quantityX #1 Xendquantity sub quantityY #@3 Yendquantity to the quantityZ #@4 Zendquantity"
    }
  },
  "^^": {
    "alternative": [],
    "type": "operator",
    "priority": 30,
    "script": true,
    "rule": {
      "2,3": "#{}^#@3 #1"
    },
    "offpair": {
      "2,3": [
        3
      ]
    }
  },
  "__": {
    "alternative": [],
    "type": "operator",
    "priority": 30,
    "script": true,
    "rule": {
      "2,3": "#{}_#@3 #1"
    },
    "offpair": {
      "2,3": [
        3
      ]
    }
  },
  "<": {
    "comment": [
      "Ð¡ÓÚ"
    ],
    "alternative": [
      "⦉",
      "less than",
      "Ð¡ÓÚ"
    ],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\lt #3"
    },
    "ruleML": {
      "2,3": "#1<mo>&lt;</mo>#3"
    },
    "speech": {
      "2,3": "  #1 less than #3 "
    }
  },
  ">": {
    "comment": [
      "´óÓÚ"
    ],
    "alternative": [
      "⦊",
      "greater than",
      "´óÓÚ"
    ],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\gt #3"
    },
    "ruleML": {
      "2,3": "#1<mo>&gt;</mo>#3"
    },
    "speech": {
      "2,3": "  #1 greater than #3 "
    }
  },
  "\n": {
    "alternative": [
 //     ""
    ],
    "type": "relation",
    "priority": -10,
    "rule": {
      "2,3": "#1 \n #3"
    }
  },
  ",": {
    "alternative": [
//      ""
    ],
    "type": "operator",
    "priority": -10,
    "rule": {
      "2,3": "#1,#3"
    },
    "ruleML": {
      "2,3": "#1<mo>,</mo>#3"
    },
    "speech": {
      "2,3": "#1 comma #3"
    }
  },
  "?": {
    "alternative": [
//      ""
    ],
    "type": "symbol",
    "priority": 10,
    "rule": {
      "2,3": "#1,#3"
    },
    "ruleML": {
      "2,3": "#1<mo>,</mo>#3"
    },
    "speech": {
      "2,3": "#1 comma #3"
    }
  },
  ";": {
    "alternative": [
//      ""
    ],
    "type": "operator",
    "priority": -10,
    "rule": {
      "2,3": "#1;#3"
    }
  },
  "|": {
    "alternative": [
//      ""
    ],
    "type": "operator",
    "priority": -10,
    "rule": {
      "2,3": "#1 \\mid #3"
    },
    "speech": {
      "2,3": "#1 divides #3"
    },
    "ruleML": {
      "2,3": "#1<mo intent=\"divides\">|</mo>#3"
    }
  },
  "+-": {
    "comment": [
      "Õý¸º",
      "¼Ó¼õ"
    ],
    "alternative": [
      "plusminus",
      "pm",
      "¼Ó¼õ",
      "Õý¸º"
    ],
    "type": "operator",
    "priority": 10,
    "rule": {
      "2,3": "#1 \\pm #3"
    },
    "ruleML": {
      "2,3": "#1<mo>±</mo>#3"
    },
    "speech": {
      "2,3": "#1 plus-minus #3"
    }
  },
  "-+": {
    "comment": [
    ],
    "alternative": [
      "minusplus",
      "mp"
    ],
    "type": "operator",
    "priority": 10,
    "rule": {
      "2,3": "#1 \\mp #3"
    },
    "ruleML": {
      "2,3": "#1<mo>∓</mo>#3"
    },
    "speech": {
      "2,3": "#1 minus-plus #3"
    }
  },
  "del": {
    "comment": [
      "Æ«Î¢·Ö"
    ],
    "alternative": [
      "partial",
      "Æ«Î¢·Ö"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\partial"
    }
  },
  "grad": {
    "alternative": [
      "nabla"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\nabla"
    }
  },
  "O/": {
    "alternative": [
      "emptyset"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\emptyset"
    },
    "speech": {
      "1,1": " empty set "
    },
    "ruleML": {
      "1,1": "<mi>∅</mi>"
    }
  },
  "infty": {
    "comment": [
      "ÎÞÇî´ó"
    ],
    "alternative": [
      "infinity",
      "oo",
      "ÎÞÇî´ó"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\infty"
    },
    "speech": {
      "1,1": " infinity "
    },
    "ruleML": {
      "1,1": "<mi>∞</mi>"
    }
  },
  "✂️": {
    "comment": [ ],
    "alternative": [ ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": ""
    },
    "speech": {
      "1,1": ""
    },
    "ruleML": {
      "1,1": ""
    }
  },
  "aleph": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\aleph"
    },
    "speech": {
      "1,1": " aleph "
    },
    "ruleML": {
      "1,1": "<mi>א</mi>"
    }
  },
  "backslash": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\backslash "
    },
    "speech": {
      "1,1": " backslash "
    },
    "ruleML": {
      "1,1": "<mi>\\</mi>"
    }
  },
  "'": {
    "comment": [
      "ËùÒÔ"
    ],
    "alternative": [
      "prime"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "'"
    },
    "speech": {
      "1,1": " prime "
    },
    "ruleML": {
      "1,1": "<mo>&#x2032;</mo>"
    }
  },
  ":.": {
    "comment": [
      "ËùÒÔ"
    ],
    "alternative": [
      "therefore",
      "thus",
      "hence",
      "ËùÒÔ"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\therefore"
    }
  },
  ":'": {
    "comment": [
      "ÒòÎª"
    ],
    "alternative": [
      "because",
      "since",
      "ÒòÎª"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\because"
    }
  },
  "...": {
    "comment": [
      "Ê¡ÂÔºÅ"
    ],
    "alternative": [
      "Ê¡ÂÔºÅ"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "#comma?[\\ldots&\\cdots]"
    }
  },
  "ldots": {
    "comment": [
      "µÍÊ¡ÂÔºÅ"
    ],
    "alternative": [
      "µÍÊ¡ÂÔºÅ"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\ldots"
    }
  },
  "cdots": {
    "comment": [
      "ÖÐÊ¡ÂÔºÅ",
      "ÖÐÐÄÊ¡ÂÔºÅ"
    ],
    "alternative": [
      "ÖÐÊ¡ÂÔºÅ",
      "ÖÐÐÄÊ¡ÂÔºÅ"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\cdots"
    }
  },
  "vdots": {
    "comment": [
      "ÊúÊ¡ÂÔºÅ"
    ],
    "alternative": [
      "ÊúÊ¡ÂÔºÅ"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\vdots"
    }
  },
  "ddots": {
    "comment": [
      "Ð±Ê¡ÂÔºÅ"
    ],
    "alternative": [
      "Ð±Ê¡ÂÔºÅ"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\ddots"
    }
  },
  "frown": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\frown"
    }
  },
  "diamond": {
    "comment": [
      "ÁâÐÎ"
    ],
    "alternative": [
      "ÁâÐÎ"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\diamond"
    }
  },
  "square": {
    "comment": [
      "·½ÐÎ",
      "Õý·½ÐÎ"
    ],
    "alternative": [
      "·½ÐÎ",
      "Õý·½ÐÎ"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\square"
    }
  },
  "CC": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\mathbb{C}"
    },
    "speech": {
      "1,1": " C "
    },
    "ruleML": {
      "1,1": "<mi>ℂ</mi>"
    }
  },
  "NN": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\mathbb{N}"
    },
    "speech": {
      "1,1": " N "
    },
    "ruleML": {
      "1,1": "<mi>ℕ</mi>"
    }
  },
  "QQ": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\mathbb{Q}"
    },
    "speech": {
      "1,1": " Q "
    },
    "ruleML": {
      "1,1": "<mi>ℚ</mi>"
    }
  },
  "RR": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\mathbb{R}"
    },
    "speech": {
      "1,1": " R "
    },
    "ruleML": {
      "1,1": "<mi>ℝ</mi>"
    }
  },
  "ZZ": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\mathbb{Z}"
    },
    "speech": {
      "1,1": " Z "
    },
    "ruleML": {
      "1,1": "<mi>ℤ</mi>"
    }
  },
  "sqrt": {
    "alternative": [],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "\\sqrt{#2}"
    },
    "speech": {
      "1,2": " square root of quantityZ #2 Zendquantity "
    },
    "ruleML": {
      "1,2": "<msqrt><mrow>#2</mrow></msqrt>"
    }
  },
  "lim": {
    "alternative": [],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "\\lim_{#2}"
    },
    "speech": {
      "1,2": " limit of #2 endlimit "
    },
    "ruleML": {
      "1,2": "<munder><mo>lim</mo><mrow>#2</mrow></munder>"
    }
  },
  "quote": {
    "alternative": [],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "\\text{ #2 }"
    },
    "speech": {
      "1,2": " #2 "
    },
    "ruleML": {
      "1,2": "<mspace width=\"0.5em\"></mspace><mtext>#2</mtext><mspace width=\"0.5em\"></mspace>"
    }
  },
  "gcd": {
    "alternative": [],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "\\gcd(#2)"
    },
    "speech": {
      "1,2": " gcd of quantityZ #2 Zendquantity "
    },
    "ruleML": {
      "1,2": "<mi>gcd</mi><mo>&ApplyFunction;</mo>(#2)"
    }
  },
  "cardinality": {
    "comment": [
      "»ùÊý"
    ],
    "alternative": [
      "card",
      "»ùÊý"
    ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "|#2|"
    },
    "speech": {
      "1,2": " cardinality of quantityB #2 Bendquantity "
    },
    "ruleML": {
      "1,2": "<mrow intent=\"cardinality($b)\"><mo>|</mo><wrap arg=\"b\">#2</wrap><mo>|</mo></mrow>"
    }
  },
  "abs": {
    "comment": [
      "¾ø¶ÔÖµ"
    ],
    "alternative": [
      "absolute",
      "¾ø¶ÔÖµ"
    ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "|#2|"
    },
    "speech": {
      "1,2": " absolute value of quantityB #2 Bendquantity "
    },
    "ruleML": {
      "1,2": "<mrow intent=\"absolute-value($absb)\"><mo>|</mo><mrow arg=\"absb\">#2</mrow><mo>|</mo></mrow>"
    }
  },
  "norm": {
    "comment": [       ],
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "|#2|"
    },
    "speech": {
      "1,2": " norm of quantityB #2 Bendquantity "
    },
    "ruleML": {
      "1,2": "<mrow intent=\"norm($normb)\"><mo>|</mo><mrow arg=\"normb\">#2</mrow><mo>|</mo></mrow>"
    }
  },
  "det": {
    "comment": [
      "¾ø¶ÔÖµ"
    ],
    "alternative": [
      "determinant"
    ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "|#2|"
    },
    "speech": {
      "1,2": " determinant of #2 "
    },
    "ruleML": {
      "1,2": "<mrow intent=\"determinant($detb)\"><mo>|</mo><wrap arg=\"detb\">#2</wrap><mo>|</mo></mrow>"
    }
  },
  "order": {  // for a group or group element
    "comment": [
      "¾ø¶ÔÖµ"
    ],
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "|#2|"
    },
    "speech": {
      "1,2": " order of #2 "
    },
    "ruleML": {
      "1,2": "<mrow intent=\"order($orderb)\"><mo>|</mo><wrap arg=\"orderb\">#2</wrap><mo>|</mo></mrow>"
    }
  },
 "span": {
    "comment": [],
    "alternative": [],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "\\langle #2\\rangle"
    },
    "speech": {
      "1,2": " span of #2 "
    },
    "ruleML": {
      "1,2": "<mrow intent=\"span($c)\"><mo>⟨</mo><mrow arg=\"c\">#2</mrow><mo>⟩</mo></mrow>"
    }
  },
 "vector": {
    "comment": [],
    "alternative": [],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "\\langle #2\\rangle"
    },
    "speech": {
      "1,2": "coordinate vector #2 endvector"
    },
    "ruleML": {
      "1,2": "<mrow intent=\"coordinate-vector($c)\"><mo>⟨</mo><mrow arg=\"c\">#2</mrow><mo>⟩</mo></mrow>"
    }
  },
 "anglebrackets": {
    "comment": [],
    "alternative": [],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "\\langle #2\\rangle"
    },
    "speech": {
      "1,2": " anglebrackets #2 endanglebrackets "
    },
    "ruleML": {
      "1,2": "<mrow intent=\"angle-brackets($c)\"><mo>⟨</mo><mrow arg=\"c\">#2</mrow><mo>⟩</mo></mrow>"
    }
  },
  "setof": {
    "comment": [],
    "alternative": [],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "\\{#2\\}"
    },
    "speech": {
      "1,2": "set #2 endset "
    },
    "ruleML": {
      "1,2": "<mrow intent=\"set($d)\"><mo>{</mo><mrow arg=\"d\">#2</mrow><mo>}</mo></mrow>"
    }
  },
  "floor": {
    "alternative": [],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "\\lfloor #2 \\rfloor"
    },
    "speech": {
      "1,2": "floor of #2 endfloor"
    },
    "ruleML": {
      "1,2": "<mrow intent=\"floor($e)\"><mo>⌊</mo><mrow arg=\"e\">#2</mrow><mo>⌋</mo></mrow>"
    }
  },
  "ceiling": {
    "alternative": [
      "ceil"
    ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "\\lceiling #2 \\rceiling"
    }
  },
  "bigO": {
    "alternative": [ ],
    "type": "function",
    "priority": 15,
    "rule": {
      "1,2": "O#2"
    },
    "speech": {
      "1,2": "big-Oh of #2"
    },
    "ruleML": {
      "1,2": "<mi intent=\"bigO\">O</mi><mo>&ApplyFunction;</mo>#2"
    }
  },
  "log": {
    "alternative": [ ],
    "type": "function",
    "priority": 15,
    "rule": {
      "1,2": "\\log #2"
    },
    "speech": {
      "1,2": "log of #2"
    },
    "ruleML": {
      "1,2": "<mi>log</mi><mo>&ApplyFunction;</mo>#2"
    }
  },
  "llog": {
    "alternative": [ ],
    "type": "function",
    "priority": 15,
    "rule": {
      "1,2": "\\log_2 #2"
    },
    "speech": {
      "1,2": "log log of #2"
    },
    "ruleML": {
      "1,2": "<msub><mi>log</mi><mn intent=\":index\">2</mn></msub><mo>&ApplyFunction;</mo>#2"
    }
  },
  "lllog": {
    "alternative": [ ],
    "type": "function",
    "priority": 15,
    "rule": {
      "1,2": "\\log_3 #2"
    },
    "speech": {
      "1,2": "log log log of #2"
    },
    "ruleML": {
      "1,2": "<msub><mi>log</mi><mn intent=\":index\">3</mn></msub><mo>&ApplyFunction;</mo>#2"
    }
  },
  "baselog": {
    "alternative": [ ],
    "type": "function",
    "priority": 15,
    "rule": {
      "1,2": "\\log"
    },
    "speech": {
      "1,2": "log "
    },
    "ruleML": {
      "1,2": "log"
    }
  },
  "ln": {
    "alternative": [
      "ln"
    ],
    "type": "function",
    "priority": 15,
    "rule": {
      "1,2": "\\ln #2"
    },
    "speech": {
      "1,2": "natural log of #2"
    },
    "ruleML": {
      "1,2": "<mi>ln</mi><mo>&ApplyFunction;</mo>#2"
    }
  },
  "baseln": {
    "alternative": [ ],
    "type": "function",
    "priority": 15,
    "rule": {
      "1,2": "\\ln"
    },
    "speech": {
      "1,2": "natural log "
    },
    "ruleML": {
      "1,2": "ln"
    }
  },
/*
  "sin": {   // ??? delete this and cos because handled as a category
    "alternative": [
      "sine"
    ],
    "type": "function",
    "priority": 15,
    "rule": {
      "1,2": "\\sin #2"
    },
    "speech": {
      "1,2": "sine #2"
    },
    "ruleML": {
      "1,2": "<mi>sin</mi><mo>&ApplyFunction;</mo>#2"
    }
  },
  "cos": {
    "alternative": [
      "cosine"
    ],
    "type": "function",
    "priority": 15,
    "rule": {
      "1,2": "\\cos #2"
    }
  },
*/
  "root": {
    "alternative": [],
    "type": "function",
    "priority": 55,
    "extraArgument": 1,
    "offpair": {
      "1,3": [
        2,
        3
      ]
    },
    "rule": {
      "1,3": "\\sqrt[#2]{#3}",
      "1,2": "\\sqrt{#2}"
    }
  },
  "frac": {
    "alternative": [],
    "type": "function",
    "priority": 20,
    "extraArgument": 1,
    "offpair": {
      "1,3": [ 2, 3 ]
    },
    "rule": {
      "1,3": "\\frac{#2}{#3}",
      "1,2": "\\frac{#2@1}{#2@-1}"
    }
  },
  "summm": {
    "comment": [
      "×ÜºÍ",
      "ÇóºÍ"
    ],
    "alternative": [
      "summation",
      "×ÜºÍ",
      "ÇóºÍ"
    ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "\\sum{#2}"
    }
  },
  "fundef": {  // as in   f : a -> b
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,4": [ 1, 2, 3, 4 ]
    },
    "extraArgument": 2,
    "rule": {
      "1,4": "#2\\,:\\, #3 \to #4"
    },
    "speech": {
      "1,4": "function #2 from #3 to #4 "
    },
    "ruleML": {
      "1,4": "<mrow>#2<mo>:</mo>#3<mo>→</mo>#4</mrow>"
    }
  },
  "congruentmod": {  // as in   a \equiv b (mod c)
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,4": [ 1, 2, 3, 4 ]
    },
    "extraArgument": 2,
    "rule": {
      "1,4": "#2\\equiv #3 \\pmod  #4"
    },
    "speech": {
      "1,4": "#2 congruent to #3 modulo #4 "
    },
    "ruleML": {
      "1,4": "<mrow>#2<mo>≡</mo>#3<mspace width=\"0.5em\"></mspace><mo>(</mo><mi>mod</mi><mspace width=\"0.25em\"></mspace>#4<mo>)</mo></mrow>"
    }
  },
  "notcongruentmod": {  // as in   a \equiv b (mod c)
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,4": [ 1, 2, 3, 4 ]
    },
    "extraArgument": 2,
    "rule": {
      "1,4": "#2\\not\\equiv #3 \\pmod  #4"
    },
    "speech": {
      "1,4": "#2 not congruent to #3 modulo #4 "
    },
    "ruleML": {
      "1,4": "<mrow>#2<mo>≢</mo>#3<mspace width=\"0.5em\"></mspace><mo>(</mo><mi>mod</mi><mspace width=\"0.25em\"></mspace>#4<mo>)</mo></mrow>"
    }
  },
  "wrapper": {  // a trick to group quantities without adding parentheses
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [ 2 ]
    },
    "rule": {
      "1,2": " #2 "
    },
    "speech": {
      "1,2": "#2"
    },
    "ruleML": {
      "1,2": "#2"
    }
  },
  "opwrap": {  // a large operator, like sum_n  , which acts like a function
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [ 2 ],
 //     "1,3": [ 2, 3 ]
      "1,3": [ 2 ]
    },
//    "extraArgument": 1,
    "rule": {
      "1,2": " #2 ",
      "1,3": " #2{#3}"
    },
    "speech": {
      "1,2": "#2",
      "1,3": "#2 #3 "
    },
    "ruleML": {
      "1,2": "#2",
      "1,3": "#2<mrow>#3</mrow>"
    }
  },
  "limsop": {  // large operators with lower ad upper limits, such as \sum and \prod, but not integrals
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,3": [ 2, 3 ],  // lower limit
      "1,4": [ 1, 2, 3, 4 ],  //lower and upper lim
      "1,5": [ 1, 2, 3, 4, 5 ]  // op, lower lim, upper lim, summand ???
    },
    "extraArgument": 2,
    "rule": {
      "1,4": "#2_{#3}^{#4}"
    },
    "speech": {
      "1,4": " #2 from #3 to #4 "
    },
    "ruleML": {
      "1,4": "<munderover>#2<mrow>#3</mrow><mrow>#4</mrow></munderover>"
    }
  },
  "llimop": {  // large operators with limits, such as \sum and \prod, but not integrals
            // lower lim only
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,3": [ 2, 3 ],  // lower limit
// experiment      "1,4": [ 2, 3, 4 ]  // lower limit and argument
    },
    "extraArgument": 1,
    "rule": {
      "1,3": "#2_{#3}",
// experiment      "1,4": "#2_{#3} #4"
    },
    "speech": {
      "1,3": " #2 over #3 ",
 // experiment     "1,4": " #2 over #3 of #4 "
    },
    "ruleML": {
      "1,3": "<munder>#2<mrow>#3</mrow></munder>",
// experiment      "1,4": "<munder><mo>#2</mo><mrow>#3</mrow></munder>#4"
    }
  },
  "functionpower": {  // like f^2 as in log^2(x), which literally means log(x)^2,
            // but that is not how people write it
// currently messed up wrt number of arguments: not all of the below can happen
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
//      "1,2": [ 2 ],
//      "1,3": [ 2, 3 ],
      "1,4": [ 2, 3 ],
    },
    "extraArgument": 2,
    "rule": {
//      "1,2": "#1^{#2}",
//      "1,3": "#2^{#3}",
      "1,4": "#2^{#3}#4",
// experiment      "1,4": "#2_{#3} #4"
    },
    "speech": {
//      "1,2": " #1 power #2 ",
//      "1,3": " #2 power #3 ",
      "1,4": " #2 power #3 of quantityF #4 Fendquantity ",
 // experiment     "1,4": " #2 over #3 of #4 "
    },
    "ruleML": {
//      "1,2": "<msup><mi>#1</mi><mrow>#2</mrow></msup>",
//      "1,3": "<msup><mi>#2</mi><mrow>#3</mrow></msup>",
// the <mi>#2</mi> looks wrong, but the output is correct.  Maybe from the "base" version of the function?
      "1,4": "<msup><mi>#2</mi><mrow>#3</mrow></msup><mo>&ApplyFunction;</mo>#4",
    //  "1,4": "<msup><mi>#2</mi><mrow>#3</mrow></msup><mo>&ApplyFunction;</mo><mrow>#4</mrow>",
    }
  },
  "functionsubscript": {  // like J_0(x) or log_2(x)  (actually, only for special functions)
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,4": [ 2, 3 ],
    },
    "extraArgument": 2,
    "rule": {
      "1,4": "#2_{#3}#4",
// experiment      "1,4": "#2_{#3} #4"
    },
    "speech": {
      "1,4": " #2 sub #3 of quantityF #4 Fendquantity ",
    },
    "ruleML": {
      "1,4": "<msub><mi>#2</mi><mrow>#3</mrow></msub><mo>&ApplyFunction;</mo>#4",
 //     "1,4": "<msub><mi>#2</mi><mrow>#3</mrow></msub><mo>&ApplyFunction;</mo><mrow>#4</mrow>",
    }
  },
  "bigop": {  // large operators with no limits, such as \sum and \prod, but not integrals
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [ 2 ],
    },
    "rule": {
      "1,2": " #2 "
    },
    "speech": {
      "1,2": " #2 "
    },
    "ruleML": {
      "1,2": "#2"   // how to say it is big?
    }
  },
  "intlims": {  // various integrals
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,6": [ 2, 3, 4, 5, 6 ],  // op, lower lim, upper lim, "summand"
    },
    "extraArgument": 4,
    "rule": {
      "1,6": "#2_{#3}^{#4} #5 \\,d#6"
    },
    "speech": {
      "1,6": " #2 from #3 to #4 of #5 d#6 "
    },
    "ruleML": {
      "1,6": "<mrow><munderover>#2<mrow>#3</mrow><mrow>#4</mrow></munderover>#5<mspace width=\"0.167em\"></mspace><mo>&dd;</mo>#6</mrow>",
    }
   },
   "intlimsweight": {  // various integrals
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,7": [ 2, 3, 4, 5, 6, 7 ],  // op, lower lim, upper lim, "summand"
    },
    "extraArgument": 5,
    "rule": {
      "1,7": "#2_{#3}^{#4} #5 \\,\\frac{d#6}{#7}"
    },
    "speech": {
      "1,7": " #2 from #3 to #4 of #5 d#6 over #7 "
    },
    "ruleML": {
      "1,7": "<mrow><munderover>#2<mrow>#3</mrow><mrow>#4</mrow></munderover>#5<mspace width=\"0.167em\"></mspace><mfrac><mrow><mo>&dd;</mo>#6</mrow><mrow>#7</mrow></mfrac></mrow>"
     }
    },
    "intllimweight": {  // various integrals
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,6": [ 2, 3, 4, 5, 6 ],  // op, lower lim, upper lim, "summand"
    },
    "extraArgument": 4,
    "rule": {
      "1,6": "#2_{#3} #4 \\,\\frac{d#5}{#6}"
    },
    "speech": {
      "1,6": " #2 over #3 of #4 d#5 over #6 "
    },
    "ruleML": {
      "1,6": "<mrow><munder>#2<mrow>#3</mrow></munder>#4<mspace width=\"0.167em\"></mspace><mfrac><mrow><mo>&dd;</mo>#5</mrow><mrow>#6</mrow></mfrac></mrow>"
     }
   },
    "intllim": {  // various integrals
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,5": [ 2, 3, 4, 5 ],  // op, lower lim, "integrand",  var
    },
    "extraArgument": 3,
    "rule": {
      "1,5": "#2_{#3} #4 \\,d#5"
    },
    "speech": {
      "1,5": " #2 over #3 of #4 d#5 "
    },
    "ruleML": {
      "1,5": "<mrow><munder>#2<mrow>#3</mrow></munder>#4<mspace width=\"0.167em\"></mspace><mo>&dd;</mo>#5</</mrow>"
     }
    },
  "int": {
    "alternative": [
      "integral"
    ],
    "type": "function",
    "priority": 55,
    "family": [
      "int",
      "oint"
    ],
    "pairedArgument": "d",
    "rule": {
      "1,2": "\\int #2",
      "1,3": "\\int #2 \\,d#3",
      "1,5": "\\int_{#2}^{3} #4 \\,d#5"
    },
    "speech": {
      "1,2": "integral  #2",
      "1,3": "integral  #2 d#3",
      "1,5": "integral from #2 to #3 of #4 d#5"
    },
    "ruleML": {
      "1,2": "<mo>∫</mo>#2",
      "1,3": "<mo>∫</mo>#2<mspace width=\"0.167em\"></mspace><mo>&dd;</mo>#3"
    }
  },
  "oint": {
    "alternative": [],
    "type": "function",
    "priority": 55,
    "family": [
      "int",
      "oint"
    ],
    "pairedArgument": "d",
    "rule": {
      "1,3": "\\oint #2 \\,d#3",
      "1,2": "\\oint #2"
    }
  },
  "cup": {
    "alternative": [
      "union"
    ],
    "type": "operator",
    "priority": 10,
    "rule": {
      "2,3": "#1 \\cup #3"
    },
    "speech": {
      "2,3": " #1 union #3"
    },
    "ruleML": {
      "2,3": "#1<mo>∪</mo>#3"
    }
  },
  "cap": {
    "alternative": [
      "intersect", "intersection"
    ],
    "type": "operator",
    "priority": 10,
    "rule": {
      "2,3": "#1 \\cap #3"
    },
    "speech": {
      "2,3": " #1 intersect #3"
    },
    "ruleML": {
      "2,3": "#1<mo>∩</mo>#3"
    }
  },
  "in": {
    "alternative": [ "element" ],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\in #3"
    },
    "speech": {
      "2,3": "#1 in #3"
    },
    "ruleML": {
      "2,3": "#1<mo>&#x2208;</mo>#3"
    }
  },
  "notin": {
    "alternative": ["!in"],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\notin #3"
    },
    "speech": {
      "2,3": "#1 not in #3"
    },
    "ruleML": {
      "2,3": "#1<mo>∉</mo>#3"
    }
  },
  "subset": {
    "alternative": [ "subset" ],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\subset #3"
    },
    "speech": {
      "2,3": "#1 subset #3"
    },
    "ruleML": {
      "2,3": "#1<mo>⊂</mo>#3"
    }
  },
  "neq": {
    "alternative": ["!="],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\not= #3"
    },
    "speech": {
      "2,3": "#1 not equals #3"
    },
    "ruleML": {
      "2,3": "#1<mo>≠</mo>#3"
    }
  },
  "and": {
    "alternative": [],
    "type": "operator",
    "priority": 10,
    "rule": {
      "2,3": "#1 \\land #3"
    }
  },
  "or": {
    "alternative": [],
    "type": "operator",
    "priority": 10,
    "rule": {
      "2,3": "#1 \\lor #3"
    }
  },
  "forall": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\forall"
    }
  },
  "exist": {
    "alternative": [
      "exists"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\exists"
    },
    "speech": {
      "1,1": " there exists "
    },
    "ruleML": {
      "1,1": "<mi>∃</mi>"
    }
  },
  "not": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\neg"
    }
  },
  "perp": {  //  need something separate for V^perp
    "alternative": [
      "perpendicular", "bot"
    ],
    "type": "operator",
    "priority": 25,
    "rule": {
      "2,3": "#1 \\perp #3"
    },
    "speech": {
      "2,3": "#1 perpendicular to #3"
    },
    "ruleML": {
      "2,3": "<mrow>#1<mo intent=\"perpendicular\">⊥</mo>#3</mrow>"
    }
  },
  "dot": {
    "alternative": [],
    "type": "operator",
    "priority": 25,
    "rule": {
      "2,3": "#1 \\cdot #3"
    },
    "speech": {
      "2,3": "#1 dot #3"
    },
    "ruleML": {
      "2,3": "<mrow>#1<mo intent=\"dot-product\">⋅</mo>#3</mrow>"
    }
  },
  "product": {   // partial conflict with \prod_p L_p(s^{-s})
    "alternative": [],
    "type": "operator",
    "priority": 25,
    "rule": {
      "2,3": "#1 \\times #3"
    },
    "speech": {
      "2,3": " #1 product #3 "
    },
    "ruleML": {
      "2,3": "<mrow>#1<mo intent=\"direct-product\">×</mo>#3</mrow>"
    }
  },
  "times": {
    "alternative": ["×"],
    "type": "operator",
    "priority": 25,
    "rule": {
      "2,3": "#1 \\times #3"
    },
    "speech": {
      "2,3": "#1 times #3"
    },
    "ruleML": {
      "2,3": "<mrow>#1<mo intent=\"times\">×</mo>#3</mrow>"
    }
  },
  "by": {
    "alternative": [ ],
    "type": "operator",
    "priority": 25,
    "rule": {
      "2,3": "#1 \\times #3"
    },
    "speech": {
      "2,3": "#1 by #3"
    },
    "ruleML": {
      "2,3": "<mrow>#1<mo intent=\"dimension-product\">×</mo>#3</mrow>"
    }
  },
  "cross": {
    "alternative": [ ],
    "type": "operator",
    "priority": 20,
    "rule": {
      "2,3": "#1 \\times #3"
    },
    "speech": {
      "2,3": " #1 cross #3 "
    },
    "ruleML": {
      "2,3": "<mrow>#1</mrow><mo intent=\"cross-product\">×</mo><mrow>#3</mrow>"
    }
  },
  "oointerval": {
    "alternative": [ ],
    "type": "operator",
    "delimitedarguments": true,   // omit the temporary () around the input arguments
    "priority": 20,  // experiment, so we get mrows for complicated arguments
    "rule": {
      "2,3": "(#1, #3)"
    },
    "speech": {
      "2,3": " open interval from #1 to #3 endinterval "
    },
    "ruleML": {
      "2,3": "<mrow intent=\"open-interval($f, $g)\"><mo>(</mo><wrap arg=\"f\">#1</wrap><mo>,</mo><wrap arg=\"g\">#3</wrap><mo>)</mo></mrow>"
    }
  },
  "innergcd": {
    "alternative": [ ],
    "type": "operator",
    "delimitedarguments": true,   // omit the temporary () around the input arguments
    "priority": 20,  // experiment, so we get mrows for complicated arguments
    "rule": {
      "2,3": "(#1, #3)"
    },
    "speech": {
      "2,3": " gcd of #1 comma #3 endgcd "
    },
    "ruleML": {
      "2,3": "<mrow intent=\"gcd($f, $g)\"><mo>(</mo><wrap arg=\"f\">#1</wrap><mo>,</mo><wrap arg=\"g\">#3</wrap><mo>)</mo></mrow>"
    }
  },
  "cartesianpoint": {
    "alternative": [ ],
    "type": "operator",
    "delimitedarguments": true,   // omit the temporary () around the input arguments
    "priority": 20,
    "rule": {
      "2,3": "(#1, #3)"
    },
    "speech": {
      "2,3": " point with coordinates #1 comma #3 endpoint "
    },
    "ruleML": {
      "2,3": "<mrow intent=\"coordinate($f, $g)\"><mo>(</mo><wrap arg=\"f\">#1</wrap><mo>,</mo><wrap arg=\"g\">#3</wrap><mo>)</mo></mrow>"
    }
  },
  "innerproduct": {
    "alternative": [ ],
    "type": "operator",
    "delimitedarguments": true,   // omit the temporary () around the input arguments
    "priority": 20,
    "rule": {
      "2,3": "\\langle #1, #3\\rangle "
    },
    "speech": {
      "2,3": " inner product of #1 and #3 endinnerproduct "
    },
    "ruleML": {
      "2,3": "<mrow intent=\"inner-product($f, $g)\"><mo>⟨</mo><wrap arg=\"f\">#1</wrap><mo>,</mo><wrap arg=\"g\">#3</wrap><mo>⟩</mo></mrow>"
    }
  },
  "twovector": {
    "alternative": [ ],
    "type": "operator",
    "delimitedarguments": true,   // omit the temporary () around the input arguments
    "priority": 20,
    "rule": {
      "2,3": "\\langle #1, #3\\rangle "
    },
    "speech": {
      "2,3": " vector #1 comma #3 endvector "
    },
    "ruleML": {
      "2,3": "<mrow intent=\"vector($va, $vb)\"><mo>⟨</mo><wrap arg=\"va\">#1</wrap><mo>,</mo><wrap arg=\"vb\">#3</wrap><mo>⟩</mo></mrow>"
    }
  },
  "grouppresentation": {
    "alternative": [ ],
    "type": "operator",
    "delimitedarguments": true,   // omit the temporary () around the input arguments
    "priority": 20,
    "rule": {
      "2,3": "\\langle #1\\ |\\  #3\\rangle "
    },
    "speech": {
      "2,3": " group generated by #1 with relations #3 endrelations "
    },
    "ruleML": {
      "2,3": "<mrow intent=\"group-presentation($gpa, $gpb)\"><mo>⟨</mo><wrap arg=\"gpb\">#1</wrap><mo stretchy=\"true\">|</mo><wrap arg=\"gpb\">#3</wrap><mo>⟩</mo></mrow>"
    }
  },
 "setbuilder": {
    "alternative": [ ],
    "type": "operator",
    "delimitedarguments": true,   // omit the temporary () around the input arguments
    "priority": 20,
    "rule": {
      "2,3": "\\{ #1\\ |\\  #3\\} "
    },
    "speech": {
      "2,3": " set of #1 such that #3 endset "
    },
    "ruleML": {
      "2,3": "<mrow intent=\"set-such-that($sba, $sbb)\"><mo>{</mo><mrow arg=\"sba\">#1</mrow><mo>|</mo><mrow arg=\"sbb\">#3</mrow><mo>}</mo></mrow>"
    }
  },
  "braket": {
    "alternative": [ ],
    "type": "operator",
    "delimitedarguments": true,   // omit the temporary () around the input arguments
    "priority": 20,
    "rule": {
      "2,3": "\\langle #1 |  #3\\rangle "
    },
    "speech": {
      "2,3": " bra-ket of #1 and #3 endbra-ket "
    },
    "ruleML": {
      "2,3": "<mrow intent=\"bra-ket($bka, $bkb)\"><mo>⟨</mo><wrap arg=\"bka\">#1</wrap><mo>|</mo><wrap arg=\"bkb\">#3</wrap><mo>⟩</mo></mrow>"
    }
  },
  "isom": {
    "alternative": [
      "isomorphic"
    ],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\cong #3"
    },
    "speech": {
      "2,3": " #1 isomorphic to #3  "
    },
    "ruleML": {
      "2,3": "#1<mo>≅</mo>#3"
    }
  },
  "to": {
    "alternative": [ "->" , "rightarrow"],  // -> and similar below are intercepted by the preprocessor
    "type": "operator",
    "priority": 20,
    "rule": {
      "2,3": "#1 \\to #3"
    },
    "speech": {
      "2,3": " #1 to #3  "
    },
    "ruleML": {
      "2,3": "#1<mo>→</mo>#3"
    }
  },
  "longrightarrow": {
    "alternative": [ "-->" ],
    "type": "operator",
    "priority": 20,
    "rule": {
      "2,3": "#1 \\longrightarrow #3"
    },
    "speech": {
      "2,3": " #1 long-to #3  "
    },
    "ruleML": {
      "2,3": "#1<mo>⟶</mo>#3"
    }
  },
  "from": {
    "alternative": [ "<-" , "leftarrow"],
    "type": "operator",
    "priority": 20,
    "rule": {
      "2,3": "#1 \\leftarrow #3"
    },
    "speech": {
      "2,3": " #1 from #3  "
    },
    "ruleML": {
      "2,3": "#1<mo>←</mo>#3"
    }
  },
  "longleftarrow": {
    "alternative": [ "<--" ],
    "type": "operator",
    "priority": 20,
    "rule": {
      "2,3": "#1 \\longleftarrow #3"
    },
    "speech": {
      "2,3": " #1 long-from #3  "
    },
    "ruleML": {
      "2,3": "#1<mo>⟵</mo>#3"
    }
  },
  "mapsto": {
    "alternative": [],
    "type": "operator",
    "priority": 20,
    "rule": {
      "2,3": "#1 \\mapsto #3"
    },
    "speech": {
      "2,3": " #1 maps to #3  "
    },
    "ruleML": {
      "2,3": "#1<mo>↦</mo>#3"
    }
  },
  "~": {
    "alternative": ["asymp", "asymptotic" ],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\sim #3"
    },
    "speech": {
      "2,3": " #1 asymptotic to #3  "
    },
    "ruleML": {
      "2,3": "#1<mo intent=\"asymptotic\">~</mo>#3"
    }
  },
  "≈": {
    "alternative": ["approx", "approximate", "approximately" ],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\approx #3"
    },
    "speech": {
      "2,3": " #1 approximately equal to #3  "
    },
    "ruleML": {
      "2,3": "#1<mo intent=\"approximately\">≈</mo>#3"
    }
  },
  "cong": {
    "alternative": [ "congruent" ],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\equiv #3"
    },
    "speech": {
      "2,3": " #1 congruent to #3  "
    },
    "ruleML": {
      "2,3": "#1<mo intent=\"congruent\">≡</mo>#3"
    }
  },
  "!cong": {
    "alternative": [ "!congruent" ],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\not\\equiv #3"
    },
    "speech": {
      "2,3": " #1 not congruent to #3  "
    },
    "ruleML": {
      "2,3": "#1<mo intent=\"not-congruent\">≢</mo>#3"
    }
  },
  "equiv": {
    "alternative": [ "equivalent", ],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\equiv #3"
    },
    "speech": {
      "2,3": " #1 equivalent to #3  "
    },
    "ruleML": {
      "2,3": "#1<mo intent=\"equivalent\">≡</mo>#3"
    }
  },
  "identical": {
    "alternative": [ ],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\equiv #3"
    },
    "speech": {
      "2,3": " #1 identical to #3  "
    },
    "ruleML": {
      "2,3": "#1<mo intent=\"identical\">≡</mo>#3"
    }
  },
  ":=": {
    "alternative": ["coloneq", "coloneqq" ],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\coloneqq #3"
    },
    "speech": {
      "2,3": " #1 defined as #3  "
    },
    "ruleML": {
      "2,3": "#1<mo intent=\"defined-as\">≔</mo>#3"
    }
  },
  ":": {
    "alternative": ["colon"],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\colon #3"
    },
    "speech": {
      "2,3": " #1 colon #3  "
    },
    "ruleML": {
      "2,3": "#1<mo>:</mo>#3"
    }
  },
  "cases:": {
    "alternative": [],
    "type": "multiline",
    "lineBreak": true,
    "params": [
      "caseEnvironment"
    ],
    "note": "cases",
    "MathMLnote": "cases"
  },
  "casesline": {  // as in    x+1 if x < 8
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,4": [ 1, 2, 3, 4 ]
    },
    "extraArgument": 2,
    "rule": {
      "1,4": "#2 & \\text{ #3 } #4\\\\\n"
    },
    "speech": {
      "1,4": "#2 #3 #4 "
    },
    "ruleML": {
      "1,4": "<mtr><mtd>#2</mtd><mtd style=\"text-align: left\"><mspace width=\"1em\"></mspace><mtext>#3</mtext><mspace width=\"0.5em\"></mspace>#4</mtd></mtr>\n"
    }
  },
  "system:": {
    "alternative": [],
    "type": "multiline",
    "params": [
      "system",
      "&beforeFirstRelation"
    ],
//    "seperateOut": true,  // don;t know what this did (but it put closing math delimiters in the wrong place)
    "absorbEmptyLine": true,
    "emptyLineBeforeIndent": true,
    "note": "mdn",
    "speechnote": "system",
    "MathMLnote": "system"
  },
  "align:": {
    "alternative": [],
    "type": "multiline",
    "params": [
 //     "system",
      "align",
      "&atMarker"  // needs to not be &beforeFirstRelation
    ],
//    "seperateOut": true,  // don;t know what this did (but it put closing math delimiters in the wrong place)
    "absorbEmptyLine": true,
    "emptyLineBeforeIndent": true,
//    "note": "align",
    "note": "mdn",
    "speechnote": "align",
    "MathMLnote": "align"
  },
  "derivation:": {
    "alternative": [],
    "type": "multiline",
    "params": [
      "derivation",     // should be "derivation", but that is broken at the moment
      "&beforeFirstRelation"
    ],
//    "seperateOut": true,  // don;t know what this did (but it put closing math delimiters in the wrong place)
    "absorbEmptyLine": true,
    "emptyLineBeforeIndent": true,
    "note": "mdn",
    "speechnote": "derivation",
    "MathMLnote": "derivation"
  },
  "systemline": {  // as in   y^2 <= x^3 + a x + b
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,4": [ 1, 2, 3, 4 ]
    },
    "extraArgument": 2,
    "rule": {
   //   "1,4": "#2  #3 \\ampXX  #4"
      "1,4": "<mrow>#2  #3   #4</mrow>\n"  // should have \\amp, but that is supplied elsewhere
    },
    "speech": {
      "1,4": "#2 #3 #4 "
    },
    "ruleML": {
      "1,4": "<mtr><mtd style=\"text-align: right\">#2</mtd><mtd>#3</mtd><mtd style=\"text-align: left\">#4</mtd></mtr>\n"
    }
  },
  "alignline": {  // as in   y^2 <= x^3 + a x + b
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,4": [ 1, 2, 3, 4 ]
    },
    "extraArgument": 2,
    "rule": {
      "1,4": "<mrow>#2  #3 \\amp  #4</mrow>\n"  // should have \\amp, but that is supplied elsewhere
    },
    "speech": {
      "1,4": "#2 #3 #4 "
    },
    "ruleML": {
      "1,4": "<mtr><mtd style=\"text-align: right\">#2</mtd><mtd>#3</mtd><mtd style=\"text-align: left\">#4</mtd></mtr>\n"
    }
  },
  "derivationline": {  // as in   <= x^3 + a x + b
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,3": [ 1, 2, 3, ]
    },
    "extraArgument": 1,
    "rule": {
  //    "1,3": " #2 \\amp  #3"
      "1,3": "<mrow> #2  #3</mrow>\n"  // should have \\amp, but that is supplied elsewhere
    },
    "speech": {
      "1,3": "#2 #3 "
    },
    "ruleML": {
      "1,3": "<mtr><mtd></mtd><mtd>#2</mtd><mtd style=\"text-align: left\">#3</mtd></mtr>\n"
    }
  },
  "linearsystem:": {   // not actually implemented yet
    "alternative": [],
    "type": "multiline",
    "seperateOut": true,
    "absorbEmptyLine": true,
    "emptyLineBeforeIndent": true,
    "noBeginEnd": true,
    "changeLineTurn": ",",
    "note": "\\systeme"
  },
//  "ge": {
//    "alternative": [
//      ">="
//    ],
//    "type": "relation",
//    "priority": 0,
//    "rule": {
//      "2,3": "#1 \\ge #3"
//    }
//  },
//  "le": {
//    "alternative": [
//      "<="
//    ],
//    "type": "relation",
//    "priority": 0,
//    "rule": {
//      "2,3": "#1 \\le #3"
//    }
//  },
  "hat": {
    "alternative": [],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "\\hat{#2}"
    }
  },
  "overline": {
    "alternative": [ "bar" ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "\\overline{#2}"
    },
    "speech": {
      "1,2": " #2 bar "
    },
    "ruleML": {
      "1,2": "<mover>#2<mo accent=\"true\">―</mo></mover>"
    }
  },
  "conj": {
    "alternative": [ "conjugate" ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "\\overline{#2}"
    },
    "speech": {
      "1,2": " #2 conjugate "
    },
    "ruleML": {
      "1,2": "<mover intent=\"conjugate($x)\"><mrow arg=\"x\">#2</mrow><mo accent=\"true\">-</mo></mover>"
    }
  },
  "vec": {
    "alternative": [ "conjugate" ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "\\overline{#2}"
    },
    "speech": {
      "1,2": " vector quantityV #2 Vendquantity "
    },
    "ruleML": {
   //   "1,2": "<mover intent=\"vector($x)\"><mrow arg=\"x\">#2</mrow><mo accent=\"true\">→</mo></mover>"
   //   "1,2": "<mover intent=\"vector($x)\"><mrow arg=\"x\">#2</mrow><mo>→</mo></mover>"
      "1,2": "<mrow intent=\"vector($va)\"><wrap mathvariant=\"bold\" arg=\"va\">#2</wrap></mrow>"
    }
  },
  "underline": {
    "alternative": [],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "\\underline{#2}"
    }
  },
  "if": {    // currently "if" and "otherwise" only work in the case environment,
             // which supplies all the surrounding tags
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "if"
    },
    "speech": {
      "1,1": " if "
    },
    "ruleML": {
   //   "1,1": "<mtd><mtext>if</mtext></mtd>"
      "1,1": "if"
    }
  },
  "otherwise": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "otherwise"
    },
    "speech": {
      "1,1": " otherwise "
    },
    "ruleML": {
 //     "1,1": "<mtd><mtext>otherwise</mtext></mtd>"
      "1,1": "otherwise"
    }
  },
  "when": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "#&\\text{when }"
    }
  },
  "!": {
    "alternative": [],
    "type": "postfix",
    "priority": -1,
    "rule": {
      "1,1": "!"
    },
    "speech": {
      "1,1": " factorial "
    },
    "ruleML": {
      "1,1": "<mo>!</mo>"
    }
  }
}

export var integrals = {
    "iiint": "∭",
    "iint": "∬",
    "int": "∫",
    "oiiint": "∰",
    "oiint": "∯",
    "oint": "∮"
}

export var symbolswithlimits = {
    "sum": "∑",
    "union": "⋃",
    "intersection": "⋂",
    "oplus": "⨁",
    "otimes": "⨂",
    "coprod": "∐",
    "prod": "∏"
}

export var charactersymbols = [
    ["cent", "¢"],
    ["dollar", "$"],
    ["pound", "£"],
    ["euro", "€"]
]

export var particulargreedyfunctions = ["log", "llog", "lllog","ln", "lg",
                       "vec", "hat", "bar",
                       "abs", "det", "order", "card", "len", "length", "norm",
                       "floor", "ceil", "ceiling"];

// need to generate this automatically from: integrals, symbolswithlimits, ???
export var operatorsymbols = [ "∑","⋃","⋂","⨁","⨂","∐","∏","∮","∭","∬","∫","∰","∯","∮"];

export var triglikefunctions = [["sin","sine"],
["cos","cosine"],
["tan","tangent"],
["cot","cotgent"],
["sec","secant"],
["csc","cosecant"],
["arcsin","arcsine"],
["arccos","arccosine"],
["arctan","arctangent"],
["arccot","arccotgent"],
["arcsec","arcsecant"],
["arccsc","arccosecant"],
["sinh","sinch"],
["cosh","cosh"],
["tanh","tanch"]
];

export var greedyfunctions = particulargreedyfunctions.slice();
    for (const letterpair of triglikefunctions) {
        greedyfunctions.push(letterpair[0])
    }

console.debug("Do I see this?");
console.debug("greedyfunctions", greedyfunctions);

export var greekletters = [["α","alpha"],
["β","beta"],
["γ","gamma"],
["δ","delta"],
["ε","varepsilon"],
["ϵ","epsilon"],
["ζ","zeta"],
["η","eta"],
["θ","theta"],
["ι","iota"],
["κ","kappa"],
["λ","lambda"],
["μ","mu"],
["ν","nu"],
["ξ","xi"],
["ο","omicron"],
["π","pi"],
["ρ","rho"],
["σ","sigma"],
["τ","tau"],
["υ","upsilon"],
["ϕ","phi"],
["φ","varphi"],
["χ","chi"],
["ψ","psi"],
["ω","omega"],
["Α","Alpha"],
["Β","Beta"],
["Γ","Gamma"],
["Δ","Delta"],
["Ε","Epsilon"],
["Ζ","Zeta"],
["Η","Eta"],
["Θ","Theta"],
["Ι","Iota"],
["Κ","Kappa"],
["Λ","Lambda"],
["Μ","Mu"],
["Ν","Nu"],
["Ξ","Xi"],
["Ο","Omicron"],
["Π","Pi"],
["Ρ","Rho"],
["Σ","Sigma"],
["Τ","Tau"],
["Υ","Upsilon"],
["Φ","Phi"],
["Χ","Chi"],
["Ψ","Psi"],
["Ω","Omega"]];

for (const letterpair of triglikefunctions) {
  dictionary[letterpair[0]] = {
    "alternative": [ ],
    "type": "function",
    "priority": 15,
    "rule": {
      "1,2": "\\" + letterpair[0] + " #2"
    },
    "speech": {
  //    "1,2": letterpair[1] + " quantityT #2 Tendquantity "
      "1,2": letterpair[1] + " #2 "
    },
    "ruleML": {
  //    "1,2": "<mi>" + letterpair[0] + "</mi><mo>&ApplyFunction;</mo><mrow>#2</mrow>"
      "1,2": "<mi>" + letterpair[0] + "</mi><mo>&ApplyFunction;</mo>#2"
    }
  };

  dictionary["base" + letterpair[0]] = {
    "alternative": [ ],
    "type": "function",
    "priority": 15,
    "rule": {
      "1,2": "\\" + letterpair[0]
    },
    "speech": {
      "1,2": letterpair[1] + " "
    },
    "ruleML": {
      "1,2": letterpair[0]
    }
  }

}

for (const letterpair of greekletters) {
  dictionary[letterpair[1]] = {
    "alternative": [],
//    "type": "symbol",
    "type": "letter",
    "priority": -1,
    "rule": {
      "1,1": "\\" + letterpair[1]
    },
    "speech": {
      "1,1": " " + letterpair[1] + " "
    },
    "ruleML": {
      "1,1": "<mi>" + letterpair[0] + "</mi>"
    }
  }
}

for (const letterpair of charactersymbols) {
  dictionary[letterpair[0]] = {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\" + letterpair[0]
    },
    "speech": {
      "1,1": " " + letterpair[0] + " "
    },
    "ruleML": {
      "1,1": "<mi>" + letterpair[1] + "</mi>"
    }
  }
}

export var outputTagsOf = {
  "text": {
    "LaTeX": ["",""],
    "MathML": ["",""],
    "Speech": ["",""],
    "PTX": ["",""]
  },
  "m": {
    "LaTeX": ["\\(", "\\)"],
    "MathML": ["<math>", "</math>"],
    "Speech": ["<em>","</em>"],
    "PTX": ["<m>", "</m>"]
  },
  "md": {
    "LaTeX": ["\\[","\\]"],
    "MathML": ["<math display=\"block\">","</math>"],
    "Speech": ["<em>","</em>"],
    "PTX": ["<md>","</md>"]
  }
}

console.debug("End of dictionary.js");
