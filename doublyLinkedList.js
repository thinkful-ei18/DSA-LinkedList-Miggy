'use strict';

class _Node{
  constructor(value, next, prev){
    this.value = value,
    this.next = next,
    this.prev =  prev;
  };
}

class DubLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }
}
