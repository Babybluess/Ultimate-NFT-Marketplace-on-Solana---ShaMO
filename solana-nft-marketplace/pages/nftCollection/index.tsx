import React from "react";
import { useRouter } from 'next/router';
import { NFTModel, UpdatedIMG } from "@/components";

function index() {
   const router = useRouter()

   const backClick = () =>{
      router.back()
     } 

     const nfts = [
      {
          id: 0,
          imgNFT: "https://i.pinimg.com/564x/b7/a8/dc/b7a8dc1fd58a1813941a13f6e1f96911.jpg",
          nameNFT: "Mask Girl",
          imgOwner: "https://i.pinimg.com/236x/ab/90/d9/ab90d9385c969cf62c6e009810dfb849.jpg",
          nameOwner: "Poscai",
          type: "Art",
          price: "29.2",
          isVideo: false
      },
      {
          id: 1,
          imgNFT: "https://i.pinimg.com/236x/b4/9c/2e/b49c2e403209ea58064264b17655dc14.jpg",
          nameNFT: "Inspect Girl",
          imgOwner: "https://i.pinimg.com/236x/10/b1/d0/10b1d0c15f2defa69f717b1aa52b9cf4.jpg",
          nameOwner: "Miek",
          type: "Comic",
          price: "38.2",
          isVideo: false
      },
      {
          id: 2,
          imgNFT: "./video/galaxy.mp4",
          nameNFT: "Abstract Wave",
          imgOwner: "https://i.pinimg.com/236x/54/26/7a/54267af70300dc246475a073d037c93a.jpg",
          nameOwner: "Lykie",
          type: "Video",
          price: "12.7",
          isVideo: true
      },
      {
          id: 3,
          imgNFT: "./images/bannerIMG/goldenSnake.png",
          nameNFT: "Golden Snake",
          imgOwner: "https://i.pinimg.com/236x/54/26/7a/54267af70300dc246475a073d037c93a.jpg",
          nameOwner: "Lykie",
          type: "Abstract",
          price: "12.7",
          isVideo: true
      },
      {
          id: 4,
          imgNFT: "./images/bannerIMG/redCap.png",
          nameNFT: "Red Cap",
          imgOwner: "https://i.pinimg.com/236x/54/26/7a/54267af70300dc246475a073d037c93a.jpg",
          nameOwner: "Lykie",
          type: "Gorilla",
          price: "12.7",
          isVideo: true
      },
      {
          id: 5,
          imgNFT: "./images/bannerIMG/CHRISTIAN.png",
          nameNFT: "CHRISTIAN",
          imgOwner: "https://i.pinimg.com/236x/54/26/7a/54267af70300dc246475a073d037c93a.jpg",
          nameOwner: "Lykie",
          type: "Gorilla",
          price: "12.7",
          isVideo: true
      }
  ]


  const address = "J5HxijcGXuzj9K7ynxenKjrUeekDewy7HYW3q3jx5mci"
  const formatAddress = `${address.substring(
   0,
   6
 )}...${address.substring(36)}`

   return (
      <div className=' w-screen min-h-screen flex flex-col bg-white'>
        <p onClick={() => backClick()} className=' absolute left-5 top-5 hover:-translate-x-2  w-[40px] h-[40px] bg-[#E2EAB0] rounded-xl flex justify-center items-center'>&#8592;</p>
        <div className=' w-full h-[500px] bg-white' >
            <UpdatedIMG name={"Background"}/>
            <div className=' flex w-full h-[250px] max-sm:pt-10 gap-2 items-end px-[10%] -translate-y-40'>
              <UpdatedIMG name={"Avatar"}/>
              <div className=' h-[50px] flex justify-center items-center rounded-xl bg-gradient-to-br from-[#E55D87] to-[#5FC3E4]'>
                  <span className=' text-black font-bold text-3xl max-sm:text-sm px-[10px] flex items-end'>{formatAddress}</span>
              </div>
            </div>
        </div>
        <div className='w-full px-[5%] py-[5%] flex flex-col gap-10 justify-center items-center bg-white'>
          <div className=' text-black font-semibold w-[100%] justify-between flex items-center'>
            <span className='text-3xl' >My Collection</span>
          </div>
          <div className='w-full flex flex-wrap px-20 gap-10 justify-center items-center'>
               {
                  nfts.map((e, index) => (
                     <NFTModel className=" w-[20%]" key={index} nfts={e} />
                  ))
               }
          </div>
        </div>
      </div>
   );
}

export default index;
