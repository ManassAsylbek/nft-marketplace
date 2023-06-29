import React from 'react';
import img from "../../assets/createAccount/wallet.svg";
import avatar from "../../assets/avatar/Avatar123.svg";
import CustomButton from "../../component/button/button";
import {ReactComponent as Rocket} from "../../assets/icon/RocketLaunch.svg";

const ArtistPage = () => {
    return (
        <div className="bg-black">
            <div className="object-cover  overflow-hidden flex justify-center items-center h-[280px]">
                <img
                    src={"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-17@1x.png"}
                    className="w-[100vw] object-cover h-[280px]" alt=""/>
            </div>
            <div className="marginCenter max-w-[345px] md:max-w-[760px] xl:max-w-[1110px] px-[15px] md:px-[30px] py-[40px]
                            relative">
                <div className="absolute left-[113px] top-[-70px] md:left-[30px] w-[120px]">
                    <img src={avatar} alt=""/>
                </div>
                <div className="pt-[30px] ">
                    <div className="secondTitle ">Animakid</div>
                    <div className="flex flex-col md:flex-row gap-[20px]">
                        <CustomButton
                            style={"w-[315px] md:w-[186px] h-[60px] hoverAnimation rounded-[20px] bg-purple flex" +
                                " justify-center items-center gap-x-[10px] "}>
                            <Rocket className="w-[22px] fill-white"/> Get Started</CustomButton>
                        <CustomButton
                            style={"w-[315px] md:w-[148px] h-[60px] hoverAnimation rounded-[20px] flex " +
                                "border-purple bg-gray-dark justify-center items-center gap-x-[10px] "}>
                            <Rocket className="w-[22px] fill-white"/> Get Started</CustomButton>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-3 gap-[30px] pt-[20px] xl:pt-[30px] max-w-[600px] text-white">
                        <div>
                            <div
                                className="font-mono font-bold text-[22px]  leading-[35.2px] xl:text-[28px] xl:leading-[39px]">240k+
                            </div>
                            <div className="text pb-[20px] xl:pb-[30px]">Volume</div>
                        </div>
                        <div>
                            <div
                                className="font-mono font-bold text-[22px]  leading-[35.2px] xl:text-[28px] xl:leading-[39px]">50+
                            </div>
                            <div className="text pb-[20px] xl:pb-[30px]">Nfts Sold</div>
                        </div>
                        <div>
                            <div
                                className="font-mono font-bold text-[22px]  leading-[35.2px] xl:text-[28px] xl:leading-[39px]">3000+
                            </div>
                            <div className="text pb-[20px] xl:pb-[30px]">Followers</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtistPage;