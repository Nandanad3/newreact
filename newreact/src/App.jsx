import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Toble from './components/Toble'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import Selection from './components/Selection'
import Api from './components/Api'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/toble" element={<Toble/>} />
      <Route path="/statebasics" element={<StateBasics/>} />
      <Route path="/counter" element={<Counter/>} />
      <Route path="/selection" element={<Selection/>} />
      <Route path="/api" element={<Api/>} />
      <Route path="/product" element={<Product/>} />
      </Routes>
      {/* <Login/>  
      <SignUp/> 
       */}
       {/* <Toble/> */}
      
    </>
  )
}

export default App
