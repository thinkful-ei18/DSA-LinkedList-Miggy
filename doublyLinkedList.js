'use strict';

class _Node{
  constructor(value, next, prev){
    this.value = value,
    this.next = next,
    this.prev =  prev;
  }
}

class DubLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }
  insertFirst(data){
    //if the list is empty
    if(this.head === null){
      this.head = new _Node(data,null,null);
      this.tail = this.head;
      return ;
    }
    let tempNode = new _Node(data,this.head,null);
    this.head.prev = tempNode;
    this.head = tempNode;
    return ;
  }
  insertLast(data){
    if(this.head === null){

      this.head = new _Node(data,null,null);
      this.tail = this.head;
      return ;
    }
    let tempNode = new _Node(data,null,this.tail);
    this.tail.next = tempNode;
    this.tail = tempNode;
  }
  insertBefore(data,key){
    let tempNode = new _Node(data,null,null);
    let insertPointer = this.head;
    while (insertPointer!== null && insertPointer.value !==key){
      insertPointer = insertPointer.next;
    }
    //in the case that key is at the very beggining
    if(insertPointer === null){
      console.log('key does not exist in list insertBefore() failed');
      return false;
    }
    else if(insertPointer.prev === null){
      tempNode.next = this.head;
      this.head.previous = tempNode;
      this.head = tempNode;
      return true;
    }
    else{
      tempNode.next = insertPointer;
      insertPointer.prev.next = tempNode;
      insertPointer.prev = tempNode;
      return true;
    }

  }
  insertAfter(data,key){
    let tempNode = new _Node(data,null,null);
    let insertPointer = this.head;
    while (insertPointer!== null && insertPointer.value !==key){
      insertPointer = insertPointer.next;
    }
    if(insertPointer === null){
      console.log('key does not exist in list insertAfter() failed');
      return false;
    }
    else if(insertPointer.next === null){
      this.tail.next = tempNode;
      tempNode.prev = this.tail;
      this.tail = tempNode;
      return true;
    }

    else{
      tempNode.next = insertPointer.next;
      tempNode.prev = insertPointer;
      insertPointer.next.prev = tempNode;
      insertPointer.next = tempNode;
    }
  }
  insertAt(data,index){
    //assuming that the index of the linked list starts at one
    if(index === 0){
      console.log('in this case, linkedlists start at 1. Did not insert ')
      return false;
    }
    if(index === 1){
      this.insertFirst(data);
      return;
    }

    let tempNode = new _Node(data,null,null);
    let currentIndex = 1;
    let insertPointer = this.head;

    while (currentIndex < index){
      if(insertPointer.next === null){
        console.log(`Failed to insert ${data} at index ${index}, out of bounds error`);
        return false;
      }
      insertPointer = insertPointer.next;
      currentIndex++;
    }
    this.insertBefore(data,insertPointer.value);
    return true;

  }

}
//helpers
function displayHeadToTail(list){
  console.log('===start of list===');
  let displayPointer = list.head;
  if(displayPointer === null){
    console.log('its an empty list!');
    return;
  }
  if(displayPointer.next === null){
    console.log(displayPointer.value);
    console.log('===end of list (there was only one)===');
    return;
  }
  while(displayPointer !== null){
    console.log(displayPointer.value);
    displayPointer = displayPointer.next;

  }
  console.log('===end of list===');
}

function reverseDLL(list){
  let currentPointer = null;
  let nextPointer = list.tail;
  while(nextPointer !== null){
    nextPointer.next = nextPointer.prev;
    nextPointer.prev = currentPointer;
    currentPointer = nextPointer;
    nextPointer = nextPointer.next;
  }
  list.head = list.tail;
  list.tail = nextPointer;
  return true;
}
function main(){
  let DLL = new DubLinkedList();
  DLL.insertFirst('foo');
  DLL.insertFirst('weeer');
  DLL.insertFirst('bar');
  DLL.insertFirst('bizz');
  displayHeadToTail(DLL);
  reverseDLL(DLL);
  displayHeadToTail(DLL);



}
main();
