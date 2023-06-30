import React from 'react';
import CustomButton from "../button/button";
import {ReactComponent as Eye} from "../../assets/icon/Eye.svg";
import avatar1 from "../../assets/avatar/Avatar 1.svg";
import avatar2 from "../../assets/avatar/Avatar2.svg";
import avatar3 from "../../assets/avatar/Avatar3.svg";
import avatar4 from "../../assets/avatar/Avatar4.svg";
import avatar5 from "../../assets/avatar/Avatar5.svg";
import avatar6 from "../../assets/avatar/Avatar6.svg";
import avatar7 from "../../assets/avatar/Avatar7.svg";
import avatar8 from "../../assets/avatar/Avatar8.svg";
import avatar9 from "../../assets/avatar/Avatar9.svg";
import avatar10 from "../../assets/avatar/Avatar10.svg";
import avatar11 from "../../assets/avatar/avatar11.svg";
import avatar12 from "../../assets/avatar/avatar12.svg";
import DiscoverCard from "./DiscoverCard";

const DiscoverMore = () => {
    return (
        <div className="container flex flex-col gap-[40px] xl:gap-[60px]">
            <div className="flex gap-[100px] items-end justify-between">
                <div className="grid gap-[10px]">
                    <h3 className="secondTitle">Discover More Nfts</h3>
                    <p className="text">Explore new trending NFTs</p>
                </div>
                <CustomButton url={"/marketplace"} style={"hidden md:w-[250px] hoverAnimation h-[60px]  rounded-[20px] border-2 " +
                    "border-purple bg-transparent md:flex justify-center items-center gap-x-[10px] "}>
                    <Eye className="w-[22px] fill-purple"/> See NFT</CustomButton>
            </div>
            <div className="grid gap-[20px] md:gap-[30px] md:grid-cols-2  xl:grid-cols-3 ">
                <DiscoverCard/>
                <DiscoverCard/>
                <div className="md:hidden xl:block">
                    <DiscoverCard/>
                </div>
            </div>
            <CustomButton url={"/marketplace"} style={"w-[315px] hoverAnimation md:hidden h-[60px] rounded-[20px]" +
                " border-2 border-purple bg-transparent flex justify-center items-center gap-x-[10px]"}>
                <Eye className="w-[22px] fill-purple"/> See All</CustomButton>
        </div>
    );
};

export default DiscoverMore;