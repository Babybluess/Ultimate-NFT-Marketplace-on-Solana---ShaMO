import React, { useState } from "react";
import Link from "next/link";

function NFTModel(props) {
   const [nft, setNFT] = useState(props.nfts);

   return (
      <div
         className={` ${nft.imgNFT == undefined ? "w-[50%]" : "w-[25%]"} shadow-inner shadow-indigo-500 flex flex-col justify-center items-center border-2 border-[#5B3BA8] rounded-md bg-[#28262F] relative`}
      >
         <div className=" w-[30%] text-center absolute left-0 top-0 z-40 text-white font-medium rounded-br-xl bg-[#5C3CA8]">
            <p>{nft.type}</p>
         </div>
         <div
            className={` ${nft.imgNFT == undefined ? " px-0 w-[70%] " : ""} h-[60vh] flex flex-col text-white gap-2 p-5 rounded-t-xl `}
         >
            <div className=" w-full h-[65%] rounded-t-xl">
               {nft.type == "Video" ? (
                  <video
                     className=" rounded-t-xl h-full w-full object-fill"
                     autoPlay={true}
                     loop
                     controls={false}
                     muted
                  >
                     <source
                        src={nft.imgNFT}
                        className=" w-full h-full"
                        type="video/mp4"
                     />
                  </video>
               ) : (
                  <img
                     className=" w-full h-full rounded-t-xl object-cover"
                     src={nft.imgNFT}
                  />
               )}
            </div>
            <p className=" text-xl font-semibold">{nft.nameNFT}</p>
            <div className=" w-full flex gap-2">
               <div className=" w-6 h-6">
                  <img
                     className=" h-full w-full object-cover rounded-full"
                     src={nft.imgOwner}
                  />
               </div>
               <p>{nft.nameOwner}</p>
            </div>
            <p className=" text-gray-500 font-medium">Price for Sell:</p>
            <div className=" w-full flex justify-between items-center">
               <div className=" flex w-full gap-1">
                  <div className=" w-5 h-5">
                     <img src="./images/sponsorIMG/ethereum.png" />
                  </div>
                  <p>{nft.price}</p>
               </div>
               <Link
                  href={{ pathname:`/${nft.nameNFT}`}}
                  className={` ${nft.imgNFT == undefined ? " w-[90%] " : "w-[60%]"} p-1 bg-[#593F9F] rounded-tr-xl rounded-bl-xl`}
               >
                  See Detail &#8594;
               </Link>
            </div>
         </div>
      </div>
   );
}

export default NFTModel;
