import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState<number>(0)
  return (
    <div className="app">
      <h1>Vite + React</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  )
}
