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
import Home from './Pages/Home';

function RootLayOut() {
    return (
        <>
            <Header></Header>
            <NavBar></NavBar>
            <Outlet 
              
            />
            
            <Footer></Footer>
        </>
    );
}

export default RootLayOut
