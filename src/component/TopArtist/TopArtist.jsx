import React from 'react';
import {ReactComponent as Rocket} from "../../assets/icon/RocketLaunch.svg";
import CustomButton from "../button/button";
import avatar1 from "../../assets/avatar/Avatar 1.svg"
import AvatarCard from "./AvatarCard";

const TopArtist = () => {
    return (
        <div className="container flex flex-col gap-[40px] xl:gap-[60px]">
            <div className="flex gap-[100px] items-end justify-between">
                <div className="grid gap-[10px]">
                    <h3 className="secondTitle">Top creators</h3>
                    <p className="text">Checkout Top Rated Creators on the NFT Marketplace</p>
                </div>
                <CustomButton style={"hidden md:w-[250px] h-[60px]  rounded-[20px] border-2 " +
                    "border-purple bg-transparent md:flex justify-center items-center gap-x-[10px] "}>
                    <Rocket className="w-[22px] fill-purple"/> View Rankings</CustomButton>
            </div>
            <div className="grid gap-[20px] md:gap-[30px] md:grid-cols-2 xl:grid-cols-4">
                <AvatarCard price={"34.53 ETH"} avatar={avatar1} name={"Keepitreal"} number={1}/>
                <AvatarCard price={"34.53 ETH"} avatar={avatar1} name={"Keepitreal"} number={2}/>
                <AvatarCard price={"34.53 ETH"} avatar={avatar1} name={"Keepitreal"} number={3}/>
                <AvatarCard price={"34.53 ETH"} avatar={avatar1} name={"Keepitreal"} number={4}/>

            </div>
            <CustomButton style={"w-[315px] md:hidden h-[60px]  rounded-[20px] border-2 " +
                "border-purple bg-transparent flex justify-center items-center gap-x-[10px] "}>
                <Rocket className="w-[22px] fill-purple"/> View Rankings</CustomButton>
        </div>
    );
};

export default TopArtist;