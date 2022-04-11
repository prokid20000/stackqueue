/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val)

    if(this.head === null){
      this.head = newNode;
    }
    else{
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length += 1;
    
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val)

    if(this.head === null){
      this.tail = newNode;
    }
    else{
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    //list is empty
    if(this.length === 0){
      throw new Error("Empty List");
    }
    let currentNode = this.head;

    //list has one element
    if(this.tail === currentNode){
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return currentNode.val
    }
    //any other case
    else{
      while(currentNode.next != this.tail){
        currentNode = currentNode.next;
      }
      let lastVal = currentNode.next.val;
      currentNode.next = null;
      this.tail = currentNode;
      this.length -= 1;
      return lastVal;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    //list is empty
    if(this.length === 0){
      throw new Error("Empty List");
    }
    let firstNode = this.head;

    //list has one element
    if(this.tail === this.head){
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return firstNode.val
    }
    //any other case
    else{
      let firstVal = firstNode.val;
      this.head = firstNode.next;
      this.length -= 1;
      return firstVal;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(idx >= this.length || idx < 0){
      throw new Error("Invalid Index");
    }

    let currentNode = this.head;

    for(let i = 0; i < idx; i++){
      currentNode = currentNode.next;
    }

    return currentNode.val;

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(idx >= this.length || idx < 0){
      throw new Error("Invalid Index");
    }

    let currentNode = this.head;

    for(let i = 0; i < idx; i++){
      currentNode = currentNode.next;
    }

    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx > this.length || idx < 0){
      throw new Error("Invalid Index");
    }

    if(this.length <= 1){
      this.unshift(val);
    }
    else if(idx === this.length){
      this.push(val);
    }
    else{
      let currentNode = this.head;

      for(let i = 0; i < idx-1; i++){
        currentNode = currentNode.next;
      }
      let nextNode = currentNode.next;
      let newNode = new Node(val);
      currentNode.next = newNode;
      newNode.next = nextNode;
      this.length += 1;
    }
    

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(this.length === 0){
      throw new Error("Empty List")
    }
    if(idx >= this.length || idx < 0){
      throw new Error("Invalid Index");
    }

    //only one item in list OR last item in list
    if(this.length === 1 || idx === this.length-1){
      this.pop();
    }
    //first item in list
    else if(idx === 0){
      this.shift();
    }
    else{
      let currentNode = this.head;

      for(let i = 0; i < idx -1; i++){
        currentNode = currentNode.next;
      }
      let nextNode = currentNode.next.next;
      currentNode.next = nextNode;
      this.length -= 1;
    }

  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length === 0) return 0;
    
    let sum = 0;
    let currentNode = this.head;
    for(let i = 0; i < this.length; i++){
      sum+= currentNode.val;
      currentNode = currentNode.next;
    }
    return sum/this.length;
  }
}

module.exports = LinkedList;
