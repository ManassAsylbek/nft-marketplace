import React, {useState} from 'react';
import img from "../../assets/createAccount/wallet.svg";
import avatar from "../../assets/avatar/Avatar123.svg";
import CustomButton from "../../component/button/button";
import {ReactComponent as Plus} from "../../assets/icon/Plus.svg";
import {ReactComponent as Copy} from "../../assets/icon/Copy.svg";
import {ReactComponent as Globe} from "../../assets/icon/Globe.svg";
import {ReactComponent as DiscordLogo} from "../../assets/icon/DiscordLogo.svg";
import {ReactComponent as YoutubeLogo} from "../../assets/icon/YoutubeLogo.svg";
import {ReactComponent as TwitterLogo} from "../../assets/icon/TwitterLogo.svg";
import {ReactComponent as InstagramLogo} from "../../assets/icon/InstagramLogo.svg";
import DiscoverCard from "../../component/DiscoverMoreNft/DiscoverCard";

const ArtistPage = () => {

    const [choose, setChoose] = useState(1)

    return (
        <div className="bg-black">
            <div className="object-cover  overflow-hidden flex justify-center items-center h-[280px]">
                <img
                    src={"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-17@1x.png"}
                    className="w-[100vw] object-cover h-[280px]" alt=""/>
            </div>
            <div className="marginCenter max-w-[345px] md:max-w-[760px] xl:max-w-[1110px] px-[15px] md:px-[30px] py-[40px]
                            relative">
                <div className="absolute left-[113px] hoverAnimation top-[-70px] md:left-[30px] w-[120px]">
                    <img src={avatar} alt=""/>
                </div>
                <div className="pt-[30px] flex flex-col gap-[30px] xl:flex-row xl:justify-between">
                    <div className="secondTitle ">Animakid</div>
                    <div className="flex flex-col md:flex-row gap-[20px] text-white">
                        <CustomButton
                            style={"w-[315px] md:w-[186px] h-[60px] hoverAnimation rounded-[20px] bg-purple flex" +
                                " justify-center items-center gap-x-[10px] "}>
                            <Copy className="w-[22px] fill-white"/>0xc0E3...B79C</CustomButton>
                        <CustomButton
                            style={"w-[315px] md:w-[148px] h-[60px] hoverAnimation rounded-[20px] flex " +
                                "border-purple border-2 bg-gray-dark justify-center items-center gap-x-[10px] "}>
                            <Plus className="w-[22px] fill-purple"/>Follow</CustomButton>
                    </div>
                </div>
                <div className="grid gap-[30px]">
                    <div
                        className="grid grid-cols-3 gap-[30px]  md:w-[510px] pt-[30px] xl:pt-[15px] max-w-[600px] text-white">
                        <div>
                            <div
                                className="font-mono font-bold text-[22px]  leading-[35.2px] xl:text-[28px] xl:leading-[39px]">240k+
                            </div>
                            <div className="text">Volume</div>
                        </div>
                        <div>
                            <div
                                className="font-mono font-bold text-[22px]  leading-[35.2px] xl:text-[28px] xl:leading-[39px]">50+
                            </div>
                            <div className="text">Nfts Sold</div>
                        </div>
                        <div>
                            <div
                                className="font-mono font-bold text-[22px]  leading-[35.2px] xl:text-[28px] xl:leading-[39px]">3000+
                            </div>
                            <div className="text ">Followers</div>
                        </div>
                    </div>
                    <div>
                        <div className="grid gap-[10px] font-mono text-[16px] leading-[22.4px] xl:text-[22px]
                        xl:leading-[35px] text-gray">Bio
                        </div>
                        <div className="text text-white">The Internet's Friendliest Designer Kid.</div>
                    </div>
                    <div>
                        <div className="grid gap-[10px] font-mono text-[16px] leading-[22.4px] xl:text-[22px]
                        xl:leading-[35px] text-gray">Links
                        </div>
                        <div className="flex gap-[10px] ">
                            <Globe className="xl:w-[32px] fill-gray"/>
                            <DiscordLogo className="xl:w-[32px] fill-gray"/>
                            <YoutubeLogo className="xl:w-[32px] fill-gray"/>
                            <TwitterLogo className="xl:w-[32px]"/>
                            <InstagramLogo className="xl:w-[32px] fill-gray"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-gray border-t ">
                <div className="marginCenter max-w-[345px] md:max-w-[760px] xl:max-w-[1110px] px-[15px] md:px-[30px] ">
                    <div className="grid grid-cols-3 h-[60px] items-center justify-items-center">
                        <div
                            className={`text font-bold cursor-pointer ${1 === choose ? "selectButton" : "unselectButton"}`}
                            onClick={() => setChoose(1)}>
                            <div>Created</div>
                            <div className="px-[10px] font-sans  text-[16px] leading-[22.4px] py-[5px]
                             hidden bg-gray-dark rounded-[20px] xl:flex">302</div>
                        </div>
                        <div
                            className={`text font-bold cursor-pointer ${2 === choose ? "selectButton" : "unselectButton"}`}
                            onClick={() => setChoose(2)}>
                            <div>Owned</div>
                            <div className="px-[10px] font-sans  text-[16px] leading-[22.4px] py-[5px]
                             hidden bg-gray-dark rounded-[20px] xl:flex">84</div>
                        </div>
                        <div
                            className={`text font-bold cursor-pointer ${3 === choose ? "selectButton" : "unselectButton"}`}
                            onClick={() => setChoose(3)}>
                            <div>Collection</div>
                            <div className="px-[10px] font-sans  text-[16px] leading-[22.4px] py-[5px]
                             hidden bg-gray-dark rounded-[20px] xl:flex">4</div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container grid md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
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

export default ArtistPage;