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

  removeFront(){
    if(!this.head){
        return null
    }
    let removeNode = this.head;
    this.head = removeNode.next;
    removeNode.next = null;
    return this.head;
  }

  frontValue(){
    if(!this.head){
        return null
    }
    return this.head.data
  }
}

let SSL1 = new SLL();
SSL1.addFront(18)
SSL1.addFront(5)
console.log(SSL1.addFront(73));

console.log(SSL1.removeFront());

console.log(SSL1.frontValue());