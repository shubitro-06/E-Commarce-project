import React from 'react'
import Banner from '../Banner'
import FlashSalePart from '../FlashSalePart'
import CategoryPart from '../CategoryPart'
import BestSellPart from '../BestSellPart'
import MusicPart from '../components/MusicPart'
import OurProductPart from '../OurProductPart'
import NewArrivalPart from '../NewArrivalPart'
import DelivarPart from '../DelivarPart'

const Home = () => {
  return (
    <>
      <Banner></Banner>
            <FlashSalePart></FlashSalePart>
            <CategoryPart></CategoryPart>
            <BestSellPart></BestSellPart>
            <MusicPart></MusicPart>
            <OurProductPart></OurProductPart>
            <NewArrivalPart></NewArrivalPart>
            <DelivarPart></DelivarPart>
    </>
  )
}

export default Home
