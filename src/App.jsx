import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'
function App() {
  const [count, setCount] = useState(0)

let newArr=[1,2,3]
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
     <br></br>
     <Card channel="rasha rasha rasha"/> <br></br>
     <Card channel="Snapchat" btnText="Visit me" />
     </>
  )
}

export default App
