import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import NavBar from './NavBar'
import Banner from './Banner'
import FlashSalePart from './FlashSalePart'
import CategoryPart from './CategoryPart'
import BestSellPart from './BestSellPart'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header></Header>
   <NavBar></NavBar>
   <Banner></Banner>
   <FlashSalePart></FlashSalePart>
   <CategoryPart></CategoryPart>
   <BestSellPart></BestSellPart>
    </>
  )
}

export default App
