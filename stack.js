const LinkedList = require("./linked-list");
/** Node: node for a stack. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  top = null;
  size = 0;
  _list = new LinkedList();

  /** push(val): add new value to the top of the stack. Returns undefined. */

  push(val) {
    // let newNode = new Node(val);

    // newNode.next = this.top;
    // this.top = newNode;
    // this.size++;
    this._list.unshift(val);
    this.top = this._list.head;
    this.size += 1;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(this.size === 0){
      throw new Error("Empty Stack");
    }

    // let topNode = this.top;
    // this.top = this.top.next;
    // this.size--;
    // return topNode.val;
    let value = this._list.shift();
    this.top = this._list.head;
    this.size -= 1;
    return value;
  }

  /** peek(): return the value of the top node in the stack. */

  peek() {
    return this.top.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if(this.size === 0){
      return true;
    }
    return false;
  }
}

module.exports = Stack;
