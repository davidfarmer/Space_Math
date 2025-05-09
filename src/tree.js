

/*
Description: the tree structure 

cited from https://www.30secondsofcode.org/articles/s/js-data-structures-tree

2022.10.07 created.

2022.10.12 adjusted to fit M2Tree, create combine
2022.10.14 replaced id into position
2022.10.17 improve combine rule
2022.10.24 improve parentheses treatment, add take off parenthese functionality
2022.10.25 add property of noPriority to cover case that no-space and spaced operators are mixed (like 1 / 3+3 - 3)
2022.11.14 improve detail in left sup/subscripts
*/

/*
Symbol notations:
#a children a
@#a children a, surrounded by {} if length > 1
#{} may or may not a {} for ^^ and __, depending on their positions
#&\\text \text, but may have extra spaces in the cases environment
#2@1 first character of 2nd argument
#2@-1 everything except the first character of 2nd argument
*/
class TreeNode {
/*
  constructor(position, value, key = null, parent = null, conversiontarget) {
*/
  constructor(position, value, key=null, parent=null, conversiontarget="unknown") {
    this.position = position; // position of its brothers, 0 if is root
    this.value = value;
    this.outputvalue = value;
    this.key = key;
    this.parent = parent;
    this.conversiontarget = conversiontarget;
    this.children = [];
    this.pair = [];
    this.noPriority = false;
    this.exPriority = false;
// console.debug("in TreeNode, this.conversiontarget", this.conversiontarget);
if(true || this.conversiontarget === undefined) {
//    console.debug("making a TreeNode", this.position, "a",  value, "b",  key, "c", this.parent,"d",this.conversiontarget);
}
  }

  insert(value, key = value) {
//   console.debug("TreNode 1 ", this);
    this.children.push(new TreeNode(this.children.length,value, key, this, this.conversiontarget));
//   console.debug("TreNode 1 again ", this);
    return true;
  }

  insertNode(node) {
// console.debug("TreNode 2 ", node,"   ", this);

    node.parent = this;
    node.position = this.children.length;
    this.children.push(node);
// console.debug("TreNode 2 again", node,"   ", this);

    return true;
  }

  addLeafMarkup() {
console.debug("   adding leaf markup with key, val, oval", this.key,"a,a", this.value, "b,b",this.outputvalue, "to", this);
      if(this.key == null) {
          this.outputvalue = markAtomicItem(this.value, this.conversiontarget);
      } else if(this.key == " ") {
          if(this.position == 1) {
console.info("assuming implied multiplication");
console.info("What is next to this space key? parent:", this.parent, "left sibling", this.parent.children[0], "left sibling value", this.parent.children[0].value, "right sibling", this.parent.children[2]);
            if(this.conversiontarget == "MathML") {
              this.outputvalue = "<mo>&InvisibleTimes;</mo>"
            } else if(this.conversiontarget == "Speech") {
              this.outputvalue = " times "
            }
          } else {
               this.outputvalue = markAtomicItem(this.value, this.conversiontarget);
          }
      } else if(this.key == "quote") {
          if(this.position == 1) {
              this.outputvalue = this.value
          }
      } else if(this.key == "") {
          console.debug("item with empty key.  Is this function apply?", this)
          if(this.position == 1) {
console.debug("What is nect to this enpty key? parent:", this.parent, "left sibling", this.parent.children[0], "right sibling", this.parent.children[2]);
            if(this.parent.children[2].pair.length > 0) {
          // the "" is funciton application if its right-hand neighbor is in delimiters
              if(this.conversiontarget == "MathML") {
                this.outputvalue = "<mo>&ApplyFunction;</mo>"
              } else if(this.conversiontarget == "Speech") {
                this.outputvalue = " of "
              }
            }
          } else if(this.position == 0) {
              // sort of a hack to put a space in front og funciton name in speech
              // rethink and consider inserting invisible multiplication  (which will
              // require testing previous item)
              if(this.conversiontarget == "Speech") {
                this.outputvalue = " " + markAtomicItem(this.value, this.conversiontarget);
              } else {
                this.outputvalue = markAtomicItem(this.value, this.conversiontarget);
              }
          } else {
               this.outputvalue = markAtomicItem(this.value, this.conversiontarget);
          }
      } else if(dictionary[this.key]["type"] == "operator") {
     //     if(this.value != this.key) { this.outputvalue = "<mi>"+this.value+"</mi>" }
// next two are messed up somehow
          if(this.value != this.key) { this.outputvalue = markAtomicItem(this.value, this.conversiontarget) }
          else { this.outputvalue = markAtomicItem(this.value, this.conversiontarget) }
      } else if(this.key == ",") {
console.debug("found comma with parent", this.parent);
          if(this.position == 1) { this.outputvalue = "COMMA" }
      } else if(dictionary[this.key]["type"] == "symbol") {
          console.debug("found a symbol");
          // do nothing, but why?
      } else if(dictionary[this.key]["type"] == "relation") {
          console.debug("found a relation");
          if(this.value != this.key) { this.outputvalue = markAtomicItem(this.value, this.conversiontarget) }
          else { this.outputvalue = markAtomicItem(this.value, this.conversiontarget) }
      } else if(dictionary[this.key]["type"] == "function") {
          console.debug("found a function");
          if(this.value != this.key) {
console.debug("marking the argument of a function", this.value, "within", this);
              this.outputvalue = markAtomicItem(this.value, this.conversiontarget)
          } else { 
              this.outputvalue = markAtomicItem(this.value, this.conversiontarget)
          }
      }
console.debug("   and now leaf is key, val, oval", this.key,",", this.value,",", this.outputvalue);
  }

