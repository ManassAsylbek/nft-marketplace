import React from 'react';
import {ReactComponent as Logo} from "../../assets/icon/Storefront.svg";
import {ReactComponent as DiscordLogo} from "../../assets/icon/DiscordLogo.svg";
import {ReactComponent as YoutubeLogo} from "../../assets/icon/YoutubeLogo.svg";
import {ReactComponent as TwitterLogo} from "../../assets/icon/TwitterLogo.svg";
import {ReactComponent as InstagramLogo} from "../../assets/icon/InstagramLogo.svg";
import CustomButton from "../button/button";


const Footer = () => {
    return (
        <div className="containerFooter grid gap-[30px] md:gap-[49px]">
            <div className="flex flex-col xl:flex-row xl:justify-between gap-[30px]" >
                <div className="w-[327px] pr-[84px] grid gap-[30px]">
                    <div className="flex gap-x-4 items-center">
                        <Logo className=" fill-purple accent-purple w-8 xl:w-8"/>
                        <span className="font-mono text-[20px]  xl:text-xl ">NFT Marketplace</span>
                    </div>
                    <div className="font-sans text-[16px] leading-[22.4px] text-[#cccccc]">NFT marketplace UI created with
                        Anima for Figma.
                    </div>
                    <div>
                        <div className="font-sans text-[#cccccc] text-[16px] leading-[22.4px] mb-[15px]">Join our community</div>
                        <div className="flex gap-[10px] ">
                            <DiscordLogo className="w-[32px] fill-gray"/>
                            <YoutubeLogo className="w-[32px] fill-gray"/>
                            <TwitterLogo className="w-[32px]"/>
                            <InstagramLogo className="w-[32px] fill-gray"/>
                        </div>
                    </div>

                </div>
                <div className="xl:w-[240px] grid gap-[20px]">
                    <div className="font-mono text-[22px] leading-[35.2px] font-bold">Explorer</div>
                    <div className="font-sans text-[#cccccc] text-[16px] leading-[22.4px] ">Marketplace</div>
                    <div className="font-sans text-[#cccccc] text-[16px] leading-[22.4px]">Rankings</div>
                    <div className="font-sans text-[#cccccc] text-[16px] leading-[22.4px]">Connect a wallet</div>
                </div>
                <div className="xl:w-[420px] grid gap-[26px]">
                    <div className="font-mono text-[22px] leading-[35.2px] font-bold">Join Our Weekly Digest</div>
                    <div className="font-sans text-[#cccccc] text-[16px] leading-[22.4px] xl:w-[330px]">Get exclusive promotions & updates straight to your inbox.</div>
                    <div className="grid gap-[16px] relative md:w-[420px]">
                        <input type="text"
                               className="text-gray-dark w-full h-[46px] xl:h-[60px] px-[20px] py-[16px] rounded-[20px] outline-none"
                               placeholder="Enter Your Email Address "/>
                        <CustomButton
                            style={"w-full h-[46px] xl:h-[60px] md:w-[180px] md:absolute md:right-0 hoverAnimation rounded-[20px] bg-purple flex" +
                                " justify-center items-center gap-x-[10px] "}>Subscribe</CustomButton>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray pt-[20px] text-[#cccccc]">Ⓒ NFT Market. Use this template freely.</div>
        </div>
    );
};

export default Footer;