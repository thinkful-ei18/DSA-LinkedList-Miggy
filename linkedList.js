'use strict';
class _Node{
  constructor(value, next){
    this.value = value,
    this.next = next;
  }
}

class LinkedList{
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
    if (this.head === null){
      console.log(data + ' that doesn\'t exist in the list.');
      return false;
    }
    if (this.head.value === data){
      console.log(data +' exists in the list.');
      return true;
    }
    let currentNode = this.head;
    while (currentNode.next !== null){
      if (currentNode.value === data){
        console.log(data +' exists in the list.');
        return true;
      }
    }
    return false;

  }
  insertBefore(data,key){
    if (this.head === null){
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
    if (currentNode.value === key){
      prevNode.next = new _Node(data,currentNode);
      return true;
    }
    console.log('what you\'re trying to insert before doesn\'t exist');
    return false;
  }
  insertAfter(data,key){
    if (this.head === null){
      return false;
    }
    if (this.head.next === null){
      this.insertLast(data);
      return;
    }
    let tempNode = new _Node(data,null);
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.value !== key){
      currentNode = currentNode.next;
    }
    if (currentNode.value === key){
      tempNode.next = currentNode.next ;
      currentNode.next = tempNode;
      return true;
    }
    console.log('what you\'re trying to insert after doesn\'t exist');
    return false;
  }
  insertAt(data, index = 0){
    if (index === 1){
      this.insertFirst(data);
      return;
    }
    if (this.head === null){
      console.log('That index does not exist!');
      return false;
    }


    let currentNode = this.head;

    let count = 1;
    while(count < index && currentNode !== null){
      currentNode = currentNode.next;
      count ++;
    }
    if(currentNode === null){
      console.log('Can\'t insert '  + data+ ' to index ' +index+ '. That index is outside the of the list!');
      return false;
    }
    else{
      this.insertBefore(data,currentNode.value);
    }

  }


}
//helpers / suplemental

function display(list){
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

function size(list){
  let sizePointer = list.head;
  let count = 0;
  while(sizePointer !== null){
    count++;
    sizePointer = sizePointer.next;
  }
  console.log(`The Size of the list you me is ${count} nodes.`);
  return count;
}

function isEmpty(list){
  return list.head === null ? true : false;
}

function findPrevious(list, key){
  if (isEmpty(list)){
    console.log('Can\'t run this on an empty list');
    return null;
  }
  let currentNode = list.head;
  let prevNode = null;
  while(currentNode.next !== null && currentNode.value!== key){
    prevNode = currentNode;
    currentNode = currentNode.next;
  }
  if (currentNode.value !== key){
    console.log('The key provided doesnt exist in the list.');
    return null;
  }
  if (prevNode === null){
    console.log('There is nothing before the start of the list.');
    return null;
  }
  console.log(`The previous of ${key} is ${prevNode.value}`);
  return prevNode.value;
}
function findLast(list){
  if (isEmpty(list)){
    console.log('Thats an empty list!');
    return null;
  }
  if (size(list) === 1){
    return list.head;
  }

  let currentNode = list.head;
  while(currentNode.next !== null){
    currentNode = currentNode.next;
  }
  console.log('the last item in that list is '+ currentNode.value);
  return currentNode;

}

function main(){
  let SLL = new LinkedList();
  console.log('initial insert');
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  display(SLL);
  console.log('insert Tauhida at start of list');
  SLL.insertFirst('Tauhida');
  console.log('trying to remove a non existent');
  SLL.remove('squirrel');
  display(SLL);
  console.log('inserting Athena before Boomer');
  SLL.insertBefore('Athena','Boomer');
  console.log('inserting Hotdog after Helo');
  SLL.insertAfter('Hotdog','Helo');
  display(SLL);
  console.log('Inserting Kat at the 3rd pos.');
  SLL.insertAt('Kat',3);
  display(SLL);
  console.log('Removing Tauhida from the list');
  SLL.remove('Tauhida');
  display(SLL);
  console.log('Counting the list.');
  size(SLL);

  //making an empty list and testing some functions on that empty list;
  let EMPTYLIST = new LinkedList();
  console.log(isEmpty(EMPTYLIST));
  console.log(isEmpty(SLL));
  size(EMPTYLIST);
  console.log('Finding Previous of Kat in list');
  findPrevious(SLL,'Kat');
  console.log('Finding Previous of Head of list');
  findPrevious(SLL,'Apollo');
  console.log('Finding Previous of Last of list');
  findPrevious(SLL,'Starbuck');

  display(SLL);
  findLast(SLL);
}
//WHAT THE MYSTERY FUCNION DOES IS IT REMOVES ALL DUPLICATES.
//====================AFTERNOON WORK====================
function reverseMain(){
  let SLL = new LinkedList();
  // console.log('initial insert');
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  // console.log('before reverse');
  // display(SLL);
  display(SLL);
  console.log('>>=========================entered rec list');
  reverseList(SLL);
  console.log('<<=========================exited rec list');
  display(SLL);


// null => nodeA => nodeB => null
//null <= nodeA <= nodeB

// nodeA => nodeB => nodeC

}


function reverseList(list, oldHead = null){
  //base case
  if(list.head.next === null){
    console.log('base case!');
    list.head.next = oldHead;
    return list.head;
  }
  let prevHead = list.head;
  list.head = list.head.next;
  prevHead.next = oldHead;
  return reverseList(list,prevHead);

}
  //  Apollo => Boomer=> Helo=> Husker=> Starbuck
  //  Boomer => Helo=> Husker=> Starbuck
  //  Helo => Husker => Starbuck
  //  Husker => Starbuck
  //  Starbuck

// main();
reverseMain();
