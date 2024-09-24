import React, { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import pfImage from '../assets/pf.jpg';

export const Hero = () => {
    const { publicKey } = useWallet();
    const nfts = ['NFTs','Tokens']

    return (
        <div className="w-[90%] bg-slate-950 text-white rounded-xl mx-auto p-5">
    <div className="text-wrap mt-5 text-center">
        {publicKey ? (
            <div className="container mx-auto flex flex-col justify-center items-center mt-10">
                <a href="/">
                    <img src={pfImage} alt="pf" className="w-[100px] h-auto rounded-full" />
                </a>
                <p>{publicKey.toBase58()}</p>
                <hr/>
                <div className='flex flex-row justify-between items-center px-6'>
                    <p>
                        {nfts[0] + nfts[1]}
                    </p>

                </div>
            </div>
        ) : (
            <p>Connect Wallet</p>
        )}
    </div>
</div>
    );
};
