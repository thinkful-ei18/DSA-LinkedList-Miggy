'use strict';
class _Node{
  constructor(value, next){
    this.value = value,
    this.next = next;
  }
}

class linkedList{
  constructor(){
    this.head=null;
  }
  insertFirst(data){
    this.head = new _Node(data, this.head);
  }
  insertLast(data){
    if (this.head === null){
      this.insertFirst(data);
    }
    else {
      let tempNode = this.head;
      while(tempNode.next !== null){
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(data,null);
    }
  }
  remove(data){
    if (this.head === null){
      return false;
    }
    if (this.head.value === data){
      this.head = this.head.next;
      return true;
    }
    let currentNode = this.head;
    let prevNode = null;

    while (currentNode !== null && currentNode.value !== data){
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null){
      console.log(data+ ' Was not found in the list.');
      return false;
    }
    prevNode.next = currentNode.next;
    return true;

  }
  find(data){
    if(this.head === null){
      console.log(data + ' that doesn\'t exist in the list.');
      return false;
    }
    if(this.head.value === data){
      console.log(data +' exists in the list.');
      return true;
    }
    let currentNode = this.head;
    while(currentNode.next !== null){
      if(currentNode.value === data){
        console.log(data +' exists in the list.');
        return true;
      }
    }
    return false;

  }
  insertBefore(data,key){
    if(this.head === null){
      return false;
    }
    if (this.head.value === key){
      this.insertFirst(data);
      return true;
    }
    let currentNode = this.head;
    let prevNode = null;
    while (currentNode.next !== null && currentNode.value !== key){
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    if(currentNode.value === key){
      prevNode.next = new _Node(data,currentNode);
      return true;
    }
    console.log('what you\'re trying to insert before doesn\'t exist');
    return false;
  }
  insertAfter(data,key){
    if(this.head === null){
      return false;
    }
    if(this.head.next === null){
      this.insertLast(data);
      return;
    }
    let tempNode = new _Node(data,null);
    let currentNode = this.head;
    while (currentNode.next!==null && currentNode.value !== key){
      currentNode = currentNode.next;
    }
    if(currentNode.value === key){
      tempNode.next = currentNode.next ;
      currentNode.next = tempNode;
      return true;
    }
    console.log('what you\'re trying to insert after doesn\'t exist');
    return false;

  }
  insertAt(data,index){
    let currentCount = 0;
    if(this.head === )
  }
  display(){
    console.log('===start of list===');
    let tempNode = this.head;
    if(tempNode === null){
      console.log('its an empty list!');
      return;
    }
    if(tempNode.next === null){
      console.log(tempNode.value);
      return;
    }
    while(tempNode !== null){
      console.log(tempNode.value);
      tempNode = tempNode.next;

    }
    console.log('===end of list===');
  }
}

function main(){
  let SLL = new linkedList();
  console.log('initial insert');
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.display();
  console.log('insert Tauhida at start of list');
  SLL.insertFirst('Tauhida');
  console.log('trying to remove a non existent');
  SLL.remove('squirrel');
  SLL.display();
  console.log('inserting Athena before Boomer');
  SLL.insertBefore('Athena','Boomer');
  console.log('inserting Hotdog after Helo');
  SLL.insertAfter('Hotdog','Helo');
  SLL.display();

}



main();
