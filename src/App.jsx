import './App.css'
import { useSqueak } from './hooks/use-squeak'
import React from 'react'

function App() {
  const squeak = useSqueak()
  return (
    <>
      <button onClick={squeak}>squeak</button>
    </>
  )
}

export default App
