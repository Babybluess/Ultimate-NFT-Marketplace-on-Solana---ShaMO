import React from "react";
import Link from "next/link";

function NFTLending() {
   return (
      <div
         id="NFTLending"
         className=" w-full justify-center items-center flex flex-col gap-10 border-x-4 border-[#F7F7F9] z-30 text-white px-10 py-5"
      >
         <div className=" w-full flex-col flex gap-2 text-white">
            <p className=" text-4xl font-semibold">NFT Lending</p>
            <p className=" text-sm text-fuchsia-600">
               Use your NFTs as collateral to borrow funds or other NFTs from lenders.
            </p>
         </div>
         <div className="rounded-lg border bg-[#142120] text-card-foreground shadow-sm w-full p-5 mx-auto md:max-w-lg justify-center items-center flex-col flex">
            <div className=" w-full p-6 pt-0 flex flex-row space-x-2 relative">
               <input
                  className=" w-[70%] px-2 bg-transparent border-[1px] border-white rounded-lg placeholder:text-gray-300"
                  type="text"
                  placeholder="How much SOL do you need"
                  required
               />
               <button
                  className="cursor-pointer hover:bg-[#2C282F] text-white whitespace-nowrap inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-[30%]"
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:Rl6ula:"
                  data-state="closed"
               >
                    {/* Dbt link chuan ko, fix ho nhe */}
                    <Link
                        href={{ pathname: `/nftLending`}}
                    >
                        Request Loan
                    </Link>
               </button>
            </div>
         </div>
      </div>
   );
}

export default NFTLending;
