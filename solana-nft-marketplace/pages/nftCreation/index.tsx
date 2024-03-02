import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Select from "react-select";
import { NFTModel } from "@/components";

function index() {
   const [nameNFT, setNameNFT] = useState("");
   const [urlNFT, setUrlNFT] = useState("");
   const [urlNFTLocation, setUrlNFTLocation] = useState("");
   const [typeNFT, setTypeNFT] = useState("");
   const [supplyNFT, setSupplyNFT] = useState("");
   const [descriptionNFT, setDecripstionNFT] = useState("");

   const typeOptions = [
      { value: "Art", label: "Art" },
      { value: "Abstract", label: "Abstract" },
      { value: "Comic", label: "Comic" },
      { value: "Monkey", label: "Monkey" },
      { value: "Video", label: "Video" },
   ];

   const router = useRouter();

   const backClick = () => {
      router.back();
   };

   const updateURL = (e: any) => {
      const image = e.target.files[0];
      const nImage = URL.createObjectURL(e.target.files[0]);
      setUrlNFT(nImage);
      setUrlNFTLocation(image);
   };

   // Function to mint NFT
   const mintNFT = () => {
      toast.success('🦄 It is successfull NFT Minting!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      })
   };

   const nftDefault = [
      {
         id: 0,
         imgNFT: "./images/bannerIMG/redCap.png",
         nameNFT: "",
         imgOwner: "https://i.pinimg.com/236x/54/26/7a/54267af70300dc246475a073d037c93a.jpg",
         nameOwner: "",
         type: "",
         price: "0.0",
         isVideo: false,
      },
   ];

   return (
      <div className="w-full min-h-full flex flex-col justify-center items-center gap-16 py-5 bg-black">
         <div className=" flex justify-start items-center gap-5 w-[90%]">
            <p
               onClick={() => backClick()}
               className=" hover:-translate-x-2  w-[40px] h-[40px] bg-[#E2EAB0] rounded-xl flex justify-center items-center"
            >
               &#8592;
            </p>
            <span className=" text-white font-bold text-3xl">Create NFT Item</span>
         </div>
         <div className=" w-[90%] max-lg:flex-col flex gap-44 max-lg:gap-20">
            <section className=" flex flex-col gap-10">
               <div className=" text-white flex flex-col gap-5">
                  <span className="text-xl font-semibold">Upload your NFT</span>
                  <div className=" w-[350px] h-[350px] gap-1 rounded-lg border-2 border-dotted border-gray-400 bg-gray-800 flex flex-col justify-center items-center">
                     <input
                        onChange={(e) => updateURL(e)}
                        type="file"
                        className=" w-[70%]"
                     ></input>
                     <svg
                        height="32"
                        viewBox="0 0 24 24"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           className=" text-white fill-white"
                           d="m20 6.52897986v12.97202254c0 1.3807119-1.1192881 2.5-2.5 2.5h-11c-1.38071187 0-2.5-1.1192881-2.5-2.5v-15.00000002c0-1.38071188 1.11928813-2.5 2.5-2.5h8.9720225c.1327463-.00841947.2709238.03583949.3815309.14644661l4 4c.1106071.11060712.1548661.24878464.1464466.38153087zm-5-3.52797748h-8.5c-.82842712 0-1.5.67157287-1.5 1.5v15.00000002c0 .8284271.67157288 1.5 1.5 1.5h11c.8284271 0 1.5-.6715729 1.5-1.5v-12.50000002h-3.5c-.2761424 0-.5-.22385763-.5-.5zm1 .70710678v2.29289322h2.2928932zm-4 6.99899764v6.7928932c0 .2761424-.2238576.5-.5.5s-.5-.2238576-.5-.5v-6.7928932l-2.14644661 2.1464466c-.19526215.1952621-.51184463.1952621-.70710678 0-.19526215-.1952622-.19526215-.5118446 0-.7071068l2.99999999-2.99999999c.1952622-.19526215.5118446-.19526215.7071068 0l3 2.99999999c.1952621.1952622.1952621.5118446 0 .7071068-.1952622.1952621-.5118446.1952621-.7071068 0z"
                        />
                     </svg>
                     <span className="text-gray-500">
                        PNG, GIF, WEBP, MP4 or MP3. Max 1GB
                     </span>
                     <span className="text-gray-500">
                        Drop your NFT here or <a className=" text-gray-200">Browse</a>
                     </span>
                  </div>
               </div>
               <div className=" flex flex-col gap-10">
                  <div className=" flex gap-5 max-md:flex-col">
                     <div className=" flex flex-col gap-2">
                        <label htmlFor="" className=" text-gray-300 text-xl">
                           Category
                        </label>
                        <p className="text-gray-600 text-sm">
                           Select the category of your NFT
                        </p>
                        <Select
                           onChange={(e: any) => setTypeNFT(e?.value)}
                           options={typeOptions}
                           placeholder="Choose NFT Type"
                           styles={{
                              control: (base, state) => ({
                                 ...base,
                                 borderColor: state.isFocused ? "grey" : "gray",
                              }),
                           }}
                           className="w-[350px]"
                        />
                     </div>
                  </div>
                  <div className=" flex flex-col gap-2">
                     <label htmlFor="" className=" text-gray-300 text-xl">
                        Name
                     </label>
                     <p className="text-gray-600 text-sm">Enter the name of your NFT</p>
                     <input
                        required
                        onChange={(e) => setNameNFT(e.target.value)}
                        type="text"
                        placeholder="Enter the name of your NFT"
                        className=" text-white bg-transparent border-[1px] px-2 h-[50px] w-[350px] valid:border-[#1a73e8] rounded-md"
                     />
                  </div>
                  <div className=" flex flex-col gap-2">
                     <label htmlFor="" className=" text-gray-300 text-xl">
                        Supply
                     </label>
                     <p className="text-gray-600 text-sm">Enter the supply of your NFT</p>
                     <input
                        required
                        onChange={(e) => setSupplyNFT(e.target.value)}
                        type="text"
                        placeholder="Enter the name of your NFT"
                        className=" text-white bg-transparent border-[1px] px-2 h-[50px] w-[350px] valid:border-[#1a73e8] rounded-md"
                     />
                  </div>
                  <div className=" flex flex-col gap-2">
                     <label htmlFor="" className=" text-gray-300 text-xl">
                        Description
                     </label>
                     <p className="text-gray-600 text-sm">
                        The description will be included on the Item's detail page.
                     </p>
                        <input
                           required
                           type="text"
                           placeholder="Enter details about the product"
                           onChange={(e) => setDecripstionNFT(e.target.value)}
                           className=" text-white bg-transparent break-words border-[1px] px-2 min-h-[150px] valid:border-[#1a73e8] rounded-md"
                      />
                  </div>
               </div>
            </section>
            <section className=" w-[550px] h-[600px] max-sm:w-[450px] rounded-md flex flex-col gap-5 justify-center items-center shadow-inner shadow-indigo-300">
               <NFTModel nfts={nftDefault} />
               <button className='text-white font-semibold text-xl rounded-xl p-3 bg-blue-500' onClick={() => mintNFT()}>Create NFT</button>
            </section>
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

export default index;
