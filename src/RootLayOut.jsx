import React, { useState } from 'react'
import { Outlet } from "react-router";
import Header from './Header'
import NavBar from './NavBar'
import Banner from './Banner'
import FlashSalePart from './FlashSalePart'
import CategoryPart from './CategoryPart'
import BestSellPart from './BestSellPart'
import MusicPart from './components/MusicPart'
import OurProductPart from './OurProductPart'
import NewArrivalPart from './NewArrivalPart'
import DelivarPart from './DelivarPart'
import Footer from './Footer'

function RootLayOut() {
    return (
        <>
            <Header></Header>
            <NavBar></NavBar>
            <Banner></Banner>
            <FlashSalePart></FlashSalePart>
            <CategoryPart></CategoryPart>
            <BestSellPart></BestSellPart>
            <MusicPart></MusicPart>
            <OurProductPart></OurProductPart>
            <NewArrivalPart></NewArrivalPart>
            <DelivarPart></DelivarPart>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
}

export default RootLayOut
