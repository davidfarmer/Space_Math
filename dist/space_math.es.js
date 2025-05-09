var s = {
  "+": {
    comment: [
      "¼Ó"
    ],
    alternative: [
      "plus",
      "¼Ó"
    ],
    type: "operator",
    priority: 10,
    rule: {
      "2,3": "#1 + #3"
    },
    ruleML: {
      "2,3": "#1<mo>+</mo>#3"
    },
    speech: {
      "2,3": "#1 plus #3"
    }
  },
  "-": {
    comment: [
      "¼õ"
    ],
    alternative: [
      "minus",
      "subtracts",
      "¼õ"
    ],
    type: "operator",
    priority: 10,
    mustHaveLeftArgument: !0,
    rule: {
      "2,3": "#1 - #3"
    },
    ruleML: {
      "2,3": "#1<mo>-</mo>#3"
    },
    speech: {
      "2,3": "#1 minus #3"
    }
  },
  "∘": {
    comment: [],
    alternative: [
      "of",
      "circ"
    ],
    type: "operator",
    priority: 10,
    mustHaveLeftArgument: !0,
    rule: {
      "2,3": "#1 \\circ #3"
    },
    ruleML: {
      "2,3": '#1<mo intent="of">∘</mo>#3'
    },
    speech: {
      "2,3": "#1 of #3"
    }
  },
  "⭐": {
    comment: [],
    alternative: [],
    type: "operator",
    priority: 20,
    rule: {
      "2,3": "#1 * #3"
    },
    ruleML: {
      "2,3": "#1<mo>∗</mo>#3"
    },
    speech: {
      "2,3": "#1 star #3"
    }
  },
  "😑": {
    // used for "negative", as distinct from subtraction
    comment: [],
    alternative: [],
    type: "function",
    priority: 91,
    rule: {
      "1,2": "{-#2}"
    },
    ruleML: {
      //      "1,2": "<mo>-</mo>#2"
      "1,2": "<mrow><mo>-</mo>#2</mrow>"
    },
    speech: {
      "1,2": " quantityN negative #2 Nendquantity "
    }
  },
  "⚡": {
    // funciton application
    comment: [],
    alternative: [],
    type: "operator",
    priority: 20,
    rule: {
      "2,3": "#1 #3"
    },
    ruleML: {
      "2,3": "#1<mo>&ApplyFunction;</mo>#3"
    },
    speech: {
      "2,3": "#1 of #3"
    }
  },
  "*": {
    comment: [
      "³Ë"
    ],
    alternative: [
      "multiply",
      "³Ë"
    ],
    type: "operator",
    priority: 20,
    rule: {
      "2,3": "#1 #3"
    },
    ruleML: {
      "2,3": "#1<mo>&InvisibleTimes;</mo>#3"
    },
    speech: {
      "2,3": "#1 times #3"
    }
  },
  "/": {
    comment: [
      "³ý, ³ýÒÔ"
    ],
    alternative: [
      "over",
      "divide",
      "³ý",
      "³ýÒÔ"
    ],
    type: "operator",
    wrappedarguments: !0,
    priority: 20,
    rule: {
      "2,3": "\\frac{#1}{#3}"
    },
    offpair: {
      "2,3": [1, 3]
    },
    ruleML: {
      "2,3": "<mfrac><mrow>#1</mrow><mrow>#3</mrow></mfrac>"
    },
    speech: {
      "2,3": "fraction #1 denominator #3 enddenominator"
    }
  },
  "//": {
    alternative: [],
    type: "operator",
    priority: 20,
    //    "offpair": {
    //      "2,3": [ 1, 3 ]
    //    },
    rule: {
      "2,3": "#1 / #3"
    },
    speech: {
      "2,3": " inline fraction #1 over #3 endfraction "
    },
    ruleML: {
      "2,3": "#1<mo>/</mo>#3"
    }
  },
  "=": {
    comment: [
      "µÈÓÚ"
    ],
    alternative: [
      "equal",
      "µÈÓÚ"
    ],
    type: "relation",
    priority: 0,
    //    "offpair": {
    //      "2,3": [ 1, 3 ]
    //    },
    rule: {
      "2,3": "#1 = #3"
    },
    ruleML: {
      "2,3": "#1<mo>=</mo>#3"
    },
    speech: {
      "2,3": "#1 equals #3"
    }
  },
  ">=": {
    comment: [
      "´óÓÚµÈÓÚ"
    ],
    alternative: [
      "⦊=",
      "ge",
      "geq",
      "´óÓÚµÈÓÚ"
    ],
    type: "relation",
    priority: 0,
    rule: {
      "2,3": "#1 \\geq #3"
    },
    ruleML: {
      "2,3": "#1<mo>≥</mo>#3"
    },
    speech: {
      "2,3": "#1 greater than or equal to #3"
    }
  },
  "<=": {
    comment: [
      "Ð¡ÓÚµÈÓÚ"
    ],
    alternative: [
      "⦉=",
      "le",
      "leq",
      "Ð¡ÓÚµÈÓÚ"
    ],
    type: "relation",
    priority: 0,
    rule: {
      "2,3": "#1 \\leq #3"
    },
    ruleML: {
      "2,3": "#1<mo>≤</mo>#3"
    },
    speech: {
      "2,3": "#1 less than or equal to #3"
    }
  },
  "^": {
    comment: [
      "µ½",
      "ÖÕÖ¹Öµ",
      "´Î·½",
      "ÉÏ±ê"
    ],
    alternative: [
      "µ½",
      "ÖÕÖ¹Öµ",
      "´Î·½",
      "ÉÏ±ê"
    ],
    type: "operator",
    priority: 30,
    script: !0,
    rule: {
      // go back and compare this to markBrackets called from if (newValue.includes("#@"+(i+1))){ in tree.js
      //     "2,3": "#1^#@3"
      "2,3": "#1^{#@3}"
    },
    offpair: {
      "2,3": [3]
    },
    ruleML: {
      "2,3": "<msup><mrow>#1</mrow><mrow>#@3</mrow></msup>"
      //   "2,3": "<msup>#1<mrow>#@3</mrow></msup>"
    },
    speech: {
      "2,3": " quantityV #1 Vendquantity to the quantityE #@3 Eendquantity "
      //   "2,3": " #1 to the quantityE #@3 Eendquantity "
    }
  },
  "▲": {
    comment: [],
    alternative: [],
    type: "operator",
    priority: 30,
    script: !0,
    rule: {
      "2,3": "#1^{#@3}"
    },
    offpair: {
      "2,3": [3]
    },
    ruleML: {
      "2,3": "<msup><mrow>#1</mrow><mrow>#@3</mrow></msup>"
    },
    speech: {
      "2,3": " quantityV #1 Vendquantity derivative quantityE #@3 Eendquantity "
    }
  },
  _: {
    comment: [
      "´Ó",
      "³õÊ¼Öµ",
      "ÏÂ±ê"
    ],
    alternative: [
      "´Ó",
      "³õÊ¼Öµ",
      "ÏÂ±ê"
    ],
    type: "operator",
    priority: 30,
    script: !0,
    rule: {
      "2,3": "#1_{#@3}"
    },
    offpair: {
      "2,3": [
        3
      ]
    },
    ruleML: {
      "2,3": "<msub><mrow>#1</mrow><mrow>#@3</mrow></msub>"
    },
    speech: {
      "2,3": " quantityX #1 Xendquantity sub quantityY #@3 Yendquantity "
    }
  },
  subsup: {
    comment: [],
    alternative: [],
    type: "operator",
    priority: 30,
    script: !0,
    rule: {
      "2,4": "#1_{#@3}^{#@4}"
    },
    offpair: {
      "2,4": [3, 4]
      // subsup is 2nd out of 4, and the 3rd and 4th have implied grouping
    },
    ruleML: {
      "2,4": "<msubsup><mrow>#1</mrow><mrow>#@3</mrow><mrow>#@4</mrow></msubsup>"
    },
    speech: {
      "2,4": " quantityX #1 Xendquantity sub quantityY #@3 Yendquantity to the quantityZ #@4 Zendquantity"
    }
  },
  "^^": {
    alternative: [],
    type: "operator",
    priority: 30,
    script: !0,
    rule: {
      "2,3": "#{}^#@3 #1"
    },
    offpair: {
      "2,3": [
        3
      ]
    }
  },
  __: {
    alternative: [],
    type: "operator",
    priority: 30,
    script: !0,
    rule: {
      "2,3": "#{}_#@3 #1"
    },
    offpair: {
      "2,3": [
        3
      ]
    }
  },
  "<": {
    comment: [
      "Ð¡ÓÚ"
    ],
    alternative: [
      "⦉",
      "less than",
      "Ð¡ÓÚ"
    ],
    type: "relation",
    priority: 0,
    rule: {
      "2,3": "#1 \\lt #3"
    },
    ruleML: {
      "2,3": "#1<mo>&lt;</mo>#3"
    },
    speech: {
      "2,3": "  #1 less than #3 "
    }
  },
  ">": {
    comment: [
      "´óÓÚ"
    ],
    alternative: [
      "⦊",
      "greater than",
      "´óÓÚ"
    ],
    type: "relation",
    priority: 0,
    rule: {
      "2,3": "#1 \\gt #3"
    },
    ruleML: {
      "2,3": "#1<mo>&gt;</mo>#3"
    },
    speech: {
      "2,3": "  #1 greater than #3 "
    }
  },
  "\n": {
    alternative: [
      //     ""
    ],
    type: "relation",
    priority: -10,
    rule: {
      "2,3": `#1 
 #3`
    }
  },
  ",": {
    alternative: [
      //      ""
    ],
    type: "operator",
    priority: -10,
    rule: {
      "2,3": "#1,#3"
    },
    ruleML: {
      "2,3": "#1<mo>,</mo>#3"
    },
    speech: {
      "2,3": "#1 comma #3"
    }
  },
  "?": {
    alternative: [
      //      ""
    ],
    type: "symbol",
    priority: 10,
    rule: {
      "2,3": "#1,#3"
    },
    ruleML: {
      "2,3": "#1<mo>,</mo>#3"
    },
    speech: {
      "2,3": "#1 comma #3"
    }
  },
  ";": {
    alternative: [
      //      ""
    ],
    type: "operator",
    priority: -10,
    rule: {
      "2,3": "#1;#3"
    }
  },
  "|": {
    alternative: [
      //      ""
    ],
    type: "operator",
    priority: -10,
    rule: {
      "2,3": "#1 \\mid #3"
    },
    speech: {
      "2,3": "#1 divides #3"
    },
    ruleML: {
      "2,3": '#1<mo intent="divides">|</mo>#3'
    }
  },
  "+-": {
    comment: [
      "Õý¸º",
      "¼Ó¼õ"
    ],
    alternative: [
      "plusminus",
      "pm",
      "¼Ó¼õ",
      "Õý¸º"
    ],
    type: "operator",
    priority: 10,
    rule: {
      "2,3": "#1 \\pm #3"
    },
    ruleML: {
      "2,3": "#1<mo>±</mo>#3"
    },
    speech: {
      "2,3": "#1 plus-minus #3"
    }
  },
  "-+": {
    comment: [],
    alternative: [
      "minusplus",
      "mp"
    ],
    type: "operator",
    priority: 10,
    rule: {
      "2,3": "#1 \\mp #3"
    },
    ruleML: {
      "2,3": "#1<mo>∓</mo>#3"
    },
    speech: {
      "2,3": "#1 minus-plus #3"
    }
  },
  del: {
    comment: [
      "Æ«Î¢·Ö"
    ],
    alternative: [
      "partial",
      "Æ«Î¢·Ö"
    ],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "\\partial"
    }
  },
  grad: {
    alternative: [
      "nabla"
    ],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "\\nabla"
    }
  },
  "O/": {
    alternative: [
      "emptyset"
    ],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "\\emptyset"
    },
    speech: {
      "1,1": " empty set "
    },
    ruleML: {
      "1,1": "<mi>∅</mi>"
    }
  },
  infty: {
    comment: [
      "ÎÞÇî´ó"
    ],
    alternative: [
      "infinity",
      "oo",
      "ÎÞÇî´ó"
    ],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "\\infty"
    },
    speech: {
      "1,1": " infinity "
    },
    ruleML: {
      "1,1": "<mi>∞</mi>"
    }
  },
  "✂️": {
    comment: [],
    alternative: [],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": ""
    },
    speech: {
      "1,1": ""
    },
    ruleML: {
      "1,1": ""
    }
  },
  aleph: {
    alternative: [],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "\\aleph"
    },
    speech: {
      "1,1": " aleph "
    },
    ruleML: {
      "1,1": "<mi>א</mi>"
    }
  },
  backslash: {
    alternative: [],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "\\backslash "
    },
    speech: {
      "1,1": " backslash "
    },
    ruleML: {
      "1,1": "<mi>\\</mi>"
    }
  },
  "'": {
    comment: [
      "ËùÒÔ"
    ],
    alternative: [
      "prime"
    ],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "'"
    },
    speech: {
      "1,1": " prime "
    },
    ruleML: {
      "1,1": "<mo>&#x2032;</mo>"
    }
  },
  ":.": {
    comment: [
      "ËùÒÔ"
    ],
    alternative: [
      "therefore",
      "thus",
      "hence",
      "ËùÒÔ"
    ],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "\\therefore"
    }
  },
  ":'": {
    comment: [
      "ÒòÎª"
    ],
    alternative: [
      "because",
      "since",
      "ÒòÎª"
    ],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "\\because"
    }
  },
  "...": {
    comment: [
      "Ê¡ÂÔºÅ"
    ],
    alternative: [
      "Ê¡ÂÔºÅ"
    ],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "#comma?[\\ldots&\\cdots]"
    }
  },
  ldots: {
    comment: [
      "µÍÊ¡ÂÔºÅ"
    ],
    alternative: [
      "µÍÊ¡ÂÔºÅ"
    ],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "\\ldots"
    }
  },
  cdots: {
    comment: [
      "ÖÐÊ¡ÂÔºÅ",
      "ÖÐÐÄÊ¡ÂÔºÅ"
    ],
    alternative: [
      "ÖÐÊ¡ÂÔºÅ",
      "ÖÐÐÄÊ¡ÂÔºÅ"
    ],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "\\cdots"
    }
  },
  vdots: {
    comment: [
      "ÊúÊ¡ÂÔºÅ"
    ],
    alternative: [
      "ÊúÊ¡ÂÔºÅ"
    ],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "\\vdots"
    }
  },
  ddots: {
    comment: [
      "Ð±Ê¡ÂÔºÅ"
    ],
    alternative: [
      "Ð±Ê¡ÂÔºÅ"
    ],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "\\ddots"
    }
  },
  frown: {
    alternative: [],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "\\frown"
    }
  },
  diamond: {
    comment: [
      "ÁâÐÎ"
    ],
    alternative: [
      "ÁâÐÎ"
    ],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "\\diamond"
    }
  },
  square: {
    comment: [
      "·½ÐÎ",
      "Õý·½ÐÎ"
    ],
    alternative: [
      "·½ÐÎ",
      "Õý·½ÐÎ"
    ],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "\\square"
    }
  },
  CC: {
    alternative: [],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "\\mathbb{C}"
    },
    speech: {
      "1,1": " C "
    },
    ruleML: {
      "1,1": "<mi>ℂ</mi>"
    }
  },
  NN: {
    alternative: [],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "\\mathbb{N}"
    },
    speech: {
      "1,1": " N "
    },
    ruleML: {
      "1,1": "<mi>ℕ</mi>"
    }
  },
  QQ: {
    alternative: [],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "\\mathbb{Q}"
    },
    speech: {
      "1,1": " Q "
    },
    ruleML: {
      "1,1": "<mi>ℚ</mi>"
    }
  },
  RR: {
    alternative: [],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "\\mathbb{R}"
    },
    speech: {
      "1,1": " R "
    },
    ruleML: {
      "1,1": "<mi>ℝ</mi>"
    }
  },
  ZZ: {
    alternative: [],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "\\mathbb{Z}"
    },
    speech: {
      "1,1": " Z "
    },
    ruleML: {
      "1,1": "<mi>ℤ</mi>"
    }
  },
  sqrt: {
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,2": [
        2
      ]
    },
    rule: {
      "1,2": "\\sqrt{#2}"
    },
    speech: {
      "1,2": " square root of quantityZ #2 Zendquantity "
    },
    ruleML: {
      "1,2": "<msqrt><mrow>#2</mrow></msqrt>"
    }
  },
  lim: {
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,2": [
        2
      ]
    },
    rule: {
      "1,2": "\\lim_{#2}"
    },
    speech: {
      "1,2": " limit of #2 endlimit "
    },
    ruleML: {
      "1,2": "<munder><mo>lim</mo><mrow>#2</mrow></munder>"
    }
  },
  quote: {
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,2": [
        2
      ]
    },
    rule: {
      "1,2": "\\text{ #2 }"
    },
    speech: {
      "1,2": " #2 "
    },
    ruleML: {
      "1,2": '<mspace width="0.5em"></mspace><mtext>#2</mtext><mspace width="0.5em"></mspace>'
    }
  },
  gcd: {
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,2": [
        2
      ]
    },
    rule: {
      "1,2": "\\gcd(#2)"
    },
    speech: {
      "1,2": " gcd of quantityZ #2 Zendquantity "
    },
    ruleML: {
      "1,2": "<mi>gcd</mi><mo>&ApplyFunction;</mo>(#2)"
    }
  },
  cardinality: {
    comment: [
      "»ùÊý"
    ],
    alternative: [
      "card",
      "»ùÊý"
    ],
    type: "function",
    priority: 55,
    offpair: {
      "1,2": [
        2
      ]
    },
    rule: {
      "1,2": "|#2|"
    },
    speech: {
      "1,2": " cardinality of quantityB #2 Bendquantity "
    },
    ruleML: {
      "1,2": '<mrow intent="cardinality($b)"><mo>|</mo><wrap arg="b">#2</wrap><mo>|</mo></mrow>'
    }
  },
  abs: {
    comment: [
      "¾ø¶ÔÖµ"
    ],
    alternative: [
      "absolute",
      "¾ø¶ÔÖµ"
    ],
    type: "function",
    priority: 55,
    offpair: {
      "1,2": [
        2
      ]
    },
    rule: {
      "1,2": "|#2|"
    },
    speech: {
      "1,2": " absolute value of quantityB #2 Bendquantity "
    },
    ruleML: {
      "1,2": '<mrow intent="absolute-value($absb)"><mo>|</mo><mrow arg="absb">#2</mrow><mo>|</mo></mrow>'
    }
  },
  norm: {
    comment: [],
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,2": [
        2
      ]
    },
    rule: {
      "1,2": "|#2|"
    },
    speech: {
      "1,2": " norm of quantityB #2 Bendquantity "
    },
    ruleML: {
      "1,2": '<mrow intent="norm($normb)"><mo>|</mo><mrow arg="normb">#2</mrow><mo>|</mo></mrow>'
    }
  },
  det: {
    comment: [
      "¾ø¶ÔÖµ"
    ],
    alternative: [
      "determinant"
    ],
    type: "function",
    priority: 55,
    offpair: {
      "1,2": [
        2
      ]
    },
    rule: {
      "1,2": "|#2|"
    },
    speech: {
      "1,2": " determinant of #2 "
    },
    ruleML: {
      "1,2": '<mrow intent="determinant($detb)"><mo>|</mo><wrap arg="detb">#2</wrap><mo>|</mo></mrow>'
    }
  },
  order: {
    // for a group or group element
    comment: [
      "¾ø¶ÔÖµ"
    ],
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,2": [
        2
      ]
    },
    rule: {
      "1,2": "|#2|"
    },
    speech: {
      "1,2": " order of #2 "
    },
    ruleML: {
      "1,2": '<mrow intent="order($orderb)"><mo>|</mo><wrap arg="orderb">#2</wrap><mo>|</mo></mrow>'
    }
  },
  span: {
    comment: [],
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,2": [
        2
      ]
    },
    rule: {
      "1,2": "\\langle #2\\rangle"
    },
    speech: {
      "1,2": " span of #2 "
    },
    ruleML: {
      "1,2": '<mrow intent="span($c)"><mo>⟨</mo><mrow arg="c">#2</mrow><mo>⟩</mo></mrow>'
    }
  },
  vector: {
    comment: [],
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,2": [
        2
      ]
    },
    rule: {
      "1,2": "\\langle #2\\rangle"
    },
    speech: {
      "1,2": "coordinate vector #2 endvector"
    },
    ruleML: {
      "1,2": '<mrow intent="coordinate-vector($c)"><mo>⟨</mo><mrow arg="c">#2</mrow><mo>⟩</mo></mrow>'
    }
  },
  anglebrackets: {
    comment: [],
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,2": [
        2
      ]
    },
    rule: {
      "1,2": "\\langle #2\\rangle"
    },
    speech: {
      "1,2": " anglebrackets #2 endanglebrackets "
    },
    ruleML: {
      "1,2": '<mrow intent="angle-brackets($c)"><mo>⟨</mo><mrow arg="c">#2</mrow><mo>⟩</mo></mrow>'
    }
  },
  setof: {
    comment: [],
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,2": [
        2
      ]
    },
    rule: {
      "1,2": "\\{#2\\}"
    },
    speech: {
      "1,2": "set #2 endset "
    },
    ruleML: {
      "1,2": '<mrow intent="set($d)"><mo>{</mo><mrow arg="d">#2</mrow><mo>}</mo></mrow>'
    }
  },
  floor: {
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,2": [
        2
      ]
    },
    rule: {
      "1,2": "\\lfloor #2 \\rfloor"
    },
    speech: {
      "1,2": "floor of #2 endfloor"
    },
    ruleML: {
      "1,2": '<mrow intent="floor($e)"><mo>⌊</mo><mrow arg="e">#2</mrow><mo>⌋</mo></mrow>'
    }
  },
  ceiling: {
    alternative: [
      "ceil"
    ],
    type: "function",
    priority: 55,
    offpair: {
      "1,2": [
        2
      ]
    },
    rule: {
      "1,2": "\\lceiling #2 \\rceiling"
    }
  },
  bigO: {
    alternative: [],
    type: "function",
    priority: 15,
    rule: {
      "1,2": "O#2"
    },
    speech: {
      "1,2": "big-Oh of #2"
    },
    ruleML: {
      "1,2": '<mi intent="bigO">O</mi><mo>&ApplyFunction;</mo>#2'
    }
  },
  log: {
    alternative: [],
    type: "function",
    priority: 15,
    rule: {
      "1,2": "\\log #2"
    },
    speech: {
      "1,2": "log of #2"
    },
    ruleML: {
      "1,2": "<mi>log</mi><mo>&ApplyFunction;</mo>#2"
    }
  },
  llog: {
    alternative: [],
    type: "function",
    priority: 15,
    rule: {
      "1,2": "\\log_2 #2"
    },
    speech: {
      "1,2": "log log of #2"
    },
    ruleML: {
      "1,2": '<msub><mi>log</mi><mn intent=":index">2</mn></msub><mo>&ApplyFunction;</mo>#2'
    }
  },
  lllog: {
    alternative: [],
    type: "function",
    priority: 15,
    rule: {
      "1,2": "\\log_3 #2"
    },
    speech: {
      "1,2": "log log log of #2"
    },
    ruleML: {
      "1,2": '<msub><mi>log</mi><mn intent=":index">3</mn></msub><mo>&ApplyFunction;</mo>#2'
    }
  },
  baselog: {
    alternative: [],
    type: "function",
    priority: 15,
    rule: {
      "1,2": "\\log"
    },
    speech: {
      "1,2": "log "
    },
    ruleML: {
      "1,2": "log"
    }
  },
  ln: {
    alternative: [
      "ln"
    ],
    type: "function",
    priority: 15,
    rule: {
      "1,2": "\\ln #2"
    },
    speech: {
      "1,2": "natural log of #2"
    },
    ruleML: {
      "1,2": "<mi>ln</mi><mo>&ApplyFunction;</mo>#2"
    }
  },
  baseln: {
    alternative: [],
    type: "function",
    priority: 15,
    rule: {
      "1,2": "\\ln"
    },
    speech: {
      "1,2": "natural log "
    },
    ruleML: {
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
  root: {
    alternative: [],
    type: "function",
    priority: 55,
    extraArgument: 1,
    offpair: {
      "1,3": [
        2,
        3
      ]
    },
    rule: {
      "1,3": "\\sqrt[#2]{#3}",
      "1,2": "\\sqrt{#2}"
    }
  },
  frac: {
    alternative: [],
    type: "function",
    priority: 20,
    extraArgument: 1,
    offpair: {
      "1,3": [2, 3]
    },
    rule: {
      "1,3": "\\frac{#2}{#3}",
      "1,2": "\\frac{#2@1}{#2@-1}"
    }
  },
  summm: {
    comment: [
      "×ÜºÍ",
      "ÇóºÍ"
    ],
    alternative: [
      "summation",
      "×ÜºÍ",
      "ÇóºÍ"
    ],
    type: "function",
    priority: 55,
    offpair: {
      "1,2": [
        2
      ]
    },
    rule: {
      "1,2": "\\sum{#2}"
    }
  },
  fundef: {
    // as in   f : a -> b
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,4": [1, 2, 3, 4]
    },
    extraArgument: 2,
    rule: {
      "1,4": "#2\\,:\\, #3 	o #4"
    },
    speech: {
      "1,4": "function #2 from #3 to #4 "
    },
    ruleML: {
      "1,4": "<mrow>#2<mo>:</mo>#3<mo>→</mo>#4</mrow>"
    }
  },
  congruentmod: {
    // as in   a \equiv b (mod c)
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,4": [1, 2, 3, 4]
    },
    extraArgument: 2,
    rule: {
      "1,4": "#2\\equiv #3 \\pmod  #4"
    },
    speech: {
      "1,4": "#2 congruent to #3 modulo #4 "
    },
    ruleML: {
      "1,4": '<mrow>#2<mo>≡</mo>#3<mspace width="0.5em"></mspace><mo>(</mo><mi>mod</mi><mspace width="0.25em"></mspace>#4<mo>)</mo></mrow>'
    }
  },
  notcongruentmod: {
    // as in   a \equiv b (mod c)
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,4": [1, 2, 3, 4]
    },
    extraArgument: 2,
    rule: {
      "1,4": "#2\\not\\equiv #3 \\pmod  #4"
    },
    speech: {
      "1,4": "#2 not congruent to #3 modulo #4 "
    },
    ruleML: {
      "1,4": '<mrow>#2<mo>≢</mo>#3<mspace width="0.5em"></mspace><mo>(</mo><mi>mod</mi><mspace width="0.25em"></mspace>#4<mo>)</mo></mrow>'
    }
  },
  wrapper: {
    // a trick to group quantities without adding parentheses
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,2": [2]
    },
    rule: {
      "1,2": " #2 "
    },
    speech: {
      "1,2": "#2"
    },
    ruleML: {
      "1,2": "#2"
    }
  },
  opwrap: {
    // a large operator, like sum_n  , which acts like a function
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,2": [2],
      //     "1,3": [ 2, 3 ]
      "1,3": [2]
    },
    //    "extraArgument": 1,
    rule: {
      "1,2": " #2 ",
      "1,3": " #2{#3}"
    },
    speech: {
      "1,2": "#2",
      "1,3": "#2 #3 "
    },
    ruleML: {
      "1,2": "#2",
      "1,3": "#2<mrow>#3</mrow>"
    }
  },
  limsop: {
    // large operators with lower ad upper limits, such as \sum and \prod, but not integrals
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,3": [2, 3],
      // lower limit
      "1,4": [1, 2, 3, 4],
      //lower and upper lim
      "1,5": [1, 2, 3, 4, 5]
      // op, lower lim, upper lim, summand ???
    },
    extraArgument: 2,
    rule: {
      "1,4": "#2_{#3}^{#4}"
    },
    speech: {
      "1,4": " #2 from #3 to #4 "
    },
    ruleML: {
      "1,4": "<munderover>#2<mrow>#3</mrow><mrow>#4</mrow></munderover>"
    }
  },
  llimop: {
    // large operators with limits, such as \sum and \prod, but not integrals
    // lower lim only
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,3": [2, 3]
      // lower limit
      // experiment      "1,4": [ 2, 3, 4 ]  // lower limit and argument
    },
    extraArgument: 1,
    rule: {
      "1,3": "#2_{#3}"
      // experiment      "1,4": "#2_{#3} #4"
    },
    speech: {
      "1,3": " #2 over #3 "
      // experiment     "1,4": " #2 over #3 of #4 "
    },
    ruleML: {
      "1,3": "<munder>#2<mrow>#3</mrow></munder>"
      // experiment      "1,4": "<munder><mo>#2</mo><mrow>#3</mrow></munder>#4"
    }
  },
  functionpower: {
    // like f^2 as in log^2(x), which literally means log(x)^2,
    // but that is not how people write it
    // currently messed up wrt number of arguments: not all of the below can happen
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      //      "1,2": [ 2 ],
      //      "1,3": [ 2, 3 ],
      "1,4": [2, 3]
    },
    extraArgument: 2,
    rule: {
      //      "1,2": "#1^{#2}",
      //      "1,3": "#2^{#3}",
      "1,4": "#2^{#3}#4"
      // experiment      "1,4": "#2_{#3} #4"
    },
    speech: {
      //      "1,2": " #1 power #2 ",
      //      "1,3": " #2 power #3 ",
      "1,4": " #2 power #3 of quantityF #4 Fendquantity "
      // experiment     "1,4": " #2 over #3 of #4 "
    },
    ruleML: {
      //      "1,2": "<msup><mi>#1</mi><mrow>#2</mrow></msup>",
      //      "1,3": "<msup><mi>#2</mi><mrow>#3</mrow></msup>",
      // the <mi>#2</mi> looks wrong, but the output is correct.  Maybe from the "base" version of the function?
      "1,4": "<msup><mi>#2</mi><mrow>#3</mrow></msup><mo>&ApplyFunction;</mo>#4"
      //  "1,4": "<msup><mi>#2</mi><mrow>#3</mrow></msup><mo>&ApplyFunction;</mo><mrow>#4</mrow>",
    }
  },
  functionsubscript: {
    // like J_0(x) or log_2(x)  (actually, only for special functions)
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,4": [2, 3]
    },
    extraArgument: 2,
    rule: {
      "1,4": "#2_{#3}#4"
      // experiment      "1,4": "#2_{#3} #4"
    },
    speech: {
      "1,4": " #2 sub #3 of quantityF #4 Fendquantity "
    },
    ruleML: {
      "1,4": "<msub><mi>#2</mi><mrow>#3</mrow></msub><mo>&ApplyFunction;</mo>#4"
      //     "1,4": "<msub><mi>#2</mi><mrow>#3</mrow></msub><mo>&ApplyFunction;</mo><mrow>#4</mrow>",
    }
  },
  bigop: {
    // large operators with no limits, such as \sum and \prod, but not integrals
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,2": [2]
    },
    rule: {
      "1,2": " #2 "
    },
    speech: {
      "1,2": " #2 "
    },
    ruleML: {
      "1,2": "#2"
      // how to say it is big?
    }
  },
  intlims: {
    // various integrals
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,6": [2, 3, 4, 5, 6]
      // op, lower lim, upper lim, "summand"
    },
    extraArgument: 4,
    rule: {
      "1,6": "#2_{#3}^{#4} #5 \\,d#6"
    },
    speech: {
      "1,6": " #2 from #3 to #4 of #5 d#6 "
    },
    ruleML: {
      "1,6": '<mrow><munderover>#2<mrow>#3</mrow><mrow>#4</mrow></munderover>#5<mspace width="0.167em"></mspace><mo>&dd;</mo>#6</mrow>'
    }
  },
  intlimsweight: {
    // various integrals
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,7": [2, 3, 4, 5, 6, 7]
      // op, lower lim, upper lim, "summand"
    },
    extraArgument: 5,
    rule: {
      "1,7": "#2_{#3}^{#4} #5 \\,\\frac{d#6}{#7}"
    },
    speech: {
      "1,7": " #2 from #3 to #4 of #5 d#6 over #7 "
    },
    ruleML: {
      "1,7": '<mrow><munderover>#2<mrow>#3</mrow><mrow>#4</mrow></munderover>#5<mspace width="0.167em"></mspace><mfrac><mrow><mo>&dd;</mo>#6</mrow><mrow>#7</mrow></mfrac></mrow>'
    }
  },
  intllimweight: {
    // various integrals
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,6": [2, 3, 4, 5, 6]
      // op, lower lim, upper lim, "summand"
    },
    extraArgument: 4,
    rule: {
      "1,6": "#2_{#3} #4 \\,\\frac{d#5}{#6}"
    },
    speech: {
      "1,6": " #2 over #3 of #4 d#5 over #6 "
    },
    ruleML: {
      "1,6": '<mrow><munder>#2<mrow>#3</mrow></munder>#4<mspace width="0.167em"></mspace><mfrac><mrow><mo>&dd;</mo>#5</mrow><mrow>#6</mrow></mfrac></mrow>'
    }
  },
  intllim: {
    // various integrals
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,5": [2, 3, 4, 5]
      // op, lower lim, "integrand",  var
    },
    extraArgument: 3,
    rule: {
      "1,5": "#2_{#3} #4 \\,d#5"
    },
    speech: {
      "1,5": " #2 over #3 of #4 d#5 "
    },
    ruleML: {
      "1,5": '<mrow><munder>#2<mrow>#3</mrow></munder>#4<mspace width="0.167em"></mspace><mo>&dd;</mo>#5</</mrow>'
    }
  },
  int: {
    alternative: [
      "integral"
    ],
    type: "function",
    priority: 55,
    family: [
      "int",
      "oint"
    ],
    pairedArgument: "d",
    rule: {
      "1,2": "\\int #2",
      "1,3": "\\int #2 \\,d#3",
      "1,5": "\\int_{#2}^{3} #4 \\,d#5"
    },
    speech: {
      "1,2": "integral  #2",
      "1,3": "integral  #2 d#3",
      "1,5": "integral from #2 to #3 of #4 d#5"
    },
    ruleML: {
      "1,2": "<mo>∫</mo>#2",
      "1,3": '<mo>∫</mo>#2<mspace width="0.167em"></mspace><mo>&dd;</mo>#3'
    }
  },
  oint: {
    alternative: [],
    type: "function",
    priority: 55,
    family: [
      "int",
      "oint"
    ],
    pairedArgument: "d",
    rule: {
      "1,3": "\\oint #2 \\,d#3",
      "1,2": "\\oint #2"
    }
  },
  cup: {
    alternative: [
      "union"
    ],
    type: "operator",
    priority: 10,
    rule: {
      "2,3": "#1 \\cup #3"
    },
    speech: {
      "2,3": " #1 union #3"
    },
    ruleML: {
      "2,3": "#1<mo>∪</mo>#3"
    }
  },
  cap: {
    alternative: [
      "intersect",
      "intersection"
    ],
    type: "operator",
    priority: 10,
    rule: {
      "2,3": "#1 \\cap #3"
    },
    speech: {
      "2,3": " #1 intersect #3"
    },
    ruleML: {
      "2,3": "#1<mo>∩</mo>#3"
    }
  },
  in: {
    alternative: ["element"],
    type: "relation",
    priority: 0,
    rule: {
      "2,3": "#1 \\in #3"
    },
    speech: {
      "2,3": "#1 in #3"
    },
    ruleML: {
      "2,3": "#1<mo>&#x2208;</mo>#3"
    }
  },
  notin: {
    alternative: ["!in"],
    type: "relation",
    priority: 0,
    rule: {
      "2,3": "#1 \\notin #3"
    },
    speech: {
      "2,3": "#1 not in #3"
    },
    ruleML: {
      "2,3": "#1<mo>∉</mo>#3"
    }
  },
  subset: {
    alternative: ["subset"],
    type: "relation",
    priority: 0,
    rule: {
      "2,3": "#1 \\subset #3"
    },
    speech: {
      "2,3": "#1 subset #3"
    },
    ruleML: {
      "2,3": "#1<mo>⊂</mo>#3"
    }
  },
  neq: {
    alternative: ["!="],
    type: "relation",
    priority: 0,
    rule: {
      "2,3": "#1 \\not= #3"
    },
    speech: {
      "2,3": "#1 not equals #3"
    },
    ruleML: {
      "2,3": "#1<mo>≠</mo>#3"
    }
  },
  and: {
    alternative: [],
    type: "operator",
    priority: 10,
    rule: {
      "2,3": "#1 \\land #3"
    }
  },
  or: {
    alternative: [],
    type: "operator",
    priority: 10,
    rule: {
      "2,3": "#1 \\lor #3"
    }
  },
  forall: {
    alternative: [],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "\\forall"
    }
  },
  exist: {
    alternative: [
      "exists"
    ],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "\\exists"
    },
    speech: {
      "1,1": " there exists "
    },
    ruleML: {
      "1,1": "<mi>∃</mi>"
    }
  },
  not: {
    alternative: [],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "\\neg"
    }
  },
  perp: {
    //  need something separate for V^perp
    alternative: [
      "perpendicular",
      "bot"
    ],
    type: "operator",
    priority: 25,
    rule: {
      "2,3": "#1 \\perp #3"
    },
    speech: {
      "2,3": "#1 perpendicular to #3"
    },
    ruleML: {
      "2,3": '<mrow>#1<mo intent="perpendicular">⊥</mo>#3</mrow>'
    }
  },
  dot: {
    alternative: [],
    type: "operator",
    priority: 25,
    rule: {
      "2,3": "#1 \\cdot #3"
    },
    speech: {
      "2,3": "#1 dot #3"
    },
    ruleML: {
      "2,3": '<mrow>#1<mo intent="dot-product">⋅</mo>#3</mrow>'
    }
  },
  product: {
    // partial conflict with \prod_p L_p(s^{-s})
    alternative: [],
    type: "operator",
    priority: 25,
    rule: {
      "2,3": "#1 \\times #3"
    },
    speech: {
      "2,3": " #1 product #3 "
    },
    ruleML: {
      "2,3": '<mrow>#1<mo intent="direct-product">×</mo>#3</mrow>'
    }
  },
  times: {
    alternative: ["×"],
    type: "operator",
    priority: 25,
    rule: {
      "2,3": "#1 \\times #3"
    },
    speech: {
      "2,3": "#1 times #3"
    },
    ruleML: {
      "2,3": '<mrow>#1<mo intent="times">×</mo>#3</mrow>'
    }
  },
  by: {
    alternative: [],
    type: "operator",
    priority: 25,
    rule: {
      "2,3": "#1 \\times #3"
    },
    speech: {
      "2,3": "#1 by #3"
    },
    ruleML: {
      "2,3": '<mrow>#1<mo intent="dimension-product">×</mo>#3</mrow>'
    }
  },
  cross: {
    alternative: [],
    type: "operator",
    priority: 20,
    rule: {
      "2,3": "#1 \\times #3"
    },
    speech: {
      "2,3": " #1 cross #3 "
    },
    ruleML: {
      "2,3": '<mrow>#1</mrow><mo intent="cross-product">×</mo><mrow>#3</mrow>'
    }
  },
  oointerval: {
    alternative: [],
    type: "operator",
    delimitedarguments: !0,
    // omit the temporary () around the input arguments
    priority: 20,
    // experiment, so we get mrows for complicated arguments
    rule: {
      "2,3": "(#1, #3)"
    },
    speech: {
      "2,3": " open interval from #1 to #3 endinterval "
    },
    ruleML: {
      "2,3": '<mrow intent="open-interval($f, $g)"><mo>(</mo><wrap arg="f">#1</wrap><mo>,</mo><wrap arg="g">#3</wrap><mo>)</mo></mrow>'
    }
  },
  innergcd: {
    alternative: [],
    type: "operator",
    delimitedarguments: !0,
    // omit the temporary () around the input arguments
    priority: 20,
    // experiment, so we get mrows for complicated arguments
    rule: {
      "2,3": "(#1, #3)"
    },
    speech: {
      "2,3": " gcd of #1 comma #3 endgcd "
    },
    ruleML: {
      "2,3": '<mrow intent="gcd($f, $g)"><mo>(</mo><wrap arg="f">#1</wrap><mo>,</mo><wrap arg="g">#3</wrap><mo>)</mo></mrow>'
    }
  },
  cartesianpoint: {
    alternative: [],
    type: "operator",
    delimitedarguments: !0,
    // omit the temporary () around the input arguments
    priority: 20,
    rule: {
      "2,3": "(#1, #3)"
    },
    speech: {
      "2,3": " point with coordinates #1 comma #3 endpoint "
    },
    ruleML: {
      "2,3": '<mrow intent="coordinate($f, $g)"><mo>(</mo><wrap arg="f">#1</wrap><mo>,</mo><wrap arg="g">#3</wrap><mo>)</mo></mrow>'
    }
  },
  innerproduct: {
    alternative: [],
    type: "operator",
    delimitedarguments: !0,
    // omit the temporary () around the input arguments
    priority: 20,
    rule: {
      "2,3": "\\langle #1, #3\\rangle "
    },
    speech: {
      "2,3": " inner product of #1 and #3 endinnerproduct "
    },
    ruleML: {
      "2,3": '<mrow intent="inner-product($f, $g)"><mo>⟨</mo><wrap arg="f">#1</wrap><mo>,</mo><wrap arg="g">#3</wrap><mo>⟩</mo></mrow>'
    }
  },
  twovector: {
    alternative: [],
    type: "operator",
    delimitedarguments: !0,
    // omit the temporary () around the input arguments
    priority: 20,
    rule: {
      "2,3": "\\langle #1, #3\\rangle "
    },
    speech: {
      "2,3": " vector #1 comma #3 endvector "
    },
    ruleML: {
      "2,3": '<mrow intent="vector($va, $vb)"><mo>⟨</mo><wrap arg="va">#1</wrap><mo>,</mo><wrap arg="vb">#3</wrap><mo>⟩</mo></mrow>'
    }
  },
  grouppresentation: {
    alternative: [],
    type: "operator",
    delimitedarguments: !0,
    // omit the temporary () around the input arguments
    priority: 20,
    rule: {
      "2,3": "\\langle #1\\ |\\  #3\\rangle "
    },
    speech: {
      "2,3": " group generated by #1 with relations #3 endrelations "
    },
    ruleML: {
      "2,3": '<mrow intent="group-presentation($gpa, $gpb)"><mo>⟨</mo><wrap arg="gpb">#1</wrap><mo stretchy="true">|</mo><wrap arg="gpb">#3</wrap><mo>⟩</mo></mrow>'
    }
  },
  setbuilder: {
    alternative: [],
    type: "operator",
    delimitedarguments: !0,
    // omit the temporary () around the input arguments
    priority: 20,
    rule: {
      "2,3": "\\{ #1\\ |\\  #3\\} "
    },
    speech: {
      "2,3": " set of #1 such that #3 endset "
    },
    ruleML: {
      "2,3": '<mrow intent="set-such-that($sba, $sbb)"><mo>{</mo><mrow arg="sba">#1</mrow><mo>|</mo><mrow arg="sbb">#3</mrow><mo>}</mo></mrow>'
    }
  },
  braket: {
    alternative: [],
    type: "operator",
    delimitedarguments: !0,
    // omit the temporary () around the input arguments
    priority: 20,
    rule: {
      "2,3": "\\langle #1 |  #3\\rangle "
    },
    speech: {
      "2,3": " bra-ket of #1 and #3 endbra-ket "
    },
    ruleML: {
      "2,3": '<mrow intent="bra-ket($bka, $bkb)"><mo>⟨</mo><wrap arg="bka">#1</wrap><mo>|</mo><wrap arg="bkb">#3</wrap><mo>⟩</mo></mrow>'
    }
  },
  isom: {
    alternative: [
      "isomorphic"
    ],
    type: "relation",
    priority: 0,
    rule: {
      "2,3": "#1 \\cong #3"
    },
    speech: {
      "2,3": " #1 isomorphic to #3  "
    },
    ruleML: {
      "2,3": "#1<mo>≅</mo>#3"
    }
  },
  to: {
    alternative: ["->", "rightarrow"],
    // -> and similar below are intercepted by the preprocessor
    type: "operator",
    priority: 20,
    rule: {
      "2,3": "#1 \\to #3"
    },
    speech: {
      "2,3": " #1 to #3  "
    },
    ruleML: {
      "2,3": "#1<mo>→</mo>#3"
    }
  },
  longrightarrow: {
    alternative: ["-->"],
    type: "operator",
    priority: 20,
    rule: {
      "2,3": "#1 \\longrightarrow #3"
    },
    speech: {
      "2,3": " #1 long-to #3  "
    },
    ruleML: {
      "2,3": "#1<mo>⟶</mo>#3"
    }
  },
  from: {
    alternative: ["<-", "leftarrow"],
    type: "operator",
    priority: 20,
    rule: {
      "2,3": "#1 \\leftarrow #3"
    },
    speech: {
      "2,3": " #1 from #3  "
    },
    ruleML: {
      "2,3": "#1<mo>←</mo>#3"
    }
  },
  longleftarrow: {
    alternative: ["<--"],
    type: "operator",
    priority: 20,
    rule: {
      "2,3": "#1 \\longleftarrow #3"
    },
    speech: {
      "2,3": " #1 long-from #3  "
    },
    ruleML: {
      "2,3": "#1<mo>⟵</mo>#3"
    }
  },
  mapsto: {
    alternative: [],
    type: "operator",
    priority: 20,
    rule: {
      "2,3": "#1 \\mapsto #3"
    },
    speech: {
      "2,3": " #1 maps to #3  "
    },
    ruleML: {
      "2,3": "#1<mo>↦</mo>#3"
    }
  },
  "~": {
    alternative: ["asymp", "asymptotic"],
    type: "relation",
    priority: 0,
    rule: {
      "2,3": "#1 \\sim #3"
    },
    speech: {
      "2,3": " #1 asymptotic to #3  "
    },
    ruleML: {
      "2,3": '#1<mo intent="asymptotic">~</mo>#3'
    }
  },
  "≈": {
    alternative: ["approx", "approximate", "approximately"],
    type: "relation",
    priority: 0,
    rule: {
      "2,3": "#1 \\approx #3"
    },
    speech: {
      "2,3": " #1 approximately equal to #3  "
    },
    ruleML: {
      "2,3": '#1<mo intent="approximately">≈</mo>#3'
    }
  },
  cong: {
    alternative: ["congruent"],
    type: "relation",
    priority: 0,
    rule: {
      "2,3": "#1 \\equiv #3"
    },
    speech: {
      "2,3": " #1 congruent to #3  "
    },
    ruleML: {
      "2,3": '#1<mo intent="congruent">≡</mo>#3'
    }
  },
  "!cong": {
    alternative: ["!congruent"],
    type: "relation",
    priority: 0,
    rule: {
      "2,3": "#1 \\not\\equiv #3"
    },
    speech: {
      "2,3": " #1 not congruent to #3  "
    },
    ruleML: {
      "2,3": '#1<mo intent="not-congruent">≢</mo>#3'
    }
  },
  equiv: {
    alternative: ["equivalent"],
    type: "relation",
    priority: 0,
    rule: {
      "2,3": "#1 \\equiv #3"
    },
    speech: {
      "2,3": " #1 equivalent to #3  "
    },
    ruleML: {
      "2,3": '#1<mo intent="equivalent">≡</mo>#3'
    }
  },
  identical: {
    alternative: [],
    type: "relation",
    priority: 0,
    rule: {
      "2,3": "#1 \\equiv #3"
    },
    speech: {
      "2,3": " #1 identical to #3  "
    },
    ruleML: {
      "2,3": '#1<mo intent="identical">≡</mo>#3'
    }
  },
  ":=": {
    alternative: ["coloneq", "coloneqq"],
    type: "relation",
    priority: 0,
    rule: {
      "2,3": "#1 \\coloneqq #3"
    },
    speech: {
      "2,3": " #1 defined as #3  "
    },
    ruleML: {
      "2,3": '#1<mo intent="defined-as">≔</mo>#3'
    }
  },
  ":": {
    alternative: ["colon"],
    type: "relation",
    priority: 0,
    rule: {
      "2,3": "#1 \\colon #3"
    },
    speech: {
      "2,3": " #1 colon #3  "
    },
    ruleML: {
      "2,3": "#1<mo>:</mo>#3"
    }
  },
  "cases:": {
    alternative: [],
    type: "multiline",
    lineBreak: !0,
    params: [
      "caseEnvironment"
    ],
    note: "cases",
    MathMLnote: "cases"
  },
  casesline: {
    // as in    x+1 if x < 8
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,4": [1, 2, 3, 4]
    },
    extraArgument: 2,
    rule: {
      "1,4": "#2 & \\text{ #3 } #4"
    },
    speech: {
      "1,4": "#2 #3 #4 "
    },
    ruleML: {
      "1,4": `<mtr><mtd>#2</mtd><mtd style="text-align: left"><mspace width="1em"></mspace><mtext>#3</mtext><mspace width="0.5em"></mspace>#4</mtd></mtr>
`
    }
  },
  "system:": {
    alternative: [],
    type: "multiline",
    params: [
      "system",
      "&beforeFirstRelation"
    ],
    //    "seperateOut": true,  // don;t know what this did (but it put closing math delimiters in the wrong place)
    absorbEmptyLine: !0,
    emptyLineBeforeIndent: !0,
    note: "align",
    speechnote: "system",
    MathMLnote: "system"
  },
  "derivation:": {
    alternative: [],
    type: "multiline",
    params: [
      "system",
      "&beforeFirstRelation"
    ],
    //    "seperateOut": true,  // don;t know what this did (but it put closing math delimiters in the wrong place)
    absorbEmptyLine: !0,
    emptyLineBeforeIndent: !0,
    note: "align",
    speechnote: "derivation",
    MathMLnote: "derivation"
  },
  systemline: {
    // as in   y^2 <= x^3 + a x + b
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,4": [1, 2, 3, 4]
    },
    extraArgument: 2,
    rule: {
      "1,4": "#2  #3 &  #4"
    },
    speech: {
      "1,4": "#2 #3 #4 "
    },
    ruleML: {
      "1,4": `<mtr><mtd style="text-align: right">#2</mtd><mtd>#3</mtd><mtd style="text-align: left">#4</mtd></mtr>
`
    }
  },
  derivationline: {
    // as in   <= x^3 + a x + b
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,3": [1, 2, 3]
    },
    extraArgument: 1,
    rule: {
      "1,3": " #2 &  #3"
    },
    speech: {
      "1,3": "#2 #3 "
    },
    ruleML: {
      "1,3": `<mtr><mtd></mtd><mtd>#2</mtd><mtd style="text-align: left">#3</mtd></mtr>
`
    }
  },
  "linearsystem:": {
    // not actually implemented yet
    alternative: [],
    type: "multiline",
    seperateOut: !0,
    absorbEmptyLine: !0,
    emptyLineBeforeIndent: !0,
    noBeginEnd: !0,
    changeLineTurn: ",",
    note: "\\systeme"
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
  hat: {
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,2": [
        2
      ]
    },
    rule: {
      "1,2": "\\hat{#2}"
    }
  },
  overline: {
    alternative: ["bar"],
    type: "function",
    priority: 55,
    offpair: {
      "1,2": [
        2
      ]
    },
    rule: {
      "1,2": "\\overline{#2}"
    },
    speech: {
      "1,2": " #2 bar "
    },
    ruleML: {
      "1,2": '<mover>#2<mo accent="true">―</mo></mover>'
    }
  },
  conj: {
    alternative: ["conjugate"],
    type: "function",
    priority: 55,
    offpair: {
      "1,2": [
        2
      ]
    },
    rule: {
      "1,2": "\\overline{#2}"
    },
    speech: {
      "1,2": " #2 conjugate "
    },
    ruleML: {
      "1,2": '<mover intent="conjugate($x)"><mrow arg="x">#2</mrow><mo accent="true">-</mo></mover>'
    }
  },
  vec: {
    alternative: ["conjugate"],
    type: "function",
    priority: 55,
    offpair: {
      "1,2": [
        2
      ]
    },
    rule: {
      "1,2": "\\overline{#2}"
    },
    speech: {
      "1,2": " vector quantityV #2 Vendquantity "
    },
    ruleML: {
      //   "1,2": "<mover intent=\"vector($x)\"><mrow arg=\"x\">#2</mrow><mo accent=\"true\">→</mo></mover>"
      //   "1,2": "<mover intent=\"vector($x)\"><mrow arg=\"x\">#2</mrow><mo>→</mo></mover>"
      "1,2": '<mrow intent="vector($va)"><wrap mathvariant="bold" arg="va">#2</wrap></mrow>'
    }
  },
  underline: {
    alternative: [],
    type: "function",
    priority: 55,
    offpair: {
      "1,2": [
        2
      ]
    },
    rule: {
      "1,2": "\\underline{#2}"
    }
  },
  if: {
    // currently "if" and "otherwise" only work in the case environment,
    // which supplies all the surrounding tags
    alternative: [],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "if"
    },
    speech: {
      "1,1": " if "
    },
    ruleML: {
      //   "1,1": "<mtd><mtext>if</mtext></mtd>"
      "1,1": "if"
    }
  },
  otherwise: {
    alternative: [],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "otherwise"
    },
    speech: {
      "1,1": " otherwise "
    },
    ruleML: {
      //     "1,1": "<mtd><mtext>otherwise</mtext></mtd>"
      "1,1": "otherwise"
    }
  },
  when: {
    alternative: [],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "#&\\text{when }"
    }
  },
  "!": {
    alternative: [],
    type: "postfix",
    priority: -1,
    rule: {
      "1,1": "!"
    },
    speech: {
      "1,1": " factorial "
    },
    ruleML: {
      "1,1": "<mo>!</mo>"
    }
  }
}, ie = {
  iiint: "∭",
  iint: "∬",
  int: "∫",
  oiiint: "∰",
  oiint: "∯",
  oint: "∮"
}, ne = {
  sum: "∑",
  union: "⋃",
  intersection: "⋂",
  oplus: "⨁",
  otimes: "⨂",
  coprod: "∐",
  prod: "∏"
}, oe = [
  ["cent", "¢"],
  ["dollar", "$"],
  ["pound", "£"],
  ["euro", "€"]
], le = [
  "log",
  "llog",
  "lllog",
  "ln",
  "lg",
  "vec",
  "hat",
  "bar",
  "abs",
  "det",
  "order",
  "card",
  "len",
  "length",
  "norm",
  "floor",
  "ceil",
  "ceiling"
], ae = ["∑", "⋃", "⋂", "⨁", "⨂", "∐", "∏", "∮", "∭", "∬", "∫", "∰", "∯", "∮"], J = [
  ["sin", "sine"],
  ["cos", "cosine"],
  ["tan", "tangent"],
  ["cot", "cotgent"],
  ["sec", "secant"],
  ["csc", "cosecant"],
  ["arcsin", "arcsine"],
  ["arccos", "arccosine"],
  ["arctan", "arctangent"],
  ["arccot", "arccotgent"],
  ["arcsec", "arcsecant"],
  ["arccsc", "arccosecant"],
  ["sinh", "sinch"],
  ["cosh", "cosh"],
  ["tanh", "tanch"]
], z = le.slice();
for (const i of J)
  z.push(i[0]);
