import React, { useState } from 'react';
import CsButton from './components/csButton/csButton';
import CsInput from './components/csInput/csInput';

export default function App() {
  const [count, setCount] = useState<number>(0)
  return (
    <div className="app">
      <h1>Vite + React</h1>
      <p>Count: {count}</p>
      <CsButton onClick={() => setCount(c => c + 1)} />

      <CsInput  />
      <CsInput label="test" />
    </div>
  )
}
