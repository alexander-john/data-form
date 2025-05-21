import { useState } from 'react'
import Editor from '@monaco-editor/react'
import { Routes, Route, Link } from 'react-router-dom'
import DataStructureWalkthrough from './DataStructureWalkthrough'
import './App.css'

const dataStructures = [
  'Array',
  'Stack',
  'Queue',
  'Linked List',
  'Tree',
  'Graph',
  'Hash Table',
  'Heap',
  'Trie',
  'Set'
]

function Home() {
  return (
    <div className="container">
      <h1>Top 10 Data Structures</h1>
      <ul>
        {dataStructures.map(ds => (
          <li key={ds}>
            <Link to={`/structure/${ds.toLowerCase().replace(/\s/g, '-')}`}>{ds}</Link>
          </li>
        ))}
      </ul>
      <p>Click a data structure to learn how to build it step by step!</p>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/structure/:name" element={<DataStructureWalkthrough />} />
    </Routes>
  )
}

export default App
