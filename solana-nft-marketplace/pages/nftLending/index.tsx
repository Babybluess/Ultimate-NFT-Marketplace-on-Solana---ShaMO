import React, { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection, clusterApiUrl, Keypair, PublicKey } from "@solana/web3.js";
import { Metaplex, keypairIdentity } from "@metaplex-foundation/js";

function index() {
    const { publicKey } = useWallet();
    const [nfts, setNFTs] = useState<any[]>([]);
    const [connection, setConnection] = useState<Connection | null>(null);
    const keypair = Keypair.generate();

    useEffect(() => {
        const fetchNFTs = async () => {
            if (!connection || !publicKey) return;

            try {
                const metaplex = new Metaplex(connection);
                metaplex.use(keypairIdentity(keypair));

                const owner = new PublicKey(publicKey.toBase58());
                const allNFTs = await metaplex.nfts().findAllByOwner({ owner });
                setNFTs(allNFTs);
            } catch (error) {
                console.error("Error fetching NFTs:", error);
            }
        };

        if (publicKey && connection) {
            fetchNFTs();
        }
    }, [connection, publicKey]);

    useEffect(() => {
        const newConnection = new Connection('devnet');
        setConnection(newConnection);
    })

    return (
        <div>
            <h2>My NFTs</h2>
            <ul>
                {nfts.map((nft, index) => (
                    <li key={index}>{nft}</li>
                ))}
            </ul>
        </div>
    );
};

export default index;