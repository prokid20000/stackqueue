const Queue = require("../queue");
const Stack = require("../stack");

function stringReversal(str) {
  let letterStack = new Stack();
  for(let char of str){
    letterStack.push(char);
  }

  let reverseStr = "";
  while(!letterStack.isEmpty()){
    reverseStr = reverseStr + letterStack.pop();
  }
  return reverseStr;
}

function balancedBrackets(str) {
  let bracketStack = new Stack();
  let openingBrackets = "{([";
  for(let char of str){
    if(openingBrackets.includes(char)){
      bracketStack.push(char);
    }
    if(char === "]" && bracketStack.peek() === "["){
    }
  }
}

function josephusSurvivor(peopleNum, skip) {
}

function calculator(input) {
}

module.exports = {
  calculator,
  josephusSurvivor,
  balancedBrackets,
  stringReversal,
};
