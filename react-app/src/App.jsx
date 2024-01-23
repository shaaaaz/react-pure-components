import { useState } from 'react'
import PureComponents from './components/PureComponents'
import SimpleComponent from './components/SimpleComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SimpleComponent/>
      <PureComponents/>
    </>
  )
}

export default App
