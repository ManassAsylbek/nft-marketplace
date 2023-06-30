import React, {useEffect, useState} from 'react';

import {ReactComponent as Search} from "../../assets/icon/MagnifyingGlass.svg";
import DiscoverCard from "../../component/DiscoverMoreNft/DiscoverCard";

const MarketPlace = () => {

    const [choose, setChoose] = useState(1)

    useEffect(() => {
        const targetElement = document.getElementById('scroll');
        if (targetElement) {
            targetElement.scrollIntoView({behavior: 'smooth'});
        }

    }, []);

    return (
        <div className="bg-black" id="scroll">
            <div className="containerMushroom py-[60px] flex flex-col gap-[30px]">
                <div>
                    <h3 className="secondTitle">Browse Marketplace</h3>
                    <div className="text  pt-[10px]">Browse through more than 50k NFTs on the NFT Marketplace.</div>
                </div>
                <div className="h-[62px] rounded-[20px] px-[20px] border border-gray flex items-center">
                    <input type="text"
                           className="text-gray w-full bg-transparent py-[16px] rounded-[20px] outline-none"
                           placeholder="Search your favourite NFTs"/>
                    <Search className = "w-[24px] fill-white"/>
                </div>
            </div>

            <div className="border-gray border-t ">
                <div className="marginCenter max-w-[345px] md:max-w-[760px] xl:max-w-[1110px] px-[15px] md:px-[30px] ">
                    <div className="grid grid-cols-2 h-[60px] items-center justify-items-center">
                        <div
                            className={`text font-bold cursor-pointer ${1 === choose ? "selectButton" : "unselectButton"}`}
                            onClick={() => setChoose(1)}>
                            <div>Nfts</div>
                            <div className="px-[10px] font-sans  text-[16px] leading-[22.4px] py-[5px]
                             hidden bg-gray-dark rounded-[20px] md:flex">302</div>
                        </div>
                        <div
                            className={`text font-bold cursor-pointer ${2 === choose ? "selectButton" : "unselectButton"}`}
                            onClick={() => setChoose(2)}>
                            <div>Collections</div>
                            <div className="px-[10px] font-sans  text-[16px] leading-[22.4px] py-[5px]
                             hidden bg-gray-dark rounded-[20px] md:flex">64</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="containerMushroom py-[60px] grid md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
                <DiscoverCard/>
                <DiscoverCard/>
                <DiscoverCard/>
                <DiscoverCard/>
                <DiscoverCard/>
                <DiscoverCard/>
            </div>
        </div>
    );
};

export default MarketPlace;