  combine(params){
//   console.debug("TreNode 3 conversiontarget", params, "gg", this);
      for (let i of this.children){
          if (!i){
              continue;
          }
          i.combine(params);
      }

      //if (this.parent && isOperatorPure(this.key) && this.parent.pair.length == 1){
      //    this.parent.securePair = true; //if contains operator, the parent should not take off the only parenthese
      //}

      if (this.isLeaf){
try {
console.debug("isLeaf with key", this.key, "pair", this.pair, "parent children", this.parent.children, "of length", this.parent.children.length, "what we want", this.parent.children[2]["pair"],"ee", this);
} catch(error) {
console.debug("isLeaf with key", this.key, "pair", this.pair, "this", this);
}

  console.debug("the root", this.treeRoot);
// die
          if (this.value.length > 1){
              this.value = this.value.trim();
          }
          this.addLeafMarkup()
      } else {

 console.debug("not a Leaf", this.pair, this);
          let key = this.children[0].key;
          let newValue;
          let newOutputValue;
          let numberOfSiblings = this.children.length;
          let position = 0;
          while (this.children[position].value != key){
              position++;
          }

          //hard coded rule for specific cases
          if ((key == " ")){
              if (this.children.length > 1 && this.children[1].value == key){
                if (key == " "){
                  key = "\\,";
                }
                newValue = this.children[0].value + key + this.children[2].value;
           //     newOutputValue = this.children[0].outputvalue + key + this.children[2].outputvalue;
console.debug("adding Oo to", this, "because of", this.children[0]);
                newOutputValue = this.children[0].outputvalue + this.children[1].outputvalue + this.children[2].outputvalue;
                if(this.key && this.key != " " && dictionary[this.key]["type"] != "function" && !dictionary[this.key]["wrappedarguments"] && dictionary[this.key]["priority"] > 20) {
//  note:  recent changed to != "function" because functions shoudl wrap their arguments
console.debug("maybe wrapping this.key", this.key, "for", newOutputValue);
                    if (this.conversiontarget == "MathML") {
                      newOutputValue = "<mrow>" + newOutputValue + "</mrow>";
                    } else if(this.conversiontarget == "Speech") {
console.debug("AddIng quantity", this);
                      newOutputValue = "quantityS " + newOutputValue + " Sendquantity";
                    }
                }
              } else {
                newOutputValue = this.children[1].outputvalue;
                newValue = this.children[1].value;
              }
          } else if(key == "") {
  console.debug("  found an empty key", this)
              if (this.children.length > 1 && this.children[1].value == key){
                newOutputValue = this.children[0].outputvalue + this.children[1].outputvalue + this.children[2].outputvalue;
                newValue = this.children[0].value + this.children[1].value + this.children[2].value;
              } else {
                newOutputValue = this.children[1].outputvalue;
                newValue = this.children[1].value;
              }
          } else {
console.debug("about to use conversiontarget", this.conversiontarget);
              try {
console.debug("               trying to extract using key", key, "position", position,"numberOfSiblings", numberOfSiblings, "from", this, "with rule of",(position+1)+","+(numberOfSiblings));
                if(this.conversiontarget == "MathML") {
                  newValue = dictionary[key].rule[(position+1)+","+(numberOfSiblings)];
                  newOutputValue = dictionary[key].ruleML[(position+1)+","+(numberOfSiblings)];
console.debug("               attempted       MathML conversion: ", newValue, "newOutputValue",newOutputValue);
                } else if(this.conversiontarget == "Speech") {
                  newValue = dictionary[key].rule[(position+1)+","+(numberOfSiblings)];
                  newOutputValue = dictionary[key].speech[(position+1)+","+(numberOfSiblings)];
                } else {
                  newValue = dictionary[key].rule[(position+1)+","+(numberOfSiblings)];
                  newOutputValue = dictionary[key].rule[(position+1)+","+(numberOfSiblings)];
                }
              } catch(error) {
                newValue = dictionary[key].rule[(position+1)+","+(numberOfSiblings)];
                newOutputValue = dictionary[key].rule[(position+1)+","+(numberOfSiblings)];
console.debug("                      MathML conversion failed on", newValue);
              }
              if (newValue.includes("#comma?")){
                  if (this.key && dictionary[this.key].type == "operator" && dictionary[this.key].priority < 0){ // comma group
                      newValue = newValue.replace(/#comma\?\[(\S*)\&(\S*)\]$/, "$1");
                  } else {
                      newValue = newValue.replace(/#comma\?\[(\S*)\&(\S*)\]$/, "$2");
                  }
              }
              if (newValue.includes("#{}")){ // the rules used by super & subscripts
                  let isLeftMost = true;
                  let tempNode = this;
                  if (["^^","__"].includes(tempNode.key)){
                      isLeftMost = false;
                  }
                  while (tempNode.parent && isScriptPure(tempNode.key)){
                      tempNode = tempNode.parent;
                      if (["^^","__"].includes(tempNode.key)){
                          isLeftMost = false;
                      }
                  }
                  if (!isLeftMost){
                      newValue = newValue.replace("#{}", "");
                  } else {
                      newValue = newValue.replace("#{}", "{}");
                  }
              }
              for (let i = 0; i < this.children.length; i++){
                  let childValue = this.children[i].value;
                  let childOutputValue = this.children[i].outputvalue;
                  let childValueBracket = childValue;
                  let childOutputValueBracket = childOutputValue;
                  if (newValue.includes("#@"+(i+1))){ // the rules used by super & subscripts
                      if (childValueBracket.length > 1 ){
// inconsistency:  for some outputs, the brackets are supplied by the dictionary
                          childValueBracket = "{"+childValueBracket+"}"
    //                      childOutputValueBracket = markBrackets(childOutputValueBracket, this.conversiontarget);
//                          childOutputValueBracket = "<mrow>" + childOutputValueBracket + "</mrow>"
                      }
                      newValue = newValue.replace("#@"+(i+1), childValueBracket);
                      newOutputValue = newOutputValue.replace("#@"+(i+1), childOutputValueBracket);
  // we are trying to have these wrappers in the dictionary
       //               if(this.conversiontarget == "MathML") {
       //                   newOutputValue = "<mrow>" + newOutputValue + "</mrow>";
       //               } else if (this.conversiontarget == "Speech") {
       //                   newOutputValue = "quantityA " + newOutputValue + " Aendquantity";
       //               }
                  }
                  if (params.includes("caseEnvironment")){
                      newValue = newValue.replace("#&","&");
                      newOutputValue = newOutputValue.replace("#&","&");
                  } else {
                      newValue = newValue.replace("#&\\text{","\\text{ ");
                      newValue = newValue.replace("#&","");
                      newOutputValue = newOutputValue.replace("#&\\text{","\\text{ ");
                      newOutputValue = newOutputValue.replace("#&","");
                  }
                  newValue = newValue.replace("#"+(i+1)+"@1", childValue[0]);
                  newValue = newValue.replace("#"+(i+1)+"@-1", childValue.substring(1));
                  newValue = newValue.replace("#"+(i+1), childValue);
                  newOutputValue = newOutputValue.replace("#"+(i+1)+"@1", childOutputValue[0]);
                  newOutputValue = newOutputValue.replace("#"+(i+1)+"@-1", childOutputValue.substring(1));
                  newOutputValue = newOutputValue.replace("#"+(i+1), childOutputValue);
              }
          }

          this.value = newValue;
          this.outputvalue = newOutputValue;
          this.children = [];
      }

      // Find if the current key may take off a layer of parenthese.
      if (this.parent && dictionary[this.key] && dictionary[this.key].offpair){
          let numberOfSiblings = this.parent.children.length;
          let position = 0;
console.debug(numberOfSiblings,"this.key", this.key,"this", this, "this.parent", this.parent);
          while (this.parent.children[position].value != this.key){
console.debug(position,"this.parent.children[position]", this.parent.children[position]);
              position++;
          }
console.debug("dictionary[this.key].offpair", dictionary[this.key].offpair, "looking for",(position+1)+","+(numberOfSiblings), "containing", this.position+1, "in", dictionary[this.key].offpair[(position+1)+","+(numberOfSiblings)]);
          if (dictionary[this.key].offpair[(position+1)+","+(numberOfSiblings)] && dictionary[this.key].offpair[(position+1)+","+(numberOfSiblings)].includes(this.position+1)){
            this.pair.pop();
          }
      }

      if (this.pair && this.pair.length > 0){
//  The \{ should only be for LaTeX output.
//  Also need special cases for implied brackets.
console.debug("this.pair[0]", this.pair[0]);
            this.pair[0] = adjustBrackets(this.pair, this.conversiontarget);
            if (this.pair[0].length > 0) {  // if the brackets have not been adjusted away
console.debug("this.pair[0]", this.pair[0]);
              for (let p of this.pair){
  //              if (p[0] == "{"){
  //                  p[0] = ["\\{"];
  //              }
  //              if (p[1] == "}"){
  //                  p[1] = ["\\}"];
  //              }
                this.value = p[0] + this.value + p[1];
                if(this.conversiontarget == "MathML") {
 console.debug("((((adding parentheses to", this.outputvalue, "of", this);
      // a bad hack:  need a more robust way to tell if compound object in parentheses
      // a slightly less bad hack could be counting "<" in the string
                    if(this.outputvalue.length > 18) {
                        this.outputvalue = "<mrow>" + this.outputvalue + "</mrow>"
                    }
                    if(!this.key || this.key == " " || !dictionary[this.key].delimitedarguments) {
            // the brackets might have been temporary and now are empty
                        let beforebrackets = this.outputvalue;
                        if (p[0] != "") { beforebrackets = "<mo stretchy=\"false\">" + p[0] + "</mo>" + beforebrackets}
                        if (p[1] != "") { beforebrackets = beforebrackets + "<mo stretchy=\"false\">" + p[1] + "</mo>"}
             //           this.outputvalue = "<mo stretchy=\"false\">" + p[0] + "</mo>" + this.outputvalue + "<mo stretchy=\"false\">" + p[1] + "</mo>";
                        this.outputvalue = beforebrackets;
                    }
                } else if(this.conversiontarget == "Speech") {
                    if(singletonQ(this.outputvalue)) {
                        // no need to do anything
                    } else {
console.debug("adding quantity", this);
                        this.outputvalue = "quantityP " + this.outputvalue + " Pendquantity";
                    }
                } else {
                    if(!this.key || this.key == " " || !dictionary[this.key].delimitedarguments) {
                        this.outputvalue = p[0] + this.outputvalue + p[1];
                    }
                }
            }
            this.pair = [];
          }  // if the readjusted pair still exists
      }
  }

  get isLeaf() {
    return this.children.length === 0;
  }

  get hasChildren() {
    return !this.isLeaf;
  }

  get treeRoot() {
      if (this.parent == null) {
          return this
      } else {
          return this.parent.treeRoot
      }
  }
}

class Tree {
  constructor(id,value, key, conversiontarget) {
    this.root = new TreeNode(id, value, key, null, conversiontarget);
  console.debug("       Tree 0 conversiontarget", conversiontarget);
  }

  *preOrderTraversal(node = this.root) {
    yield node;
    if (node.children.length) {
      for (let child of node.children) {
        yield* this.preOrderTraversal(child);
      }
    }
  }

  *postOrderTraversal(node = this.root) {
    if (node.children.length) {
      for (let child of node.children) {
        yield* this.postOrderTraversal(child);
      }
    }
    yield node;
  }

  insert(parentNodevalue, value, key = value) {
  console.debug("       Tree 1 conversiontarget", this.conversiontarget);

    for (let node of this.preOrderTraversal()) {
console.debug("trying Tree1 node", node);
      if (node.value === parentNodevalue) {
        node.children.push(new TreeNode(value, key, node, conversiontarget));
/*
oooooo
        node.children.push(new TreeNode(0,value, key, node, conversiontarget));
*/
        return true;
      }
    }
    return false;
  }

  remove(value) {
    for (let node of this.preOrderTraversal()) {
      const filtered = node.children.filter(c => c.value !== value);
      if (filtered.length !== node.children.length) {
        node.children = filtered;
        return true;
      }
    }
    return false;
  }

  find(value) {
    for (let node of this.preOrderTraversal()) {
      if (node.value === value) return node;
    }
    return undefined;
  }

// refactor to combine this and the following, so the tree is only traversed once
  adjustImpliedMultiplication() {
//  for some elements, like "lim" and "quote", an adjacent space is not
//  implied multiplication (some on the right, and some on the left)
    let noMultRight = ["lim", "quote", "dollar"];
    let noMultLeft = ["quote", "cent"];
    for (let node of this.preOrderTraversal()) {
      if (noMultRight.includes(node.value) && noMultRight.includes(node.key) && node.position == 0) {
console.debug("found a lim", node);
console.debug("now looking at", node.parent, "and",node.parent.children[0], "and", node.parent.children[1]);
        if (node.parent.parent && node.parent.parent.children[1].key == " " && node.parent.parent.children[1].value == " ") {
console.error("adding hello", node.parent.parent.children[1]);
          node.parent.parent.children[1].key = "✂️";
console.error("now", node.parent.parent.children[1]);
        }
      }
      if (noMultLeft.includes(node.value) && noMultLeft.includes(node.key) && node.position == 0) {
console.debug("found a quote", node);
console.debug("now looking at parent", node.parent, "and itself",node.parent.children[0], "and parent parent", node.parent.parent);
        if (node.parent.parent && node.parent.parent.parent && node.parent.parent.parent.children[1].key == " " && node.parent.parent.parent.children[1].value == " ") {
console.error("adding goodbye", node.parent.parent.parent.children[1]);
          node.parent.parent.parent.children[1].key = "✂️";
console.error("now", node.parent.parent.parent.children[1]);
        } else if (node.parent && node.parent.parent && node.parent.parent.children[1].key == " " && node.parent.parent.children[1].value == " ") {
console.error("adding goodbye", node.parent.parent.children[1]);
          node.parent.parent.children[1].key = "✂️";
console.error("now", node.parent.parent.children[1]);
        }
      }
    }
  }

  combineSubSup() {
// convert  a_b^c  from [a sub b] sup c  to  a subsup b c
    for (let node of this.preOrderTraversal()) {
// console.debug("trying subsup on", node);
      if (node.value === "" && node.key === "^" && node.position == 0) {
//   console.debug("found ^ in position", node.position, "and childrev with values and keys");
        if(node.children.length > 1 && node.children[0].key == "_") {
//   console.debug("0", node.children[0].value, node.children[0].key);
//   console.debug("1", node.children[1].value, node.children[1].key);
//   console.debug("2", node.children[2].value, node.children[2].key);
          // found a subsup
// the sibling with position=2 will be moved over to position 3
          node.parent.children[2].key = "subsup";
          node.parent.children[2].position = 3;
// the sibling in position 1 will be moved over to position 2, and replaced by child[2]
          node.parent.children[1] = node.children[2];
          node.parent.children[1].key = "subsup";
          node.parent.children[1].position = 2;
          node.parent.children[1].parent = node.parent;
// the child[0] gets moved up to be the 0th sibling
          node.parent.children.unshift(node.children[0]);
          node.parent.children[0].key = "subsup";
          node.parent.children[0].position = 0;
          node.parent.children[0].parent = node.parent;
// this node gets replaced by its child[1]
          node.parent.children[1] = node.children[1];
          node.parent.children[1].key = "subsup";
          node.parent.children[1].value = "subsup";
          node.parent.children[1].position = 1;  // it was that, but good to be careful?
          node.parent.children[1].parent = node.parent;
    //      node.children = [];
//   console.debug("0", node.parent.children[0].value, node.parent.children[0]);
//   console.debug("1", node.parent.children[1].value, node.parent.children[1]);
//   console.debug("2", node.parent.children[2].value, node.parent.children[2]);
//   console.debug("3", node.parent.children[3].value, node.parent.children[3]);
        } else {
    console.debug("no children")
        }
      }
    }
  }

  addParents() {
  //  currently a problem that the tree is not always built with parent information
  //  search for addParents in M2TreeConvert,js
    for (let node of this.preOrderTraversal()) {
        for (const child of node.children) {
// console.debug(child.parent == node, "node",node, "children",node.children, "child.parent", child.parent, child.parent == null);
            if (child.parent != node) {
//   console.debug("parent was", child.parent);
                child.parent = node
//   console.debug("parent is", child.parent);
            }
        }
    }
  }

  // this is not used, because it was too complicated so instead we
  // preprocess and distinguish between different types of integrals,
  // based on limits and weight
  combineInt() {
    for (let node of this.preOrderTraversal()) {
      if(node.value == "integr" && node.key == "integr" && node.position == 0) {
        console.debug("found int in position", node.position, "and siblings with values and keys");
   console.debug("1", node.parent.children[1].key, node.parent.children[1].value);
//   console.debug("2", node.parent.children[2].key, node.parent.children[2].value);
        if(node.parent.children[1].value == "" && node.parent.children[1].key == "integr" && node.parent.children[1].pair.length == 1) {
   console.debug("maybe found an int with limits")
          if(node.parent.children[1].children[0].key == "," &&
             node.parent.children[1].children[0].value == "") {
   console.debug("looking more promising");

             if(node.parent.children[1].children[1].key != "," || node.parent.children[1].children[2].key != ",") {
                 console.debug("error with integral subsup structure")
             }
   console.debug("int structure looks good");
           }
         }
       }
     }
  }

  // this is not used, because instead we went with wrapper(...)
  unWrapCertainParentheses() {
    for (let node of this.preOrderTraversal()) {
      if(node.value == "" && node.pair.length == 1 && node.children.length > 0) {
        console.debug("found wrapping parentheses", node.position, "and children with values and keys");
   console.debug("0", node.children[0].key, node.children[0].value);
//   console.debug("2", node.parent.children[2].key, node.parent.children[2].value);
// need to refactor this
        if( (node.children[0].value == "limop" && node.children[0].key == "limop") ||
             (node.children[0].value == "intllim" && node.children[0].key == "intllim") ||
             (node.children[0].value == "intllimweight" && node.children[0].key == "intllimweight") ||
             (node.children[0].value == "intlimsweight" && node.children[0].key == "intlimsweight") ||
            (node.children[0].value == "intlims" && node.children[0].key == "intlims") ) {
   console.debug("maybe found paraens to eliminate");
          node.pair.pop();
        }
     }
   }
  }
 }

// should this be with the utility functions?
function adjustBrackets(brackets, conversiontarget) {
    let p = brackets[0];
console.debug("adjusting brackets", p);
    if(conversiontarget == "LaTeX") {
        if (p[0] == "{"){ p[0] = ["\\{"] }
        if (p[1] == "}"){ p[1] = ["\\}"] }
    }
//    if (p[0] == "⁅"){ p[0] = [""] }   // assumed brackets on greedy functions  (and trig-like)
//    if (p[1] == "⁆"){ p[1] = [""] }
    if (p[0] == "⁅"){ p=[] }
    if (p[0] == "❲"){ p[0] = [""] }    // assumed brackets on grouping functions
    if (p[1] == "❳"){ p[1] = [""] }
    return p
}

function visStr(str) {
    if(str === undefined) { return "undefined" }
    if(str === null) { return "null" }
    if(str == "") { return "es" }
    return str.replaceAll(" ","␣")
}

function printTree(node, indentationlevel) {
  //    thisleveldata = indentationlevel + this.key + " " + this.value + " " + this.pair.length + "\n";
      console.debug("printTree of", node);
      if(!node) { return "" }
  //    let nodeleveldata = indentationlevel + "[" + (node.key || "null").replace(" ","␣") + "]   " + (node.value || "null").replace(" ","␣")
      let nodeleveldata = indentationlevel + "[" + visStr(node.key) + "]   |" + visStr(node.value) + "|"
      if(node.pair.length) { nodeleveldata += "    " + node.pair[0] + " " + node.pair.length}
      if(node.children.length == 0) { nodeleveldata += "    leaf" }
      else {
          if (node.parent != null) { nodeleveldata += "       " + node.parent.children.length }
          else { nodeleveldata += "       " + "nuLL" }
      }
      nodeleveldata += "\n"
      if(node.children.length == 0) {
  //      if(node.position == node.parent.children.length) {
          return nodeleveldata
  //      }
      } else {
          let numchildren = node.children.length;
          let childrenleveldata = nodeleveldata;
          for (let nn=0; nn < node.children.length; ++nn) {
              childrenleveldata += printTree(node.children[nn], indentationlevel + "    ")
          }
          return childrenleveldata
      }
}
