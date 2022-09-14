class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class SLL {
  constructor() {
    this.head = null;
  }

  addFront(val) {
    let newNode = new Node(val);
    // Checking to see if the current list does not have a head node (if the list is empty) // If the list is empty, place the new node as the head
    if (!this.head) {
      this.head = newNode;
      return this;
    } // If the list is not empty, assign the head to be the next node to the new node (Blue Arrow in picture above)
    newNode.next = this.head; // Then finally assign the new_node to be the new head of the list (Red Arrow in picture above)
    this.head = newNode;
    return this;
  }

  removeFront() {
    if (!this.head) {
      return null;
    }
    let removeNode = this.head;
    this.head = removeNode.next;
    removeNode.next = null;
    return this.head;
  }

  frontValue() {
    if (!this.head) {
      return null;
    }
    return this.head.data;
  }

  findSum() {
    //We first have to tell our train attendant that we want them to start at the front of the train
    let runner = this.head;
    let sum = 0;
    //Since a Linked List does not know how many nodes is within it, we will not be able to use a for loop to             iterate, instead we'll use a while
    //Also we need to tell them when to stop otherwise they will just run off the end of the train
    while (runner !== null) {
      //Since the runner is set to the current node, its value will be equal to the value of the node they                 are currently on
      sum += runner.data;
      //Tell our attendant to move to the next car
      runner = runner.next;
    }
    return sum;
  }

  displayValues() {
    let displayStr = this.head.data;
    let runner = this.head.next;

    while(runner != null){
      
      displayStr = `${displayStr}, ${runner.data}`;
      runner = runner.next;
    }
    return displayStr
  }

}

let SSL1 = new SLL();
SSL1.addFront(18);
SSL1.addFront(5);
SSL1.addFront(2);
console.log(SSL1.addFront(73));

console.log(SSL1.removeFront());

console.log(SSL1.frontValue());

console.log(SSL1.displayValues())
