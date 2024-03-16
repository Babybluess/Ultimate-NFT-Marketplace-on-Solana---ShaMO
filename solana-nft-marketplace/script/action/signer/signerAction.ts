export const updateAddress = (address: string) => (
    {
        type : "UPDATEADDRESS",
        address_Signer: address
    }
)

export const updateNFTs = (nfts: any[]) => (
    {
        type : "UPDATENFTS",
        nfts_Signer: nfts
    }
)

