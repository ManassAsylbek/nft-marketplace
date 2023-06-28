import React from 'react';
import NFTImg from '../../assets/img/Image Placeholder.svg'
import rocket from '../../assets/icon/RocketLaunch.svg'
import {ReactComponent as Rocket} from "../../assets/icon/RocketLaunch.svg";
import avatar from '../../assets/avatar/Avatar14.svg'
import CustomButton from "../button/button";

const HeroSection = () => {
    return (
        <div className="container py-[40px]   text-white md:py-[80px]  flex flex-col md:flex-row justify-center gap-[30px]">
            <div className="w-[315px] md:w-[330px] xl:w-[510px]">
                <h1 className="title">Discover Digital Art & Collect
                    NFTs</h1>
                <p className="text pb-[20px] xl:pb-[30px] ">
                    NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT
                    artists.
                </p>
                <CustomButton style={"w-[315px] md:w-[224px] h-[60px] hoverAnimation rounded-[20px] bg-purple flex" +
                    " justify-center items-center gap-x-[10px] "}>
                    <Rocket className="w-[22px] fill-white" /> Get Started</CustomButton>
                <div className={"grid grid-cols-3 gap-[30px] pt-[20px] xl:pt-[30px]"}>
                    <div>
                        <div className="font-mono font-bold text-[22px]  leading-[35.2px] xl:text-[28px] xl:leading-[39px]">240k+</div>
                        <div className="text pb-[20px] xl:pb-[30px]">Total Sale</div>
                    </div>
                    <div>
                        <div className="font-mono font-bold text-[22px]  leading-[35.2px] xl:text-[28px] xl:leading-[39px]">100k+</div>
                        <div className="text pb-[20px] xl:pb-[30px]">Auctions</div>
                    </div>
                    <div>
                        <div className="font-mono font-bold text-[22px]  leading-[35.2px] xl:text-[28px] xl:leading-[39px]">240k+</div>
                        <div className="text pb-[20px] xl:pb-[30px]">Artists</div>
                    </div>
                </div>
            </div>
            <div className="w-[315px] md:w-[330px] xl:w-[510px] hoverAnimation">
                <img src={NFTImg} className="w-[100%]" alt=""/>
                <div className="p-[20px] bg-gray-dark rounded-b-[20px]">
                    <div className="font-sans text-[22px] font-bold leading-[31px] pb-[10px]">
                        Space Walking
                    </div>
                    <div className="flex gap-[10px]">
                        <img className="w-[24px]" src={avatar} alt=""/>
                        <span>AnimeKid</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;