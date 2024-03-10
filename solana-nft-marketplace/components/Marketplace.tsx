import React, { useState } from "react";
import styled from "styled-components";
import NFTModel from "./modelUtils/NFTModel";

function Marketplace() {
   const [isChoose, setChoose] = useState("");
   const [nft, setNFT] = useState<any>([]);

   const changeNFT = (type: string) => {
      setNFT(nfts.filter((e: any) => e.type == type));
      setChoose(type);
   };

   const nfts = [
      {
         id: 0,
         imgNFT: "./images/bannerIMG/CHRISTIAN.png",
         nameNFT: "Mask Girl",
         imgOwner:
            "https://i.pinimg.com/236x/ab/90/d9/ab90d9385c969cf62c6e009810dfb849.jpg",
         nameOwner: "Poscai",
         type: "Art",
         price: "29.2",
         isVideo: false,
      },
      {
         id: 1,
         imgNFT: "./images/bannerIMG/EvijanWatson.png",
         nameNFT: "Inspect Girl",
         imgOwner:
            "https://i.pinimg.com/236x/10/b1/d0/10b1d0c15f2defa69f717b1aa52b9cf4.jpg",
         nameOwner: "Miek",
         type: "Comic",
         price: "38.2",
         isVideo: false,
      },
      {
         id: 2,
         imgNFT: "./video/galaxy.mp4",
         nameNFT: "Abstract Wave",
         imgOwner:
            "https://i.pinimg.com/236x/54/26/7a/54267af70300dc246475a073d037c93a.jpg",
         nameOwner: "Lykie",
         type: "Video",
         price: "12.7",
         isVideo: true,
      },
      {
         id: 3,
         imgNFT: "./images/bannerIMG/goldenSnake.png",
         nameNFT: "Golden Snake",
         imgOwner:
            "https://i.pinimg.com/236x/54/26/7a/54267af70300dc246475a073d037c93a.jpg",
         nameOwner: "Lykie",
         type: "Abstract",
         price: "12.7",
         isVideo: true,
      },
      {
         id: 4,
         imgNFT: "./images/bannerIMG/redCap.png",
         nameNFT: "Red Cap",
         imgOwner:
            "https://i.pinimg.com/236x/54/26/7a/54267af70300dc246475a073d037c93a.jpg",
         nameOwner: "Lykie",
         type: "Gorilla",
         price: "12.7",
         isVideo: true,
      },
   ];

   return (
      <div
         id="Marketplace"
         className=" w-full px-10 py-5 border-x-4 border-[#F7F7F9] z-30 flex flex-col gap-10 justify-center items-center text-white"
      >
         <div className=" w-full flex justify-between">
            <div className="flex w-[35%] justify-center items-center">
               <p className=" text-3xl font-bold">POPULAR COLLECTION NFT DIGITAL ART</p>
               <div className=" w-[150px] h-[100px] justify-start flex items-start animate-pulse">
                  <img
                     src="/images/Uranus_Crypto_Card_-_Rarible___OpenSea-removebg-preview.png"
                     alt=""
                     className=" object-cover"
                  />
               </div>
            </div>
            <div className=" w-[30%]">
               <p className=" py-5 text-gray-300">
                  We have some of the most popular digital assets that can be recommended
                  for you, which you also get for your new collection.
               </p>
               <button className=" text-violet-500">See detail &#8594;</button>
            </div>
         </div>
         <div className=" justify-start flex w-[100%]">
            <div className=" flex gap-5">
               <FilterType
                  onClick={() => changeNFT("All")}
                  className={` ${isChoose == "All" ? " bg-[#825CE8] text-white " : "border-[#825CE8] text-[#825CE8] "}`}
               >
                  All
               </FilterType>
               <FilterType
                  onClick={() => changeNFT("Art")}
                  className={` ${isChoose == "Art" ? " bg-[#825CE8] text-white " : "border-[#825CE8] text-[#825CE8] "}`}
               >
                  Art
               </FilterType>
               <FilterType
                  onClick={() => changeNFT("Abstract")}
                  className={` ${isChoose == "Abstract" ? " bg-[#825CE8] text-white " : "border-[#825CE8] text-[#825CE8] "}`}
               >
                  Abstract
               </FilterType>
               <FilterType
                  onClick={() => changeNFT("Gorrilla")}
                  className={` ${isChoose == "Gorrilla" ? " bg-[#825CE8] text-white " : "border-[#825CE8] text-[#825CE8] "}`}
               >
                  Gorilla
               </FilterType>
               <FilterType
                  onClick={() => changeNFT("Monkey")}
                  className={` ${isChoose == "Monkey" ? " bg-[#825CE8] text-white " : "border-[#825CE8] text-[#825CE8] "}`}
               >
                  Monkey
               </FilterType>
               <FilterType
                  onClick={() => changeNFT("Comic")}
                  className={` ${isChoose == "Comic" ? " bg-[#825CE8] text-white " : "border-[#825CE8] text-[#825CE8] "}`}
               >
                  Comic
               </FilterType>
               <FilterType
                  onClick={() => changeNFT("Video")}
                  className={` ${isChoose == "Video" ? " bg-[#825CE8] text-white " : "border-[#825CE8] text-[#825CE8] "}`}
               >
                  Video
               </FilterType>
            </div>
         </div>
         <div className=" w-full flex flex-wrap gap-[50px] justify-center items-center">
            {nfts.map((e, index) => (
               <NFTModel key={index} nfts={e} />
            ))}
         </div>
      </div>
   );
}

export default Marketplace;

const FilterType = styled.div`
   padding: 0.5rem;
   border-width: 2px;
   border-color: #aaa1b6;
   border-radius: 0.75rem;
   cursor: pointer;
`;
