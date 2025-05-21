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
  // Add other data structures as needed
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