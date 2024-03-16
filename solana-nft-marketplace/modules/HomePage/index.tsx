"use client";
import { Banner, Navbar, TrendingNFT, Marketplace, AIGen, Airdrop, AISupport, Footer, Bidding } from '@/components';
import React from 'react'

function HomePage() {
  return (
    <div className=' w-full z-20 justify-center items-center flex flex-col '>
        <Navbar/>
        <Banner/>
        <TrendingNFT/>
        <Marketplace/>
        <Bidding/>
        <AIGen/>
        <Airdrop/>
        <AISupport/>
        <Footer/>
    </div>
  )
}

export default HomePage;