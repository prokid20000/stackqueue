const LinkedList = require("./linked-list");
/** Node: node for a queue. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  first = null;
  last = null;
  size = 0;
  _list = new LinkedList()

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    this._list.push(val)
    // let newNode = new Node(val)

    // if(this.first === null){
    //   this.first = newNode;
    // }
    // else{
    //   this.last.next = newNode;
    // }
    // this.last = newNode;
    this.first = this._list.head;
    this.last = this._list.tail;
    this.size += 1;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    let firstNodeVal = this._list.shift()
    // if(this.size === 0){
    //   throw new Error("Empty queue");
    // }
    
    // let currentNode = this.first;

    // //Queue has one element
    // if(this.size === 1){
    //   this.first = null;
    //   this.last = null;
    // }

    // //Any other case
    // else{
    //   this.first = currentNode.next;
    // }
    this.size -= 1;
    this.first = this._list.head;
    this.last = this._list.tail;
    return firstNodeVal;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if(this.size === 0){
      throw new Error("Empty queue");
    }

    return this._list.getAt(0);

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(this.size === 0){
      return true;
    }
    else{
      return false;
    }

  }
}

module.exports = Queue;
