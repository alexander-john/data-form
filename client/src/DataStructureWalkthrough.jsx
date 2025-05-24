import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import Editor from '@monaco-editor/react'

const walkthroughSteps = {
  array: [
    {
      instruction: "Step 1: Start by creating a class called MyArray.",
      code: `class MyArray {\n  constructor() {\n    // We'll store elements in an object\n    this.data = {};\n    this.length = 0;\n  }\n}`
    },
    {
      instruction: "Step 2: Add a method to get an element by its index.",
      code: `class MyArray {\n  constructor() {\n    this.data = {};\n    this.length = 0;\n  }\n\n  get(index) {\n    return this.data[index];\n  }\n}`
    },
    {
      instruction: "Step 3: Add a push method to add elements to the end.",
      code: `class MyArray {\n  constructor() {\n    this.data = {};\n    this.length = 0;\n  }\n\n  get(index) {\n    return this.data[index];\n  }\n\n  push(item) {\n    this.data[this.length] = item;\n    this.length++;\n    return this.length;\n  }\n}`
    },
    {
      instruction: "Step 4: Add a pop method to remove the last element.",
      code: `class MyArray {\n  constructor() {\n    this.data = {};\n    this.length = 0;\n  }\n\n  get(index) {\n    return this.data[index];\n  }\n\n  push(item) {\n    this.data[this.length] = item;\n    this.length++;\n    return this.length;\n  }\n\n  pop() {\n    if (this.length === 0) return undefined;\n    const lastItem = this.data[this.length - 1];\n    delete this.data[this.length - 1];\n    this.length--;\n    return lastItem;\n  }\n}`
    },
    {
      instruction: "Step 5: Add a delete method to remove an element at a specific index.",
      code: `class MyArray {\n  constructor() {\n    this.data = {};\n    this.length = 0;\n  }\n\n  get(index) {\n    return this.data[index];\n  }\n\n  push(item) {\n    this.data[this.length] = item;\n    this.length++;\n    return this.length;\n  }\n\n  pop() {\n    if (this.length === 0) return undefined;\n    const lastItem = this.data[this.length - 1];\n    delete this.data[this.length - 1];\n    this.length--;\n    return lastItem;\n  }\n\n  delete(index) {\n    const item = this.data[index];\n    this._collapseTo(index);\n    return item;\n  }\n\n  _collapseTo(index) {\n    for (let i = index; i < this.length - 1; i++) {\n      this.data[i] = this.data[i + 1];\n    }\n    delete this.data[this.length - 1];\n    this.length--;\n  }\n}`
    }
  ],
  stack: [
    {
      instruction: "Step 1: Create a Stack class with a constructor that initializes an empty array.",
      code: `class Stack {\n  constructor() {\n    this.items = [];\n  }\n}`
    },
    {
      instruction: "Step 2: Add a push method to add elements to the top of the stack.",
      code: `class Stack {\n  constructor() {\n    this.items = [];\n  }\n\n  push(element) {\n    this.items.push(element);\n  }\n}`
    },
    {
      instruction: "Step 3: Add a pop method to remove and return the top element.",
      code: `class Stack {\n  constructor() {\n    this.items = [];\n  }\n\n  push(element) {\n    this.items.push(element);\n  }\n\n  pop() {\n    if (this.items.length === 0) return undefined;\n    return this.items.pop();\n  }\n}`
    },
    {
      instruction: "Step 4: Add a peek method to view the top element without removing it.",
      code: `class Stack {\n  constructor() {\n    this.items = [];\n  }\n\n  push(element) {\n    this.items.push(element);\n  }\n\n  pop() {\n    if (this.items.length === 0) return undefined;\n    return this.items.pop();\n  }\n\n  peek() {\n    if (this.items.length === 0) return undefined;\n    return this.items[this.items.length - 1];\n  }\n}`
    },
    {
      instruction: "Step 5: Add an isEmpty method to check if the stack is empty.",
      code: `class Stack {\n  constructor() {\n    this.items = [];\n  }\n\n  push(element) {\n    this.items.push(element);\n  }\n\n  pop() {\n    if (this.items.length === 0) return undefined;\n    return this.items.pop();\n  }\n\n  peek() {\n    if (this.items.length === 0) return undefined;\n    return this.items[this.items.length - 1];\n  }\n\n  isEmpty() {\n    return this.items.length === 0;\n  }\n}`
    }
  ],
  queue: [
    {
      instruction: "Step 1: Create a Queue class with a constructor that initializes an empty object and two pointers (front and rear).",
      code: `class Queue {\n  constructor() {\n    this.items = {};\n    this.front = 0;\n    this.rear = 0;\n  }\n}`
    },
    {
      instruction: "Step 2: Add an enqueue method to add elements to the rear of the queue.",
      code: `class Queue {\n  constructor() {\n    this.items = {};\n    this.front = 0;\n    this.rear = 0;\n  }\n\n  enqueue(element) {\n    this.items[this.rear] = element;\n    this.rear++;\n  }\n}`
    },
    {
      instruction: "Step 3: Add a dequeue method to remove and return the front element.",
      code: `class Queue {\n  constructor() {\n    this.items = {};\n    this.front = 0;\n    this.rear = 0;\n  }\n\n  enqueue(element) {\n    this.items[this.rear] = element;\n    this.rear++;\n  }\n\n  dequeue() {\n    if (this.isEmpty()) return undefined;\n    const item = this.items[this.front];\n    delete this.items[this.front];\n    this.front++;\n    return item;\n  }\n}`
    },
    {
      instruction: "Step 4: Add a peek method to view the front element without removing it.",
      code: `class Queue {\n  constructor() {\n    this.items = {};\n    this.front = 0;\n    this.rear = 0;\n  }\n\n  enqueue(element) {\n    this.items[this.rear] = element;\n    this.rear++;\n  }\n\n  dequeue() {\n    if (this.isEmpty()) return undefined;\n    const item = this.items[this.front];\n    delete this.items[this.front];\n    this.front++;\n    return item;\n  }\n\n  peek() {\n    if (this.isEmpty()) return undefined;\n    return this.items[this.front];\n  }\n}`
    },
    {
      instruction: "Step 5: Add an isEmpty method to check if the queue is empty.",
      code: `class Queue {\n  constructor() {\n    this.items = {};\n    this.front = 0;\n    this.rear = 0;\n  }\n\n  enqueue(element) {\n    this.items[this.rear] = element;\n    this.rear++;\n  }\n\n  dequeue() {\n    if (this.isEmpty()) return undefined;\n    const item = this.items[this.front];\n    delete this.items[this.front];\n    this.front++;\n    return item;\n  }\n\n  peek() {\n    if (this.isEmpty()) return undefined;\n    return this.items[this.front];\n  }\n\n  isEmpty() {\n    return this.rear === this.front;\n  }\n}`
    }
  ],
  "linked-list": [
    {
      instruction: "Step 1: Create a Node class to represent each element in the linked list.",
      code: `class Node {\n  constructor(value) {\n    this.value = value;\n    this.next = null;\n  }\n}`
    },
    {
      instruction: "Step 2: Create a LinkedList class with a head property.",
      code: `class Node {\n  constructor(value) {\n    this.value = value;\n    this.next = null;\n  }\n}\n\nclass LinkedList {\n  constructor() {\n    this.head = null;\n  }\n}`
    },
    {
      instruction: "Step 3: Add an append method to add a node to the end of the list.",
      code: `class Node {\n  constructor(value) {\n    this.value = value;\n    this.next = null;\n  }\n}\n\nclass LinkedList {\n  constructor() {\n    this.head = null;\n  }\n\n  append(value) {\n    const newNode = new Node(value);\n    if (!this.head) {\n      this.head = newNode;\n      return;\n    }\n    let current = this.head;\n    while (current.next) {\n      current = current.next;\n    }\n    current.next = newNode;\n  }\n}`
    },
    {
      instruction: "Step 4: Add a prepend method to add a node to the start of the list.",
      code: `class Node {\n  constructor(value) {\n    this.value = value;\n    this.next = null;\n  }\n}\n\nclass LinkedList {\n  constructor() {\n    this.head = null;\n  }\n\n  append(value) {\n    const newNode = new Node(value);\n    if (!this.head) {\n      this.head = newNode;\n      return;\n    }\n    let current = this.head;\n    while (current.next) {\n      current = current.next;\n    }\n    current.next = newNode;\n  }\n\n  prepend(value) {\n    const newNode = new Node(value);\n    newNode.next = this.head;\n    this.head = newNode;\n  }\n}`
    },
    {
      instruction: "Step 5: Add a delete method to remove the first node with a given value.",
      code: `class Node {\n  constructor(value) {\n    this.value = value;\n    this.next = null;\n  }\n}\n\nclass LinkedList {\n  constructor() {\n    this.head = null;\n  }\n\n  append(value) {\n    const newNode = new Node(value);\n    if (!this.head) {\n      this.head = newNode;\n      return;\n    }\n    let current = this.head;\n    while (current.next) {\n      current = current.next;\n    }\n    current.next = newNode;\n  }\n\n  prepend(value) {\n    const newNode = new Node(value);\n    newNode.next = this.head;\n    this.head = newNode;\n  }\n\n  delete(value) {\n    if (!this.head) return;\n    if (this.head.value === value) {\n      this.head = this.head.next;\n      return;\n    }\n    let current = this.head;\n    while (current.next && current.next.value !== value) {\n      current = current.next;\n    }\n    if (current.next) {\n      current.next = current.next.next;\n    }\n  }\n}`
    }
  ],
  tree: [
    {
      instruction: "Step 1: Create a TreeNode class to represent each node in the tree.",
      code: `class TreeNode {\n  constructor(value) {\n    this.value = value;\n    this.left = null;\n    this.right = null;\n  }\n}`
    },
    {
      instruction: "Step 2: Create a BinaryTree class with a root property.",
      code: `class TreeNode {\n  constructor(value) {\n    this.value = value;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass BinaryTree {\n  constructor() {\n    this.root = null;\n  }\n}`
    },
    {
      instruction: "Step 3: Add an insert method to add nodes to the tree (BST logic).",
      code: `class TreeNode {\n  constructor(value) {\n    this.value = value;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass BinaryTree {\n  constructor() {\n    this.root = null;\n  }\n\n  insert(value) {\n    const newNode = new TreeNode(value);\n    if (!this.root) {\n      this.root = newNode;\n      return;\n    }\n    let current = this.root;\n    while (true) {\n      if (value < current.value) {\n        if (!current.left) {\n          current.left = newNode;\n          return;\n        }\n        current = current.left;\n      } else {\n        if (!current.right) {\n          current.right = newNode;\n          return;\n        }\n        current = current.right;\n      }\n    }\n  }\n}`
    },
    {
      instruction: "Step 4: Add a find method to search for a value in the tree.",
      code: `class TreeNode {\n  constructor(value) {\n    this.value = value;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass BinaryTree {\n  constructor() {\n    this.root = null;\n  }\n\n  insert(value) {\n    const newNode = new TreeNode(value);\n    if (!this.root) {\n      this.root = newNode;\n      return;\n    }\n    let current = this.root;\n    while (true) {\n      if (value < current.value) {\n        if (!current.left) {\n          current.left = newNode;\n          return;\n        }\n        current = current.left;\n      } else {\n        if (!current.right) {\n          current.right = newNode;\n          return;\n        }\n        current = current.right;\n      }\n    }\n  }\n\n  find(value) {\n    let current = this.root;\n    while (current) {\n      if (value === current.value) return true;\n      current = value < current.value ? current.left : current.right;\n    }\n    return false;\n  }\n}`
    },
    {
      instruction: "Step 5: Add an inOrderTraversal method to visit nodes in order.",
      code: `class TreeNode {\n  constructor(value) {\n    this.value = value;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass BinaryTree {\n  constructor() {\n    this.root = null;\n  }\n\n  insert(value) {\n    const newNode = new TreeNode(value);\n    if (!this.root) {\n      this.root = newNode;\n      return;\n    }\n    let current = this.root;\n    while (true) {\n      if (value < current.value) {\n        if (!current.left) {\n          current.left = newNode;\n          return;\n        }\n        current = current.left;\n      } else {\n        if (!current.right) {\n          current.right = newNode;\n          return;\n        }\n        current = current.right;\n      }\n    }\n  }\n\n  find(value) {\n    let current = this.root;\n    while (current) {\n      if (value === current.value) return true;\n      current = value < current.value ? current.left : current.right;\n    }\n    return false;\n  }\n\n  inOrderTraversal(node = this.root, result = []) {\n    if (!node) return result;\n    this.inOrderTraversal(node.left, result);\n    result.push(node.value);\n    this.inOrderTraversal(node.right, result);\n    return result;\n  }\n}`
    }
  ],
  // ...other data structures...
}

function DataStructureWalkthrough() {
  const { name } = useParams()
  const [step, setStep] = useState(0)
  const [code, setCode] = useState('// Start typing your code here...')

  const steps = walkthroughSteps[name] || ["Step 1: Coming soon!"]

  return (
    <div className="container">
      <Link to="/">← Back</Link>
      <h2>{name.replace('-', ' ').toUpperCase()}</h2>
      <p>{steps[step].instruction || steps[step]}</p>
      <button disabled={step === 0} onClick={() => setStep(s => s - 1)}>Previous</button>
      <button disabled={step === steps.length - 1} onClick={() => setStep(s => s + 1)}>Next</button>
      <div style={{ marginTop: '2rem' }}>
        <Editor
          height="500px"
          defaultLanguage="javascript"
          value={steps[step].code || code}
          onChange={value => setCode(value)}
        />
      </div>
    </div>
  )
}

export default DataStructureWalkthrough