console.debug("greedyfunctions", z);
var se = [
  ["α", "alpha"],
  ["β", "beta"],
  ["γ", "gamma"],
  ["δ", "delta"],
  ["ε", "varepsilon"],
  ["ϵ", "epsilon"],
  ["ζ", "zeta"],
  ["η", "eta"],
  ["θ", "theta"],
  ["ι", "iota"],
  ["κ", "kappa"],
  ["λ", "lambda"],
  ["μ", "mu"],
  ["ν", "nu"],
  ["ξ", "xi"],
  ["ο", "omicron"],
  ["π", "pi"],
  ["ρ", "rho"],
  ["σ", "sigma"],
  ["τ", "tau"],
  ["υ", "upsilon"],
  ["ϕ", "phi"],
  ["φ", "varphi"],
  ["χ", "chi"],
  ["ψ", "psi"],
  ["ω", "omega"],
  ["Α", "Alpha"],
  ["Β", "Beta"],
  ["Γ", "Gamma"],
  ["Δ", "Delta"],
  ["Ε", "Epsilon"],
  ["Ζ", "Zeta"],
  ["Η", "Eta"],
  ["Θ", "Theta"],
  ["Ι", "Iota"],
  ["Κ", "Kappa"],
  ["Λ", "Lambda"],
  ["Μ", "Mu"],
  ["Ν", "Nu"],
  ["Ξ", "Xi"],
  ["Ο", "Omicron"],
  ["Π", "Pi"],
  ["Ρ", "Rho"],
  ["Σ", "Sigma"],
  ["Τ", "Tau"],
  ["Υ", "Upsilon"],
  ["Φ", "Phi"],
  ["Χ", "Chi"],
  ["Ψ", "Psi"],
  ["Ω", "Omega"]
];
for (const i of J)
  s[i[0]] = {
    alternative: [],
    type: "function",
    priority: 15,
    rule: {
      "1,2": "\\" + i[0] + " #2"
    },
    speech: {
      //    "1,2": letterpair[1] + " quantityT #2 Tendquantity "
      "1,2": i[1] + " #2 "
    },
    ruleML: {
      //    "1,2": "<mi>" + letterpair[0] + "</mi><mo>&ApplyFunction;</mo><mrow>#2</mrow>"
      "1,2": "<mi>" + i[0] + "</mi><mo>&ApplyFunction;</mo>#2"
    }
  }, s["base" + i[0]] = {
    alternative: [],
    type: "function",
    priority: 15,
    rule: {
      "1,2": "\\" + i[0]
    },
    speech: {
      "1,2": i[1] + " "
    },
    ruleML: {
      "1,2": i[0]
    }
  };
