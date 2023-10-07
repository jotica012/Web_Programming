import { useState } from 'react'
import MainPage from './components/MainPage/MainPage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div className='container'>
        <MainPage/>
      </div>
      <Footer></Footer>
    
    </>
  )
}


