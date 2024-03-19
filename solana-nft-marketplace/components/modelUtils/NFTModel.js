"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useWallet } from "@solana/wallet-adapter-react";
import { sellNFT } from "@/role/sellNFT/sellNFT";
import { Network, ShyftSdk } from "@shyft-to/js";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import unlistNFT from "@/role/unlistNFT/unlistNFT";
import { useSelector } from "react-redux";
//import { requestLoan } from "@/role/requestLoan/requestLoan";

function NFTModel(props) {
   const [nft, setNFT] = useState(props.nfts);
   const [isSell, setSell] = useState(props.isSell);
   const [collateral, setCollateral] = useState(props.collateral);
   const [price, setPrice] = useState(0);
   const [balance, setBalance] = useState();
   const router = useRouter();
   const { publicKey } = useWallet();
   const [addressWallet, setAddress] = useState();
   const nftMarketList = useSelector((state) => state.marketReducer.listAddressID);

   const listNFT = (e) => {
      sellNFT(Network.Devnet, e, Number(price), addressWallet);
      setTimeout(() => {
         toast.success("🦄 It is successfull sold NFT!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
         });
      }, 15000);
   };

   const cancelSelling = () => {
      unlistNFT(Network.Devnet, nft.list_state, addressWallet);
      setTimeout(() => {
         toast.success("🦄 Cancel sold NFT successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
         });
      }, 15000);
   };

   const shyft = new ShyftSdk({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      network: Network.Devnet,
   });

   const getBalance = async () => {
      const tx = await shyft.wallet.getBalance({ wallet: addressWallet });
      setBalance(tx);
   };
   
   getBalance();

   useEffect(() => {
      if (publicKey !== null) {
         setAddress(publicKey.toBase58());
       }
   }, [addressWallet]);

   console.log("var", nftMarketList.includes(nft.addressID));

   return (
      <div
         className={` ${nft.img == undefined ? "w-[55%]" : "w-[25%]"} shadow-inner shadow-indigo-500 flex flex-col justify-center items-center border-2 border-[#5B3BA8] rounded-md bg-[#28262F] relative`}
      >
         <div className=" w-[30%] text-center absolute left-0 top-0 z-40 text-white font-medium rounded-br-xl bg-[#5C3CA8]">
            <p>{nft.type}</p>
         </div>
         <div
            className={` ${nft.img == undefined ? " px-0 w-[70%] " : "w-full"} h-[60vh] flex flex-col text-white gap-2 p-5 rounded-t-xl `}
         >
            <div className=" w-full h-[65%] rounded-t-xl flex justify-center items-center">
               {nft.type == "Video" ? (
                  <video
                     className=" rounded-t-xl h-full w-full object-fill"
                     autoPlay={true}
                     loop
                     controls={false}
                     muted
                  >
                     <source src={nft.img} className=" w-full h-full" type="video/mp4" />
                  </video>
               ) : (
                  <img
                     className=" w-full h-full rounded-t-xl object-cover"
                     src={nft.img}
                  />
               )}
            </div>
            <p className=" text-xl font-semibold">{nft.name}</p>
            <div className=" w-full flex gap-2">
               <div className=" w-6 h-6">
                  <img
                     className=" h-full w-full object-cover rounded-full"
                     src={
                        "https://ivory-necessary-cougar-154.mypinata.cloud/ipfs/QmTmVBxUE8xZcZ9n1jFRXhsPp4okaPMBPfRhxLuysXftP7"
                     }
                  />
               </div>
               <p>{`${nft.owner.substring(0, 6)}...${nft.owner.substring(36)}`}</p>
            </div>
            <p className=" text-gray-500 font-medium">Price for Sell:</p>
            <div className=" w-full flex justify-between items-center">
               <div className=" flex w-full gap-1">
                  <div className=" w-5 h-5">
                     <img src="https://ivory-necessary-cougar-154.mypinata.cloud/ipfs/QmdT6BMpmzc1vXvEVzDqVZREzLxkVvoN2S5aerGPEt6m4g" />
                  </div>
                  {isSell == true ? (
                     <input
                        onChange={(e) => setPrice(e.target.value)}
                        className=" text-black w-[50%] rounded-md"
                        type="number"
                     />
                  ) : (
                     <p>{nft.price}</p>
                  )}
               </div>
               {isSell == true ? (
                  <button
                     onClick={() => listNFT(nft.addressID)}
                     className=" w-[60%] p-2  bg-green-500 rounded-xl"
                  >
                     Sell NFT
                  </button>
               ) : (
                  <>
                     {nft.seller == addressWallet &&
                     nftMarketList.includes(nft.addressID) ? (
                        <button
                           onClick={() => cancelSelling()}
                           className=" w-[80%] p-2  bg-red-400 rounded-xl"
                        >
                           Cancel Selling
                        </button>
                     ) : (
                        <Link
                           href={{ pathname: `/nftDetail/${nft.addressID}&${balance}` }}
                           className={` ${nft.imgNFT == undefined ? " w-[90%] " : "w-[60%]"} p-1 bg-[#593F9F] text-center rounded-tr-xl rounded-bl-xl`}
                        >
                           See Detail &#8594;
                        </Link>
                     )}
                  </>
                   )}
            </div>
         </div>
         <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
         />
      </div>
   );
}

export default NFTModel;
