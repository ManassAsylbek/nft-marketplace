import React from 'react';
import NFTImg from "../../assets/img/Image Placeholder.svg";
import avatar from "../../assets/avatar/Avatar14.svg";
import {useNavigate} from "react-router-dom";

const DiscoverCard = () => {
    const navigate = useNavigate()
    return (
        <div className="hoverAnimation rounded-[20px] overflow-hidden"
             onClick={()=>navigate("/nft-page")}>
            <img src={NFTImg} className="w-[100%]" alt=""/>
            <div className="p-[20px] bg-gray-dark rounded-b-[20px]">
                <div className="font-sans text-[22px] font-bold leading-[31px] pb-[10px]">
                    Space Walking
                </div>
                <div className="flex gap-[10px]">
                    <img className="w-[24px]" src={avatar} alt=""/>
                    <span>AnimeKid</span>
                </div>
                <div className="flex justify-between gap-[21px] pt-[25px]">
                    <div className="">
                        <div className="font-sans  text-[16px] leading-[22.4px] text-gray">Price</div>
                        <div className="font-mono text-base leading-[22.4px]">1.63 ETH</div>
                    </div>
                    <div className="">
                        <div className="font-sans  text-[16px] leading-[22.4px] text-gray">Highest Bid</div>
                        <div className="font-mono text-base leading-[22.4px]">0.33 wETH</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DiscoverCard;