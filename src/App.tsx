import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react w-20" alt="React logo" />
        </a>
      </div>
      <header className="App-header m-3">
      <h1 className='bg-red-500'>Hello! Vite + React</h1>
      </header>
    </div>
  )
}

export default App
