import { useState } from 'react'
import './App.css'
import AppHeader from './components/Header/appHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>Just a name</h1>
      <AppHeader />
    </div>
      
    </>
  )
}

export default App
