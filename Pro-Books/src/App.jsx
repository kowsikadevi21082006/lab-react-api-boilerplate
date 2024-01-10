import { useState } from 'react'
import './App.css'
import Api from './components/Api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Api />
    </>
  )
}

export default App