for (const i of se)
  s[i[1]] = {
    alternative: [],
    //    "type": "symbol",
    type: "letter",
    priority: -1,
    rule: {
      "1,1": "\\" + i[1]
    },
    speech: {
      "1,1": " " + i[1] + " "
    },
    ruleML: {
      "1,1": "<mi>" + i[0] + "</mi>"
    }
  };
for (const i of oe)
  s[i[0]] = {
    alternative: [],
    type: "symbol",
    priority: -1,
    rule: {
      "1,1": "\\" + i[0]
    },
    speech: {
      "1,1": " " + i[0] + " "
    },
    ruleML: {
      "1,1": "<mi>" + i[1] + "</mi>"
    }
  };
var ue = {
  text: {
    LaTeX: ["", ""],
    MathML: ["", ""],
    Speech: ["", ""],
    PTX: ["", ""]
  },
  m: {
    LaTeX: ["\\(", "\\)"],
    MathML: ["<math>", "</math>"],
    Speech: ["<em>", "</em>"],
    PTX: ["<m>", "</m>"]
  },
  md: {
    LaTeX: ["\\[", "\\]"],
    MathML: ['<math display="block">', "</math>"],
    Speech: ["<em>", "</em>"],
    PTX: ["<md>", "</md>"]
  }
};
function pe(i) {
  return i.replace(/\s\s+/g, " ");
}
function E(i) {
  return /^[0-9\.,]+$/.test(i);
}
function ce(i) {
  return /^[a-zA-Z]+$/.test(i);
}
function K(i) {
  return /^&[a-zA-Z]+;$/.test(i);
}
function me(i) {
  return /^[0-9\.,].*[a-zA-Z]$/.test(i);
}
function he(i) {
  return E(i) || i.length == 1 || i.trim() in s && s[i.trim()].type == "symbol";
}
function x(i, e) {
  if (me(i)) {
    let r = i.replace(/[a-zA-Z]+$/, ""), n = i.replace(/^[0-9\.,]+/, "");
    console.debug("found mixed", i, "with parts", r, ",", n), r = x(r, e), n = x(n, e);
    let o = "";
    return e == "MathML" ? o = "<mo>&InvisibleTimes;</mo>" : e == "Speech" && (o = " times "), r + o + n;
  }
  let t = i;
  return console.debug("markAtomicItem of", t, "endans", K(i)), e == "MathML" && (E(i) ? t = "<mn>" + t + "</mn>" : K(i) ? t = "<mi>" + t + "</mi>" : ce(i) ? t = t.replace(/(.)/g, "<mi>$1</mi>") : ae.includes(i) ? t = "<mo>" + t + "</mo>" : i.includes("mtext") || t != "" && (t = "<unknown>" + t + "</unknown>", console.warn("unknown type", "X" + t + "X"))), t;
}
function de(i) {
  let e = i;
  console.debug("   starting to simplify Answer", e);
  for (let t = 0; t <= 2; ++t)
    e = e.replace(/to the quantity([A-Z]?) +negative 1 +([A-Z]?)endquantity/g, "inverse"), e = e.replace(/to the quantity([A-Z]?) +2 +([A-Z]?)endquantity/g, "squared"), e = e.replace(/power +2 +/g, "squared "), e = e.replace(/(^| )quantity([A-Z]?) +([^ ]+) +([A-Z]?)endquantity/g, " $3 "), e = e.replace(/(^| )quantity([A-Z]?) +(negative +[^ ]+) +([A-Z]?)endquantity/g, " $3 "), e = e.replace(/<mrow ([^<>]+)><(mi|mo|mn)>([^<>]+)(<\/(mi|mo|mn)>)<\/mrow>/g, "<$2 $1>$3$4"), e = e.replace(/<mrow>(<([a-z]+)>)([^<>]+)(<\/$2>)<\/mrow>/g, "$1$3$4"), console.debug("now ans", e), e = e.replace(/<mrow>(<mi>)([^<>]+)(<\/mi>)<\/mrow>/g, "$1$2$3"), e = e.replace(/<mrow>(<mo>)([^<>]+)(<\/mo>)<\/mrow>/g, "$1$2$3"), e = e.replace(/<mrow>(<mn>)([^<>]+)(<\/mn>)<\/mrow>/g, "$1$2$3"), e = e.replace(/(<mrow[^<>]*>)<mrow>([^w]*)<\/mrow>(<\/mrow>)/g, "$1$2$3"), console.debug("removed layer", t, "to get", e);
  return e = e.replace(/quantity([A-Z]?)/g, "quantity"), e = e.replace(/([A-Z]?)endquantity([A-Z]?)/g, "endquantity"), e = e.replace(/(quantity *)quantity([^q]*)endquantity( *endquantity)/g, "$1$2$3"), e = e.replace(/(quantity *)quantity([^q]*)endquantity( *endquantity)/g, "$1$2$3"), e.endsWith("\\") && (e += " "), e;
}
function fe(i) {
  let e = i;
  return e = ye(e), e = be(e), console.debug("after preprocessarithmetic", e), e = ve(e), e = we(e), console.debug("before other", e), e = qe(e), console.debug("after other", e), e;
}
function ye(i) {
  let e = i;
  return e = e.replace(/(\s|\$|^)"(\S[^"]+)"(\s|\$|$)/g, ge), e;
}
function ge(i, e, t, r, n, o) {
  return e + "quote(␣" + t.replaceAll(" ", "␣") + "␣)" + r;
}
function be(i) {
  let e = i;
  e = e.replace(/-->/g, "longrightarrow"), e = e.replace(/->/g, "to"), e = e.replace(/<--/g, "longleftarrow"), e = e.replace(/<-/g, "from"), e = e.replace(/(\$| |\(|\^|_)[\-\−]([^ +])/g, "$1😑$2"), e = e.replace(/(^|\$|\(|\[|\{) *[\-\−]/, "$1😑"), e = e.replace(/([^ \(\)\[\]\{\}\$]*[+\-][^ \(\)\[\]\{\}\$]*[^ \)\]}\/])(\/\/)/g, "($1)//"), e = e.replace(/\/\/([^ \(\[{\/][^ \(\)\[\]\{\}\$]*[+\-][^ \(\)\[\]\{\}\$]*)/g, "//($1)"), e = e.replace(/([^ \(\)\[\]\{\}\$]*[^ \)\]}\/])(\/)/g, "❲$1❳/"), e = e.replace(/\/([^ \(\[{\/][^ \)\]\}\n\$]*)/g, "/❲$1❳"), console.debug("after preprocess fractions", "A" + e + "B");
  for (const o of z) {
    var t = "(^|[ \\(\\[\\{])" + o + " ([^ \\(\\)\\[\\]\\{\\}]+)", r = t + "($|[ \\(\\)\\[\\]\\{\\}])", n = new RegExp(r, "g");
    e = e.replace(n, "$1" + o + "⁅$2⁆$3");
  }
  return console.debug("after wrapping greedy arguments", "A" + e + "B"), e = $e(e), console.debug("before operators", e), e = Le(e), e = Me(e), console.debug("after operators", e), e = e.replace(/([0-9a-zA-Z])(\+|-|\+-|-\+)([0-9a-zA-Z])/g, "$1 $2 $3"), e = e.replace(/ \* /g, " ⭐ "), console.debug("before sub and sup grouping", e), e = e.replace(/\^([^ ❲❳\/\(\[{][^ \"❲❳\/\(\)\[\]\{\}\$]*)/, "^❲$1❳"), console.debug("after exponents once ", e), e = e.replace(/\^([^ ❲❳\/\(\[{][^ \"❲❳\/\(\)\[\]\{\}\$]*)/, "^❲$1❳"), console.debug("after exponents twice", e), e = e.replace(/_([^ ❲❳\/\(\[{\$][^ \"❲❳\/\^\(\)\[\]\{\}\$]*)/, "_❲$1❳"), e = e.replace(/_([^ ❲❳\/\(\[{\$][^ \"❲❳\/\^\(\)\[\]\{\}\$]*)/, "_❲$1❳"), console.debug("after subscript twice", e), e = ke(e), e = e.replace(/([0-9])([a-zA-Z])/g, "$1 $2"), console.debug("after implied number letter multiplication", e), e = e.replace(/([0-9])([\(\[\{])/g, "$1 $2"), e = e.replace(/(_[\(❲][^❲❳\(\)]+)[\)❳]\(/g, "$1) ⚡ ("), e = e.replace(/([\^▲][\(❲][^❲❳\(\)]+)[\)❳]\(/g, "$1) ⚡ ("), e = e.replace(/(_[\(❲][^❲❳\(\)]+)[\)❳]\(/g, "$1) ⚡ ("), e = e.replace(/([\^▲][\(❲][^❲❳\(\)]+)[\)❳]\(/g, "$1) ⚡ ("), e = e.replace(/(_\(\([^❲❳\(\)]+)\)\)\(/g, "$1)) ⚡ ("), e = e.replace(/(\^\(\([^❲❳\(\)]+)\)\)\(/g, "$1)) ⚡ ("), e;
}
function ve(i) {
  let e = i;
  return e = e.replace(/(\$| )\(([^,()]+)\, +([^,()]+)\)/g, "$1($2) oointerval ($3)"), e = e.replace(/(\$| )gcd\( *([^,()]+)\, *([^,()]+) *\)/g, "$1($2) innergcd ($3)"), e = e.replace(/(\$| )\( ([^,()]+)\, *([^,()]+) \)/g, "$1($2) gcd ($3)"), e = e.replace(/(\$| )\(([^ ][^,()]*)\,([^ ][^,()]*)\)/g, "$1($2) cartesianpoint ($3)"), e;
}
function we(i) {
  let e = i;
  return e = e.replace(/(^| )< ([^<>|]+) >/g, "$1span($2)"), console.debug("did we find span?", e), e = e.replace(/(^| )<([^<>|]+) \| ([^<>|]+)>/g, "$1($2) grouppresentation ($3)"), e = e.replace(/(^| |\(){([^{}|]+) \| ([^{}|]+)}/g, "$1($2) setbuilder ($3)"), e = e.replace(/(^| ){([^{}]+)}/g, "$1setof($2)"), e = e.replace(/(^| )<([^,<>|]+)\|([^,<>|]+)>/g, "$1($2) braket ($3)"), e = e.replace(/(^| )<([^,<>]+)\, ([^,<>]+)>/g, "$1($2) twovector ($3)"), console.debug("looking for vector", e), e = e.replace(/(^| )<([^ ,<>][^,<>]*)\, ([^<>]+)>/g, "$1vector($2, $3)"), console.debug("did we find vector?", e), e = e.replace(/(^| |\n)<([^ ][^,<>]*)\,([^ ][^<>]*)>/g, "$1($2) innerproduct ($3)"), e = e.replace(/(^| )<([^<>]+)>/g, "$1anglebrackets($2)"), e;
}
function $e(i) {
  let e = i;
  return e = e.replace(/([^\^\(\[\{❲])(\'+)/g, "$1▲❲$2❳"), e = e.replace(/(lim(|inf|sup))_([\(\[\{❲])/g, "$1$3"), e = e.replace(/(lim(|inf|sup))_([^ \(\[\{❲][^ ]+)/g, "$1($3)"), e;
}
function Le(i) {
  let e = i;
  for (let [a, l] of Object.entries(ie))
    if (e.includes(a)) {
      a = "\\\\?" + a;
      var t = `(^| |
)` + a + "\\_\\(([^()]+)\\)\\^\\(([^()]+)\\) ?(.*?)", r = t + ` d([a-z]+)( |
|$)`, n = t + ` ❲d([a-z]+)❳/❲([^❲❳]+)❳( |
|$)`;
      console.debug("regExStr", r), console.debug("regExStrWeight", n);
      var o = new RegExp(n, "g");
      e = e.replace(o, "$1wrapper(intlimsweight(" + l + ")($2)($3)($4)($5)($6))$7");
      var u = new RegExp(r, "g");
      e = e.replace(u, "$1wrapper(intlims(" + l + ")($2)($3)($4)($5))$6"), t = `(^| |
)` + a + "\\_([^ ]+?)\\^([^ ]+) (.*?)", r = t + ` d([a-z]+)( |
|$)`, n = t + ` ❲d([a-z]+)❳/❲([^❲❳]+)❳( |
|$)`, console.debug("regExStr", r), console.debug("regExStrWeight", n), o = new RegExp(n, "g"), e = e.replace(o, "$1wrapper(intlimsweight(" + l + ")($2)($3)($4)($5)($6))$7"), u = new RegExp(r, "g"), e = e.replace(u, "$1wrapper(intlims(" + l + ")($2)($3)($4)($5))$6"), t = `(^| |
)` + a + "\\_\\(\\(([^()]+?)\\)\\) (.*?)", r = t + " d([a-z]+)( |\\$)", n = t + " ❲d([a-z]+)❳/❲([^ $]+)❳( |$)", o = new RegExp(n, "g"), e = e.replace(o, "$1wrapper(intllimweight(" + l + ")(($2))($3)($4)($5))$6"), u = new RegExp(r, "g"), e = e.replace(u, "$1wrapper(intllim(" + l + ")(($2))($3)($4))$5"), t = "(^| )" + a + "\\_\\(([^()]+?)\\) (.*?)", r = t + " d([a-z]+)( |\\$)", n = t + " ❲d([a-z]+)❳/❲([^ $]+)❳( |$)", o = new RegExp(n, "g"), e = e.replace(o, "$1wrapper(intllimweight(" + l + ")($2)($3)($4)($5))$6"), u = new RegExp(r, "g"), e = e.replace(u, "$1wrapper(intllim(" + l + ")($2)($3)($4))$5"), t = `(^| |
)` + a + "\\_([^ ]+?) (.*?)", r = t + " d([a-z]+)( |\\$)", n = t + " ❲d([a-z]+)❳/❲([^ $]+)❳( |$)", o = new RegExp(n, "g"), e = e.replace(o, "$1wrapper(intllimweight(" + l + ")($2)($3)($4)($5))$6"), u = new RegExp(r, "g"), console.debug("final regExStr", r), e = e.replace(u, "$1wrapper(intllim(" + l + ")($2)($3)($4))$5");
    }
  return console.debug("did we find integral?", e), e;
}
function ke(i) {
  let e = i;
  console.debug("looking for powers of known functions");
  for (let o of z) {
    var t = "(^|[ \\(\\[\\{])" + ("\\\\?" + o) + "\\^❲([^❲❳]*)❳", r = t + " *([\\(\\[\\{][^\\(\\)\\[\\]\\{\\}]+[\\)\\]\\}])", n = new RegExp(r, "g");
    e = e.replace(n, "$1wrapper❲functionpower(base" + o + ")($2)$3❳"), r = t + " ([^ \\$\\(\\)\\[\\]\\{\\}]+)", n = new RegExp(r, "g"), e = e.replace(n, "$1wrapper❲functionpower(base" + o + ")($2)wrapper❲$3❳❳");
  }
  console.debug("processed powers of functions", e);
  for (let o of z) {
    var t = "(^|[\\$ \\(\\[\\{])" + ("\\\\?" + o) + "\\_❲([^❲❳]*)❳", r = t + " *([\\(\\[\\{][^\\(\\)\\[\\]\\{\\}]+[\\)\\]\\}])", n = new RegExp(r, "g");
    e = e.replace(n, "$1wrapper❲functionsubscript(base" + o + ")($2)$3❳"), r = t + " ([^ \\$\\(\\)\\[\\]\\{\\}]+)", n = new RegExp(r, "g"), e = e.replace(n, "$1wrapper❲functionsubscript(base" + o + ")($2)wrapper❲$3❳❳");
  }
  return e;
}
function Me(i) {
  let e = i;
  for (let [n, o] of Object.entries(ne))
    if (e.includes(n)) {
      n = "\\\\?" + n;
      var t = "(^| )" + n + "\\_[\\[\\(\\{]([^ ]+)[\\]\\)\\}]\\^[\\[\\(\\{]([^ ]+)[\\]\\)\\}]", r = new RegExp(t, "g");
      e = e.replace(r, "$1opwrap(limsop(" + o + ")($2)($3))⚡");
      var t = "(^|\\$| )" + n + "\\_[\\[\\(\\{]([^ ]+)[\\]\\)\\}]\\^([^ ]+)", r = new RegExp(t, "g");
      e = e.replace(r, "$1opwrap(limsop(" + o + ")($2)($3))⚡"), t = "(\\b)" + n + "\\_([^ ]+)\\^([^ ]+)", console.debug("regExStr", t), r = new RegExp(t, "g"), e = e.replace(r, "$1opwrap(limsop(" + o + ")($2)($3))⚡"), t = "(^|\\$| )" + n + "\\_[\\[\\(\\{]([^ ]+)[\\]\\)\\}]", console.debug("regExStr", t), r = new RegExp(t, "g"), e = e.replace(r, "$1opwrap(llimop(" + o + ")($2))⚡"), t = "(^|\\$| )" + n + "\\_([^ ]+)", console.debug("regExStr for llimop", t), r = new RegExp(t, "g"), e = e.replace(r, "$1opwrap(llimop(" + o + ")($2))⚡"), t = "(^|\\$| )" + n + "( |\\$)", console.debug("regExStr", t), r = new RegExp(t, "g"), e = e.replace(r, "$1opwrap(bigop(" + o + "))$2⚡");
    }
  return e;
}
function qe(i) {
  let e = i;
  return e = e.replace(
    /([^ \$\(\)\[\]\{\}]+):([^ ]+) to ([^ \$\(\)\[\]\{\}]+)/g,
    "fundef($1)($2)($3)"
  ), e = e.replace(
    /([^\$\|]+) cong(ruent)* ([^\$]+) mod ([^\$\{\}]+)/g,
    // note: assumes an isolated equation
    // or maybe a condition in set builder
    "congruentmod($1)($3)($4)"
  ), e = e.replace(
    /([^\$\|]+) !cong(ruent)* ([^\$]+) mod ([^\$\{\}]+)/g,
    "notcongruentmod($1)($3)($4)"
  ), e;
}
function Ae(i) {
  let e = i;
  return e = e.replace(/</g, "⦉"), e = e.replace(/>/g, "⦊"), e;
}
function xe(i) {
  let e = i;
  return e = e.replace(/⦉/g, "<"), e = e.replace(/⦊/g, ">"), e;
}
function Ne(i) {
  let e = i;
  return e = e.replace(/\$\$\s*([^\$]+)\s*\$\$/g, '<md sourcetag="dd">$1</md>'), e = e.replace(/\\\[/g, '<md sourcetag="sb">'), e = e.replace(/\\\]/g, "</md>"), e = e.replace(/(^|\s|-)\$([^\$\f\r\n]+)\$(\s|\.|,|;|:|\?|!|$)/g, '$1<m sourcetag="d">$2</m>$3'), e = e.replace(/(^|\s|-)\$([^\$\f\r\n]+)\$(\s|\.|,|;|:|\?|!|-|$)/g, '$1<m sourcetag="d">$2</m>$3'), e = e.replace(/\\\(/g, '<m sourcetag="sp">'), e = e.replace(/\\\)/g, "</m>"), e;
}
String.prototype.myHash = function() {
  var i = 0, e, t;
  if (this.length === 0) return i;
  for (e = 0; e < this.length; e++)
    t = this.charCodeAt(e), i = (i << 5) - i + t, i |= 0;
  return i;
};
function Te(i) {
  let e;
  i = "<bbbb>" + i + "</bbbb>", typeof i == "string" ? e = new DOMParser().parseFromString(i, "text/xml") : e = i, console.debug("xml", e), console.debug("xml.nodeName", e.nodeName, "xml.nodeType", e.nodeType), e.nodeValue, e.nodeType == 9 && (e = e.documentElement);
  let t = [];
  for (const r of e.childNodes) {
    let n = [];
    r.nodeName == "#text" ? (n.push("text"), n.push(""), n.push(r.nodeValue)) : (n.push(r.nodeName), n.push(r.attributes), n.push(r.innerHTML)), n.push(n[2].myHash()), t.push(n);
  }
  return t;
}
function Pe(i) {
  let e = i;
  e = Ne(e), console.debug("str with tags", e);
  let t = Te(e);
  return console.debug("this_node_content", t), t;
}
function _e(i, e, t = "MathML") {
  let r = "";
  for (const n of i) {
    let o = ue[n[0]];
    console.debug("element", n), console.debug("componentdict", e), console.debug(t, "tags", o);
    const u = n[3] + "," + t;
    console.debug("contentkey", u);
    let a = e[u][2];
    r += o[t][0] + a + o[t][1];
  }
  return r;
}
function Oe(i, e) {
  let t = i.trim();
  return t = t.replace(/␣/g, " "), e == "Speech" ? (t = t.replace(/(^| |\n)\$([^$]+)\$( |\.|\,|:|;|\?|\!|\n|$)/g, "$1&nbsp;&nbsp;<em>$2</em>&nbsp;&nbsp;$3"), t = t.replace(/(^| |\n)\$([^$]+)\$( |\.|\,|:|;|\?|\!|\n|$)/g, "$1&nbsp;&nbsp;<em>$2</em>&nbsp;&nbsp;$3"), t = t.replace(/(^| |\n)\$([^$]+)\$( |\.|\,|:|;|\?|\!|\n|$)/g, "$1&nbsp;&nbsp;<em>$2</em>&nbsp;&nbsp;$3"), t = t.replace(/\$\$(.+?)\$\$/sg, `
<em>$1</em>
`), t = t.replace(/\\,/g, " "), t = t.replace(/∏/g, "product"), t = t.replace(/∑/g, "sum")) : e == "MathML" && (t = t.replace(/\$\$(.+?)\$\$/sg, `
<math display="block">$1</math>
`), t = t.replace(/(^| |\n)\$\$(.+?)\$\$( |\.|\,|:|;|\?|\!|\n|$)/g, `
<math display="block">$2</math>$3
`), t = t.replace(/(^| |\n)\$(.+?)\$( |\.|\,|:|;|\?|\!|\n|$)/g, `
<math>$2</math>$3
`), t = t.replace(/\\,/g, ""), t = t.replace(/<wrap([^>]+)>(<m[a-z]+[^<>]*)(>[^<>]*<\/m[a-z]+>)<\/wrap>/g, "$2$1$3"), t = t.replace(/<wrap /g, "<mrow "), t = t.replace(/<\/wrap>/g, "</mrow>")), t;
}
class Re {
  constructor() {
    this.cache = [], this.cacheSize = 500, this.nonCache = [], this.nonCacheSize = 500, this.multilineList = [];
  }
  getAllMultiLine() {
    if (this.multilineList.length == 0)
      for (let e of Object.keys(s))
        s[e].type == "multiline" && this.multilineList.push(e);
    return this.multilineList;
  }
  getItem(e) {
    if (e == " " || e == "")
      return -1;
    for (let t = this.cache.length - 1; t >= 0; t--)
      if (this.cache[t][0] === e)
        return this.cache[t][1];
    if (this.nonCache.includes(e))
      return -1;
    for (let t of Object.keys(s)) {
      let r = s[t].alternative;
      if (r) {
        for (let n of r)
          if (n == e)
            return this.cache.push([e, t]), this.cache.length > this.cacheSize && this.cache.shift(), t;
      }
    }
    return this.nonCache.push(e), this.nonCache.length > this.nonCacheSize && this.nonCache.shift(), -1;
  }
  getLength() {
    return this.cache.length;
  }
  getSize() {
    return this.cacheSize;
  }
}
let B = document.getElementById("sourceTextArea"), D = document.getElementById("echosourceTextArea"), j = document.getElementById("mathmlTextArea");
document.getElementById("pretextTextArea");
let U = document.getElementById("speechTextArea");
document.getElementById("MathJaxArea");
let X = document.getElementById("mathmlDisplayArea"), H = new Re();
var F;
B.addEventListener && B.addEventListener("input", function() {
  D && (D.value = Q(B.value, "LaTeX")), U && (U.innerHTML = '" ' + Q(B.value, "Speech") + ' "'), (j || X) && (F = Q(B.value, "MathML"), j && (j.value = F), X && (X.innerHTML = F));
}, !1);
class $ {
  /*
    constructor(position, value, key = null, parent = null, conversiontarget) {
  */
  constructor(e, t, r = null, n = null, o = "unknown") {
    this.position = e, this.value = t, this.outputvalue = t, this.key = r, this.parent = n, this.conversiontarget = o, this.children = [], this.pair = [], this.noPriority = !1, this.exPriority = !1;
  }
  insert(e, t = e) {
    return this.children.push(new $(this.children.length, e, t, this, this.conversiontarget)), !0;
  }
  insertNode(e) {
    return e.parent = this, e.position = this.children.length, this.children.push(e), !0;
  }
  addLeafMarkup() {
    console.debug("   adding leaf markup with key, val, oval", this.key, "a,a", this.value, "b,b", this.outputvalue, "to", this), this.key == null ? this.outputvalue = x(this.value, this.conversiontarget) : this.key == " " ? this.position == 1 ? (console.info("assuming implied multiplication"), console.info("What is next to this space key? parent:", this.parent, "left sibling", this.parent.children[0], "left sibling value", this.parent.children[0].value, "right sibling", this.parent.children[2]), this.conversiontarget == "MathML" ? this.outputvalue = "<mo>&InvisibleTimes;</mo>" : this.conversiontarget == "Speech" && (this.outputvalue = " times ")) : this.outputvalue = x(this.value, this.conversiontarget) : this.key == "quote" ? this.position == 1 && (this.outputvalue = this.value) : this.key == "" ? (console.debug("item with empty key.  Is this function apply?", this), this.position == 1 ? (console.debug("What is nect to this enpty key? parent:", this.parent, "left sibling", this.parent.children[0], "right sibling", this.parent.children[2]), this.parent.children[2].pair.length > 0 && (this.conversiontarget == "MathML" ? this.outputvalue = "<mo>&ApplyFunction;</mo>" : this.conversiontarget == "Speech" && (this.outputvalue = " of "))) : this.position == 0 ? this.conversiontarget == "Speech" ? this.outputvalue = " " + x(this.value, this.conversiontarget) : this.outputvalue = x(this.value, this.conversiontarget) : this.outputvalue = x(this.value, this.conversiontarget)) : s[this.key].type == "operator" ? this.value != this.key ? this.outputvalue = x(this.value, this.conversiontarget) : this.outputvalue = x(this.value, this.conversiontarget) : this.key == "," ? (console.debug("found comma with parent", this.parent), this.position == 1 && (this.outputvalue = "COMMA")) : s[this.key].type == "symbol" ? console.debug("found a symbol") : s[this.key].type == "relation" ? (console.debug("found a relation"), this.value != this.key ? this.outputvalue = x(this.value, this.conversiontarget) : this.outputvalue = x(this.value, this.conversiontarget)) : s[this.key].type == "function" && (console.debug("found a function"), this.value != this.key ? (console.debug("marking the argument of a function", this.value, "within", this), this.outputvalue = x(this.value, this.conversiontarget)) : this.outputvalue = x(this.value, this.conversiontarget)), console.debug("   and now leaf is key, val, oval", this.key, ",", this.value, ",", this.outputvalue);
  }
  combine(e) {
    for (let t of this.children)
      t && t.combine(e);
    if (this.isLeaf) {
      try {
        console.debug("isLeaf with key", this.key, "pair", this.pair, "parent children", this.parent.children, "of length", this.parent.children.length, "what we want", this.parent.children[2].pair, "ee", this);
      } catch {
        console.debug("isLeaf with key", this.key, "pair", this.pair, "this", this);
      }
      console.debug("the root", this.treeRoot), this.value.length > 1 && (this.value = this.value.trim()), this.addLeafMarkup();
    } else {
      console.debug("not a Leaf", this.pair, this);
      let t = this.children[0].key, r, n, o = this.children.length, u = 0;
      for (; this.children[u].value != t; )
        u++;
      if (t == " ")
        this.children.length > 1 && this.children[1].value == t ? (t == " " && (t = "\\,"), r = this.children[0].value + t + this.children[2].value, console.debug("adding Oo to", this, "because of", this.children[0]), n = this.children[0].outputvalue + this.children[1].outputvalue + this.children[2].outputvalue, this.key && this.key != " " && s[this.key].type != "function" && !s[this.key].wrappedarguments && s[this.key].priority > 20 && (console.debug("maybe wrapping this.key", this.key, "for", n), this.conversiontarget == "MathML" ? n = "<mrow>" + n + "</mrow>" : this.conversiontarget == "Speech" && (console.debug("AddIng quantity", this), n = "quantityS " + n + " Sendquantity"))) : (n = this.children[1].outputvalue, r = this.children[1].value);
      else if (t == "")
        console.debug("  found an empty key", this), this.children.length > 1 && this.children[1].value == t ? (n = this.children[0].outputvalue + this.children[1].outputvalue + this.children[2].outputvalue, r = this.children[0].value + this.children[1].value + this.children[2].value) : (n = this.children[1].outputvalue, r = this.children[1].value);
      else {
        console.debug("about to use conversiontarget", this.conversiontarget);
        try {
          console.debug("               trying to extract using key", t, "position", u, "numberOfSiblings", o, "from", this, "with rule of", u + 1 + "," + o), this.conversiontarget == "MathML" ? (r = s[t].rule[u + 1 + "," + o], n = s[t].ruleML[u + 1 + "," + o], console.debug("               attempted       MathML conversion: ", r, "newOutputValue", n)) : this.conversiontarget == "Speech" ? (r = s[t].rule[u + 1 + "," + o], n = s[t].speech[u + 1 + "," + o]) : (r = s[t].rule[u + 1 + "," + o], n = s[t].rule[u + 1 + "," + o]);
        } catch {
          r = s[t].rule[u + 1 + "," + o], n = s[t].rule[u + 1 + "," + o], console.debug("                      MathML conversion failed on", r);
        }
        if (r.includes("#comma?") && (this.key && s[this.key].type == "operator" && s[this.key].priority < 0 ? r = r.replace(/#comma\?\[(\S*)\&(\S*)\]$/, "$1") : r = r.replace(/#comma\?\[(\S*)\&(\S*)\]$/, "$2")), r.includes("#{}")) {
          let a = !0, l = this;
          for (["^^", "__"].includes(l.key) && (a = !1); l.parent && isScriptPure(l.key); )
            l = l.parent, ["^^", "__"].includes(l.key) && (a = !1);
          a ? r = r.replace("#{}", "{}") : r = r.replace("#{}", "");
        }
        for (let a = 0; a < this.children.length; a++) {
          let l = this.children[a].value, L = this.children[a].outputvalue, p = l, b = L;
          r.includes("#@" + (a + 1)) && (p.length > 1 && (p = "{" + p + "}"), r = r.replace("#@" + (a + 1), p), n = n.replace("#@" + (a + 1), b)), e.includes("caseEnvironment") ? (r = r.replace("#&", "&"), n = n.replace("#&", "&")) : (r = r.replace("#&\\text{", "\\text{ "), r = r.replace("#&", ""), n = n.replace("#&\\text{", "\\text{ "), n = n.replace("#&", "")), r = r.replace("#" + (a + 1) + "@1", l[0]), r = r.replace("#" + (a + 1) + "@-1", l.substring(1)), r = r.replace("#" + (a + 1), l), n = n.replace("#" + (a + 1) + "@1", L[0]), n = n.replace("#" + (a + 1) + "@-1", L.substring(1)), n = n.replace("#" + (a + 1), L);
        }
      }
      this.value = r, this.outputvalue = n, this.children = [];
    }
    if (this.parent && s[this.key] && s[this.key].offpair) {
      let t = this.parent.children.length, r = 0;
      for (console.debug(t, "this.key", this.key, "this", this, "this.parent", this.parent); this.parent.children[r].value != this.key; )
        console.debug(r, "this.parent.children[position]", this.parent.children[r]), r++;
      console.debug("dictionary[this.key].offpair", s[this.key].offpair, "looking for", r + 1 + "," + t, "containing", this.position + 1, "in", s[this.key].offpair[r + 1 + "," + t]), s[this.key].offpair[r + 1 + "," + t] && s[this.key].offpair[r + 1 + "," + t].includes(this.position + 1) && this.pair.pop();
    }
    if (this.pair && this.pair.length > 0 && (console.debug("this.pair[0]", this.pair[0]), this.pair[0] = Ce(this.pair, this.conversiontarget), this.pair[0].length > 0)) {
      console.debug("this.pair[0]", this.pair[0]);
      for (let t of this.pair)
        if (this.value = t[0] + this.value + t[1], this.conversiontarget == "MathML") {
          if (console.debug("((((adding parentheses to", this.outputvalue, "of", this), this.outputvalue.length > 18 && (this.outputvalue = "<mrow>" + this.outputvalue + "</mrow>"), !this.key || this.key == " " || !s[this.key].delimitedarguments) {
            let r = this.outputvalue;
            t[0] != "" && (r = '<mo stretchy="false">' + t[0] + "</mo>" + r), t[1] != "" && (r = r + '<mo stretchy="false">' + t[1] + "</mo>"), this.outputvalue = r;
          }
        } else this.conversiontarget == "Speech" ? he(this.outputvalue) || (console.debug("adding quantity", this), this.outputvalue = "quantityP " + this.outputvalue + " Pendquantity") : (!this.key || this.key == " " || !s[this.key].delimitedarguments) && (this.outputvalue = t[0] + this.outputvalue + t[1]);
      this.pair = [];
    }
  }
  get isLeaf() {
    return this.children.length === 0;
  }
  get hasChildren() {
    return !this.isLeaf;
  }
  get treeRoot() {
    return this.parent == null ? this : this.parent.treeRoot;
  }
}
class Be {
  constructor(e, t, r, n) {
    this.root = new $(e, t, r, null, n), console.debug("       Tree 0 conversiontarget", n);
  }
  *preOrderTraversal(e = this.root) {
    if (yield e, e.children.length)
      for (let t of e.children)
        yield* this.preOrderTraversal(t);
  }
  *postOrderTraversal(e = this.root) {
    if (e.children.length)
      for (let t of e.children)
        yield* this.postOrderTraversal(t);
    yield e;
  }
  insert(e, t, r = t) {
    console.debug("       Tree 1 conversiontarget", this.conversiontarget);
    for (let n of this.preOrderTraversal())
      if (console.debug("trying Tree1 node", n), n.value === e)
        return n.children.push(new $(t, r, n, conversiontarget)), !0;
    return !1;
  }
  remove(e) {
    for (let t of this.preOrderTraversal()) {
      const r = t.children.filter((n) => n.value !== e);
      if (r.length !== t.children.length)
        return t.children = r, !0;
    }
    return !1;
  }
  find(e) {
    for (let t of this.preOrderTraversal())
      if (t.value === e) return t;
  }
  // refactor to combine this and the following, so the tree is only traversed once
  adjustImpliedMultiplication() {
    let e = ["lim", "quote", "dollar"], t = ["quote", "cent"];
    for (let r of this.preOrderTraversal())
      e.includes(r.value) && e.includes(r.key) && r.position == 0 && (console.debug("found a lim", r), console.debug("now looking at", r.parent, "and", r.parent.children[0], "and", r.parent.children[1]), r.parent.parent && r.parent.parent.children[1].key == " " && r.parent.parent.children[1].value == " " && (console.error("adding hello", r.parent.parent.children[1]), r.parent.parent.children[1].key = "✂️", console.error("now", r.parent.parent.children[1]))), t.includes(r.value) && t.includes(r.key) && r.position == 0 && (console.debug("found a quote", r), console.debug("now looking at parent", r.parent, "and itself", r.parent.children[0], "and parent parent", r.parent.parent), r.parent.parent && r.parent.parent.parent && r.parent.parent.parent.children[1].key == " " && r.parent.parent.parent.children[1].value == " " ? (console.error("adding goodbye", r.parent.parent.parent.children[1]), r.parent.parent.parent.children[1].key = "✂️", console.error("now", r.parent.parent.parent.children[1])) : r.parent && r.parent.parent && r.parent.parent.children[1].key == " " && r.parent.parent.children[1].value == " " && (console.error("adding goodbye", r.parent.parent.children[1]), r.parent.parent.children[1].key = "✂️", console.error("now", r.parent.parent.children[1])));
  }
  combineSubSup() {
    for (let e of this.preOrderTraversal())
      e.value === "" && e.key === "^" && e.position == 0 && (e.children.length > 1 && e.children[0].key == "_" ? (e.parent.children[2].key = "subsup", e.parent.children[2].position = 3, e.parent.children[1] = e.children[2], e.parent.children[1].key = "subsup", e.parent.children[1].position = 2, e.parent.children[1].parent = e.parent, e.parent.children.unshift(e.children[0]), e.parent.children[0].key = "subsup", e.parent.children[0].position = 0, e.parent.children[0].parent = e.parent, e.parent.children[1] = e.children[1], e.parent.children[1].key = "subsup", e.parent.children[1].value = "subsup", e.parent.children[1].position = 1, e.parent.children[1].parent = e.parent) : console.debug("no children"));
  }
  addParents() {
    for (let e of this.preOrderTraversal())
      for (const t of e.children)
        t.parent != e && (t.parent = e);
  }
  // this is not used, because it was too complicated so instead we
  // preprocess and distinguish between different types of integrals,
  // based on limits and weight
  combineInt() {
    for (let e of this.preOrderTraversal())
      e.value == "integr" && e.key == "integr" && e.position == 0 && (console.debug("found int in position", e.position, "and siblings with values and keys"), console.debug("1", e.parent.children[1].key, e.parent.children[1].value), e.parent.children[1].value == "" && e.parent.children[1].key == "integr" && e.parent.children[1].pair.length == 1 && (console.debug("maybe found an int with limits"), e.parent.children[1].children[0].key == "," && e.parent.children[1].children[0].value == "" && (console.debug("looking more promising"), (e.parent.children[1].children[1].key != "," || e.parent.children[1].children[2].key != ",") && console.debug("error with integral subsup structure"), console.debug("int structure looks good"))));
  }
  // this is not used, because instead we went with wrapper(...)
  unWrapCertainParentheses() {
    for (let e of this.preOrderTraversal())
      e.value == "" && e.pair.length == 1 && e.children.length > 0 && (console.debug("found wrapping parentheses", e.position, "and children with values and keys"), console.debug("0", e.children[0].key, e.children[0].value), (e.children[0].value == "limop" && e.children[0].key == "limop" || e.children[0].value == "intllim" && e.children[0].key == "intllim" || e.children[0].value == "intllimweight" && e.children[0].key == "intllimweight" || e.children[0].value == "intlimsweight" && e.children[0].key == "intlimsweight" || e.children[0].value == "intlims" && e.children[0].key == "intlims") && (console.debug("maybe found paraens to eliminate"), e.pair.pop()));
  }
}
function Ce(i, e) {
  let t = i[0];
  return console.debug("adjusting brackets", t), e == "LaTeX" && (t[0] == "{" && (t[0] = ["\\{"]), t[1] == "}" && (t[1] = ["\\}"])), t[0] == "⁅" && (t = []), t[0] == "❲" && (t[0] = [""]), t[1] == "❳" && (t[1] = [""]), t;
}
function Y(i) {
  return i === void 0 ? "undefined" : i === null ? "null" : i == "" ? "es" : i.replaceAll(" ", "␣");
}
function W(i, e) {
  if (console.debug("printTree of", i), !i)
    return "";
  let t = e + "[" + Y(i.key) + "]   |" + Y(i.value) + "|";
  if (i.pair.length && (t += "    " + i.pair[0] + " " + i.pair.length), i.children.length == 0 ? t += "    leaf" : i.parent != null ? t += "       " + i.parent.children.length : t += "       nuLL", t += `
`, i.children.length == 0)
    return t;
  {
    i.children.length;
    let r = t;
    for (let n = 0; n < i.children.length; ++n)
      r += W(i.children[n], e + "    ");
    return r;
  }
}
function S(i, e, t) {
  console.debug("starting M2TreeConvert  conversiontarget", t);
  let r = new Be(0, i, null, t), n = "", o = r.root, u = !0, a, l = [], L = {};
  for (console.debug("continuing M2TreeConvert  conversiontarget", t, "on", i); u; ) {
    let p = o.value;
    console.debug("fullStr", "X" + p + "X");
    let b = 0, y = 0, m = 0, c, f;
    for (; p.length > m; ) {
      let h = p[m], g = !1, q = !1;
      for (let d of [['"', '"']])
        if (h == d[0]) {
          console.debug("found a quote");
          let v = G(p, m, d[0], d[1], [[d[0]]]);
          if (v != -1) {
            let w = [p.substring(0, m), p.substring(m + 1, v), p.substring(v + 1)];
            console.debug("children are", w), o.value = "";
            let M = new $(0, "\\ \\ \\text{" + w[1] + "}\\ \\ ", "justatest", null, t);
            if (t == "MathML" ? M = new $(0, '<mspace width="0.8em"/></mspace><mtext>' + w[1] + '</mtext><mspace width="0.8em"/></mspace>', "quote", null, t) : t == "Speech" && (M = new $(0, "␣text " + w[1] + " endtext␣", null, null, t)), console.debug("qNode was", M, "with children", M.children), M = Z(w[0], M, t), console.debug("qNode is", M, "with children", M.children), console.debug("stackedTreeNode was", a), a = C(a, M, t), console.debug("stackedTreeNode is", a, "with children", a.children), l.length > 0) {
              a.key = l[0][0].children[0].key;
              let _ = l[0][0].children.pop();
              l[0][0].insertNode(a), l[0][0].insertNode(_), l[0][1]--, l[0][1] == 0 && l.shift(), a = void 0;
            }
            p = p.substring(v + 1), m = 0, y = 0, c = void 0, f = void 0, g = !0;
          }
        }
      if (Se(h)) {
        console.debug("apparently found a left of pair", h);
        let d = Xe(p, m);
        if (d != -1) {
          let v = [p.substring(0, m), p.substring(m + 1, d), p.substring(d + 1)];
          o.value = "";
          let w = S(v[1].trim(), e, t)[0].root;
          if (w.pair.push([h, p[d]]), w = Z(v[0], w, t), console.debug("just made pNode", w), a = C(a, w, t), console.debug("just made stackedTreeNode", a), l.length > 0) {
            a.key = l[0][0].children[0].key;
            let M = l[0][0].children.pop();
            l[0][0].insertNode(a), l[0][0].insertNode(M), l[0][1]--, l[0][1] == 0 && l.shift(), a = void 0;
          }
          p = p.substring(d + 1), m = 0, y = 0, c = void 0, f = void 0, g = !0;
        }
      }
      if (h == "<" && p[m + 1] != " ") {
        console.debug("looking for an angle pair");
        let d = Fe(p, m);
        if (d != -1) {
          let v = [p.substring(0, m), p.substring(m + 1, d), p.substring(d + 1)];
          o.value = "";
          let w = S(v[1].trim(), e, t)[0].root;
          if (w.pair.push(["\\langle ", "\\rangle "]), w = Z(v[0], w, t), a = C(a, w, t), l.length > 0) {
            a.key = l[0][0].children[0].key;
            let M = l[0][0].children.pop();
            l[0][0].insertNode(a), l[0][0].insertNode(M), l[0][1]--, l[0][1] == 0 && l.shift(), a = void 0;
          }
          p = p.substring(d + 1), m = 0, y = 0, c = void 0, f = void 0, g = !0, console.debug("keyType", f);
        }
      }
      console.debug("OUT j", y, "on", "X" + p + "X", "woith counter", m);
      for (let d = y; d <= m; d++) {
        if (console.debug("inner j", d, "on", "X" + p + "X", "counter", m), p[m + 1] && p[m].match(/[A-Za-z␣]/g) && p[m + 1].match(/[A-Za-z␣]/g)) {
          console.debug("  contuing because building up a word on", p[m], "and", p[m + 1], "so far", p.substring(d, m + 1));
          continue;
        }
        let v = p.substring(d, m + 1), w = Ie(p, v, m, a);
        if (console.debug("subStr", v, "type", w), w) {
          c = v, b = d, f = w, q = !0, console.debug("A keyType", f, "with key", "X" + c + "X", "from subStr", v);
          break;
        }
        if (v == " " && (m >= 1 || o.parent && o.parent.children.length == 2 && o.position == 1 || a) && !je(Ve(p, m))) {
          c = v, b = d, f = "space", q = !0, console.debug("B keyType", f);
          break;
        } else
          console.debug("     maybe breaking on multiword subStr", v);
      }
      if (q)
        break;
      g || (m++, h.match(/[\s\d]/g) && (y = m));
    }
    if (console.debug("is there a" + c + "key?"), c) {
      console.debug("yes, there is there a" + c + "key"), !s[c] && c != " " && c != "" && (c = H.getItem(c)), console.debug("and now it is" + c + "key of", f, "keyType");
      let h, g, q, d;
      switch (f) {
        case "space":
        case "operator":
        //operators
        case "relation":
          if (h = [p.substring(0, b), c, p.substring(m + 1)], !1 & f == "relation" && e.includes("&beforeFirstRelation") && !L["&beforeFirstRelation"] && (L["&beforeFirstRelation"] = !0, h[2] = "&" + h[2]), g = new $(0, h[0], c, null, t), q = new $(0, h[1], c, null, t), d = new $(0, h[2], c, null, t), a && (a = ze(g.value, a, t), g = a, g.key = c, a = void 0), f == "space" && l.length > 0) {
            o.value = h[0], d.key = l[0][0].children[0].key, l[0][0].insertNode(d), o = l[0][0].children[l[0][0].children.length - 1], l[0][1]--, l[0][1] == 0 && l.shift();
            break;
          }
          let v = !0;
          (te(c) || ee(c)) && (f != "space" && h[0].length == 0 || p[b - 1]) && p[m + 1] && p[b - 1] != " " && p[m + 1] != " " && (v = !1);
          let w = V(c), M = !1;
          f != "space" && s[c].script && (w -= 0.1, v && (M = !0, g.exPriority = !0, q.exPriority = !0, d.exPriority = !0), v || (v = !0), He(o, c) && (v = !1));
          let _ = 0;
          if (o.exPriority && !M && (_ += 0.2), v && (o.noPriority || w + _ < V(o.key))) {
            let T = !1;
            for (o.value = g.value, o.children = g.children, o.pair = g.pair, o.exPriority = g.exPriority, o.noPriority = g.noPriority; o.parent; ) {
              let A = o.position;
              if (o = o.parent, _ = 0, !M) {
                for (let P of o.children)
                  if (P.exPriority) {
                    _ += 0.2;
                    break;
                  }
              }
              if (!o.children[0].noPriority && w + _ >= V(o.children[0].key)) {
                let P = o.children[A], N = new $(A, null, o.children[0].key, null, t);
                N.noPriority = o.children[A].noPriority, N.exPriority = o.children[A].exPriority, o.children[A] = N, N.parent = o, N.insertNode(P), P.key = c, P.noPriority = q.noPriority, P.exPriority = q.exPriority, N.insertNode(q), N.insertNode(d), o = N.children[2], T = !0;
                break;
              }
            }
            if (!T) {
              let A = new $(0, "", null, null, t);
              r.root.key = c, A.insertNode(r.root), A.insertNode(q), A.insertNode(d), r.root = A, o = r.root.children[2];
            }
          } else
            v || (g.noPriority = !0, q.noPriority = !0, d.noPriority = !0), o.value = "", o.insertNode(g), o.insertNode(q), o.insertNode(d), o = o.children[2];
          break;
        //break case
        case "function":
          h = [p.substring(0, b), c, p.substring(m + 1)], h[2][0] == " " && (h[2] = h[2].substring(1)), g = new $(0, h[0], c, null, t), q = new $(0, h[1], c, null, t), d = new $(0, h[2], c, null, t), a && (a = Z(g.value, a, t), g = a, g.key = c, a = void 0);
          let k = new $();
          if (k.conversiontarget = t, k.value = "", k.insert(c, c), d.key = c, s[c].pairedArgument) {
            let T = G(p, b, c, s[c].pairedArgument, s[c].family);
            if (T != -1) {
              let A = [p.substring(m + 1, T), p.substring(T + 1)], P = S(A[0].trim(), e, t)[0].root, N = new $(0, A[1], c, null, t);
              k.insertNode(P), k.insertNode(N);
            } else
              k.insertNode(d);
          } else
            k.insertNode(d);
          let O = o;
          o = k.children[k.children.length - 1], g.value.length > 0 && (k = Ze(g, k)), k.value = "", O.parent ? (k.key = O.parent.children[O.position].key, k.position = O.position, k.parent = O.parent, O.parent.children[O.position] = k) : r.root = k, s[c] && s[c].extraArgument && l.push([k, s[c].extraArgument]);
          break;
        case "postfix":
        // such as "!" for factorial.
        case "symbol":
        //symbols
        case "letter":
          h = [p.substring(0, b), c, p.substring(m + 1)], console.debug("making a symbolNode with", h);
          let R = new $();
          if (R.conversiontarget = t, R.value = "", R.insert(c, c), R = Z(h[0], R, t), a = C(a, R, t), console.debug("now have stackedTreeNode", a), l.length > 0) {
            a.key = l[0][0].children[0].key;
            let T = l[0][0].children.pop();
            l[0][0].insertNode(a), l[0][0].insertNode(T), l[0][1]--, l[0][1] == 0 && l.shift(), a = void 0;
          }
          o.value = h[2], console.debug("now have currentNode", o);
          break;
        case "multiline":
          h = [p.substring(0, b), c, p.substring(m + 1)];
          let re = new $(0, h[0], null, null, t);
          a = C(a, re, t), o.value = h[2], n = c, console.debug("----------- just set exParam = ", n);
          break;
        case "UNUSED":
          h = [p.substring(0, b), c, p.substring(m + 1)], o.value = h[2];
          break;
      }
    } else {
      if (a) {
        if (p.trim() != "") {
          console.debug("388 M2TreeConvert  conversiontarget", t);
          let g = new $();
          g.conversiontarget = t, a.key = "", g.insertNode(a), g.insert("", ""), g.insert(p, ""), a = g;
        }
        let h = o.position;
        a.position = h, a.key = o.key, o.parent ? (a.parent = o.parent, o.parent.children[h] = a) : r.root = a;
      }
      u = !1;
      break;
    }
  }
  return r.addParents(), console.debug("continuing", r.root.children[0], r.root.children[1]), r.combineSubSup(), console.debug("combineSubSup returned", r, "aa", r.root, "bb", r.root.children), r.adjustImpliedMultiplication(), console.debug("adjustImpliedMultiplication returned", r, "aa", r.root, "bb", r.root.children), console.debug(W(r.root, "")), [r, n, L];
}
function C(i, e, t) {
  if (i) {
    console.debug("stackNode M2TreeConvert  stackedTreeNode.conversiontarget", i.conversiontarget);
    let r = new $();
    r.conversiontarget = t, i.key = "", r.insertNode(i), r.insert("", ""), e.key = "", r.insertNode(e), i = r;
  } else
    i = e;
  return i;
}
function Z(i, e, t) {
  if (i.trim() != "") {
    console.debug("combinePrev M2TreeConvert  ", i, "xx", e, "cc", t);
    let r = new $();
    r.conversiontarget = t, e.key = "", r.insert(i, ""), r.insert("", ""), r.insertNode(e), e = r, console.debug(" combinePrev pNode.conversiontarget", e);
  }
  return e;
}
function Ze(i, e) {
  return console.debug("combinePrevNode preNode.conversiontarget", i.conversiontarget), i.insert("", ""), i.insertNode(e), i;
}
function ze(i, e, t) {
  if (i.trim() != "") {
    console.debug("combineAfter M2TreeConvert  conversiontarget", t);
    let r = new $();
    r.conversiontarget = t, e.key = "", r.insertNode(e), r.insert("", ""), r.insert(i, ""), e = r;
  }
  return e;
}
function Ie(i, e, t, r) {
  let n = I(e);
  if (n && !Qe(i, e, t))
    return n.mustHaveLeftArgument && t == 0 && !r ? void 0 : n.type;
}
function I(i) {
  return s[i] ? s[i] : (i = H.getItem(i), i == -1 ? void 0 : s[i]);
}
function Se(i) {
  return ["(", "[", "{", "⁅", "❲"].includes(i);
}
function ee(i) {
  let e = I(i);
  return e && e.type == "operator";
}
function je(i) {
  for (let e = 1; e <= i.length; e++) {
    let t = i.substring(0, e);
    if (ee(t) || te(t))
      return !0;
  }
  return !1;
}
function te(i) {
  let e = I(i);
  return e && e.type == "relation";
}
function V(i) {
  let e = I(i);
  switch (i) {
    case " ":
    case "":
      return 19;
    default:
      return e ? e.priority : 999;
  }
}
function Xe(i, e) {
  if (!["(", "[", "{", "⁅", "❲"].includes(i[e]))
    throw new Error("No" + lp + " at index " + e);
  let t = 1;
  for (let r = e + 1; r < i.length; r++)
    switch (i[r]) {
      case "(":
      case "[":
      case "{":
      case "⁅":
      case "❲":
        t++;
        break;
      case ")":
      case "]":
      case "}":
      case "⁆":
      case "❳":
        if (--t == 0)
          return r;
        break;
    }
  return -1;
}
function Fe(i, e) {
  if (!["<"].includes(i[e] || [" "].includes(i[e + 1])))
    throw new Error("No" + lp + " at index " + e);
  let t = 1;
  for (let r = e + 1; r < i.length; r++)
    if (i[r] == "<" && i[r + 1] != " " && t++, i[r] == ">" && i[r - 1] != " " && --t == 0)
      return r;
  return -1;
}
function G(i, e, t, r, n) {
  if (i.substring(e, e + t.length) != t)
    throw new Error("No " + t + " at index " + e + " of " + i);
  let o = 1;
  for (let u = e + 1; u < i.length; u++) {
    if (i.substring(u, u + r.length) == r && --o == 0)
      return u;
    for (let a of n)
      i.substring(u, u + a.length) == a && i[u - 1].match(/[\s\d]/g) && o++;
  }
  return -1;
}
function Ve(i, e) {
  let t = "";
  for (let r = e + 1; r < i.length; r++)
    switch (i[r]) {
      case `
`:
      case " ":
        break;
      default:
        t += i[r];
    }
  return t;
}
function Qe(i, e, t) {
  for (let r = t + 1; r < i.length && !i[r].match(/[\s\d]/g); r++)
    if (e += i[r], I(e))
      return !0;
  return !1;
}
function He(i, e) {
  if (console.debug("checkScriptSimilarity", i), i.pair.length > 0 || i.parent && i.parent.exPriority)
    return !1;
  let t = i;
  for (; t.parent && (t = t.parent, !(t.pair.length > 0 || i.parent && i.parent.exPriority)); )
    if (t.key == e)
      return !0;
  for (t = i.parent; t && t.children[0] && (t = t.children[0], !(t.pair.length > 0 || i.parent && i.parent.exPriority)); )
    if (t.key == e)
      return !0;
  return !1;
}
function Ke(i, e) {
  return console.debug("combineTree2Latex", i, "params", e, "with output", i.root.outputvalue), i.root.combine(e), console.debug("AGAIN combineTree2Latex", i, "params", e, "with output", i.root.outputvalue), i.root.outputvalue;
}
function De(i, e, t, r) {
  console.debug("M2LConvert(str,lp,rp, conversiontarget)", i, e, t, r);
  for (let L of H.getAllMultiLine()) {
    let p = i.indexOf(L.slice(0, -1) + "(");
    for (; p != -1; ) {
      let b = Ge(i, p + L.length - 1, "(", ")");
      if (b != -1) {
        let y = [i.substring(0, p), i.substring(p + L.length, b), i.substring(b + 1)];
        newMiddleStr = L + `
 `, s[L].emptyLineBeforeIndent ? (newMiddleStr += y[1].replaceAll(";", `

 `), newMiddleStr += `
`) : newMiddleStr += y[1].replaceAll(";", `
 `), i = y[0] + newMiddleStr + y[2], p = i.indexOf(L.slice(0, -1) + "(");
      } else
        continue;
    }
  }
  i = i.replaceAll("\\,", ""), i = i.replaceAll("\\:", ""), i = i.replaceAll("\\;", ""), i = i.replaceAll("\\!", ""), i = i.replace(/([a-zA-Z])\\/g, "$1 "), i = i.replaceAll("\\", "");
  let n = i.split(`
`), o = "", u = [], a = "";
  for (; n.length > 0; ) {
    var l = [];
    if (u[0] && s[u[0]].params && (l = s[u[0]].params), console.debug("  ++  ++  ++  ++  ++  ++  ++  ++  ++  ++ "), console.debug("top of loop  ", n), console.debug("params = ", l), n[0].trim() == "" && !l.includes("system") && !l.includes("derivation")) {
      console.info("skipping empty string"), n.shift();
      continue;
    }
    if (l.length > 0 && l.includes("caseEnvironment")) {
      let c = n[0], f = c.split(/(if|when|unless|otherwise)/g);
      f.length != 3 ? console.error("invalid cases line", c) : (c = "casesline(" + f[0] + ")(" + f[1] + ")(" + f[2] + ")", n[0] = c), console.debug("thisLinePieces", f);
    } else if (l.length > 0 && (l.includes("system") || l.includes("derivation"))) {
      let c = n[0];
      for (; n.length > 1 && n[1].trim() != ""; )
        c += n[1], n.splice(1, 1);
      let f = c.split(/(<=|>=|:=|<|>|=|~|≈|approx|asymp).*?/);
      if (f.length > 3) {
        let h = "";
        for (; f.length >= 3; )
          h = f.pop() + h;
        f[2] = h;
      }
      f.length != 3 ? console.error("invalid system/derivation line", c, "with pieces", f) : (f[0].trim() == "" ? c = "derivationline(" + f[1].trim() + ")(" + f[2].trim() + ")" : c = "systemline(" + f[0].trim() + ")(" + f[1].trim() + ")(" + f[2].trim() + ")", n[0] = c), console.debug("thisLine", c, "thisLinePieces", f);
    }
    let L = S(n[0].trim(), l, r);
    console.debug("temp");
    let p = L[0], b = L[1], y = Ke(p, l), m = "";
    l.length && l.includes("caseEnvironment") ? (m = "cases", r == "MathML" || r == "Speech" && (y = " case " + y)) : l.length && (l.includes("system") || l.includes("derivation")) && (l.includes("system") ? m = "system" : l.includes("derivation") && (m = "derivation"), r == "MathML" || r == "Speech" && (y = " line " + y)), n.length > 0 && b.length == 0 && (u.length > 0 && (!s[u[0]].absorbEmptyLine || n[0].trim().length > 0) ? s[u[0]].absorbEmptyLine && n.length > 1 && n[1].trim().length > 0 || n.length == 2 && n[1].trim().length == 0 || n.length == 1 || (s[u[0]].changeLineTurn ? y += s[u[0]].changeLineTurn + `
` : r == "MathML" || (r == "Speech" ? (m == "cases" && (y += ` end_case
`), (m == "system" || m == "derivation") && (y += ` end_line
`)) : y += `\\\\
`)) : n.length > 1 && (s[u[0]] && s[u[0]].absorbEmptyLine && n[0].trim().length == 0 || (y += `
`))), a = n[0], n.shift(), console.debug("============ exParam", b), s[b] && (s[b].seperateOut && (y += t), s[b].noBeginEnd ? y += s[b].note + "{" : r == "MathML" ? (b == "cases:" && (y += '<mrow intent="$table"><mo>{</mo>'), y += '<mtable arg="table" intent=":' + s[b].MathMLnote + `">
`) : r == "Speech" ? y += " begin-" + s[b].speechnote + " " : y += "\\begin{" + s[b].note + "}", u.push(b)), u.length > 0 && n[0] && n[0][0] != " " && (!s[u[0]].emptyLineBeforeIndent || a.trim().length == 0) && (s[u[0]].noBeginEnd ? y += "}" : y += "AA\\end{" + s[u[0]].note + "}", s[u[0]].lineBreak && (y += `
`), s[u[0]].seperateOut && (y += e), u.shift()), o += y;
  }
  for (; u.length > 0; )
    s[u[0]].noBeginEnd ? o += "}" : r == "MathML" ? (o += "</mtable><!-- " + s[u[0]].MathMLnote + ` -->
`, l.length && l.includes("caseEnvironment") && (o += "</mrow>")) : r == "Speech" ? (s[u[0]].note == "cases" && (o += "end_case "), s[u[0]].note == "align" && (o += "end_line "), o += "end-" + s[u[0]].speechnote) : o += "\\end{" + s[u[0]].note + "}", s[u[0]].seperateOut && (o += e), u.shift();
  return console.debug("latexStr", o), pe(o);
}
function Q(i, e) {
  console.debug("converting to target", e);
  let t = Ae(i), r = Pe(t);
  console.debug("str_separated", r);
  let n = Ue(r, e);
  console.debug("firsttest", n);
  let o = _e(r, n, e);
  return console.debug("answer_processed", o), console.debug("convertedComponent", n), console.debug(" "), console.debug("*************************************************************"), console.debug(" "), o = Oe(o, e), o;
}
function Ue(i, e) {
  let t = {};
  for (const r of i) {
    const n = r[0], o = r[3] + "," + e;
    if (n == "text")
      t[o] = [r[0], r[1], r[2]];
    else if (!(o in t))
      if (n == "m" || n == "md") {
        let u = r[2];
        u = xe(u), u = fe(u), t[o] = [r[0], r[1], Ye(u, e)];
      } else
        console.error("unknown piece_type", r);
  }
  return t;
}
function Ye(i, e) {
  console.debug("starting convertMathSnippet", e, "on", i);
  let t = De(i, "LBRACK", "RBRACK", e);
  return t = de(t), t;
}
function Ge(i, e, t, r) {
  if (i.substring(e, e + t.length) != t)
    throw new Error("No" + t + " at index " + e);
  for (let n = e + 1; n < i.length; n++)
    switch (i.substring(n, n + r.length)) {
      case r:
        return n;
    }
  return -1;
}
export {
  Q as SpaceMathConvert,
  Ye as convertMathSnippet
};
