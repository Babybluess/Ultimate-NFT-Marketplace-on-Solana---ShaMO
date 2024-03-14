import { Banner, Navbar, TrendingNFT, Marketplace, AIGen, Airdrop, AISupport, NFTLending, Footer } from '@/components';
import React from 'react'

function HomePage() {
  return (
     <div className=" w-full z-20 justify-center items-center flex flex-col ">
        <Navbar />
        <Banner />
        <TrendingNFT />
        <Marketplace />
        <AIGen />
        <Airdrop />
        <AISupport />
        <NFTLending />
        <Footer />
     </div>
  );
}

export default HomePage;