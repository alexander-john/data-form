const walkthroughSteps = {
    array: [
        {
            instruction: "Step 1: Start by creating a class called MyArray.",
            code: `class MyArray {
    constructor() {
        this.data = {};
        this.length = 0;
    }
}`
        },
        {
            instruction: "Step 2: Add a method to get an element by its index.",
            code: `class MyArray {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    get(index) {
        return this.data[index];
    }
}`
        },
        {
            instruction: "Step 3: Add a push method to add elements to the end.",
            code: `class MyArray {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
}`
        },
        {
            instruction: "Step 4: Add a pop method to remove the last element.",
            code: `class MyArray {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        if (this.length === 0) return undefined;
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
}`
        },
        {
            instruction: "Step 5: Add a delete method to remove an element at a specific index.",
            code: `class MyArray {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        if (this.length === 0) return undefined;
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this._collapseTo(index);
        return item;
    }

    _collapseTo(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}`
        }
    ],
    stack: [
        {
            instruction: "Step 1: Create a Stack class with a constructor that initializes an empty array.",
            code: `class Stack {
    constructor() {
        this.items = [];
    }
}`
        },
        {
            instruction: "Step 2: Add a push method to add elements to the top of the stack.",
            code: `class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }
}`
        },
        {
            instruction: "Step 3: Add a pop method to remove and return the top element.",
            code: `class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) return undefined;
        return this.items.pop();
    }
}`
        },
        {
            instruction: "Step 4: Add a peek method to view the top element without removing it.",
            code: `class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) return undefined;
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0) return undefined;
        return this.items[this.items.length - 1];
    }
}`
        },
        {
            instruction: "Step 5: Add an isEmpty method to check if the stack is empty.",
            code: `class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) return undefined;
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0) return undefined;
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}`
        }
    ],
    queue: [
        {
            instruction: "Step 1: Create a Queue class with a constructor that initializes an empty object and two pointers (front and rear).",
            code: `class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }
}`
        },
        {
            instruction: "Step 2: Add an enqueue method to add elements to the rear of the queue.",
            code: `class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }

    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }
}`
        },
        {
            instruction: "Step 3: Add a dequeue method to remove and return the front element.",
            code: `class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }

    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }

    dequeue() {
        if (this.isEmpty()) return undefined;
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }
}`
        },
        {
            instruction: "Step 4: Add a peek method to view the front element without removing it.",
            code: `class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }

    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }

    dequeue() {
        if (this.isEmpty()) return undefined;
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    peek() {
        if (this.isEmpty()) return undefined;
        return this.items[this.front];
    }
}`
        },
        {
            instruction: "Step 5: Add an isEmpty method to check if the queue is empty.",
            code: `class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }

    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }

    dequeue() {
        if (this.isEmpty()) return undefined;
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    peek() {
        if (this.isEmpty()) return undefined;
        return this.items[this.front];
    }

    isEmpty() {
        return this.rear === this.front;
    }
}`
        }
    ],
    "linked-list": [
        {
            instruction: "Step 1: Create a Node class to represent each element in the linked list.",
            code: `class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}`
        },
        {
            instruction: "Step 2: Create a LinkedList class with a head property.",
            code: `class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}`
        },
        {
            instruction: "Step 3: Add an append method to add a node to the end of the list.",
            code: `class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
}`
        },
        {
            instruction: "Step 4: Add a prepend method to add a node to the start of the list.",
            code: `class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
}`
        },
        {
            instruction: "Step 5: Add a delete method to remove the first node with a given value.",
            code: `class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  delete(value) {
    if (!this.head) return;
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
    }
  }
}`
        }
    ],
    tree: [
        {
            instruction: "Step 1: Create a TreeNode class to represent each node in the tree.",
            code: `class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}`
        },
        {
            instruction: "Step 2: Create a BinaryTree class with a root property.",
            code: `class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
}`
        },
        {
            instruction: "Step 3: Add an insert method to add nodes to the tree (BST logic).",
            code: `class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }
}`
        },
        {
            instruction: "Step 4: Add a find method to search for a value in the tree.",
            code: `class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }
}`
        },
        {
            instruction: "Step 5: Add an inOrderTraversal method to visit nodes in order.",
            code: `class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }

  inOrderTraversal(node = this.root, result = []) {
    if (!node) return result;
    this.inOrderTraversal(node.left, result);
    result.push(node.value);
    this.inOrderTraversal(node.right, result);
    return result;
  }
}`
        }
    ],
    // ...other data structures...
}

export default walkthroughSteps