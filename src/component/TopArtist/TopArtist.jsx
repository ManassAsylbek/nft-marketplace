import React from 'react';
import {ReactComponent as Rocket} from "../../assets/icon/RocketLaunch.svg";
import CustomButton from "../button/button";
import avatar1 from "../../assets/avatar/Avatar 1.svg"
import avatar2 from "../../assets/avatar/Avatar2.svg"
import avatar3 from "../../assets/avatar/Avatar3.svg"
import avatar4 from "../../assets/avatar/Avatar4.svg"
import avatar5 from "../../assets/avatar/Avatar5.svg"
import avatar6 from "../../assets/avatar/Avatar6.svg"
import avatar7 from "../../assets/avatar/Avatar7.svg"
import avatar8 from "../../assets/avatar/Avatar8.svg"
import avatar9 from "../../assets/avatar/Avatar9.svg"
import avatar10 from "../../assets/avatar/Avatar10.svg"
import avatar11 from "../../assets/avatar/avatar11.svg"
import avatar12 from "../../assets/avatar/avatar12.svg"
/*import avatar13 from "../../assets/avatar/avatar13.svg"
import avatar14 from "../../assets/avatar/Avatar14.svg"
import avatar15 from "../../assets/avatar/avatar15.svg"
import avatar16 from "../../assets/avatar/avatar16.svg"
import avatar17 from "../../assets/avatar/avatar17.svg"
import avatar18 from "../../assets/avatar/avatar18.svg"
import avatar19 from "../../assets/avatar/avatar19.svg"
import avatar20 from "../../assets/avatar/avatar20.svg"*/
import AvatarCard from "./AvatarCard";

const TopArtist = () => {
    return (
        <div className="container flex flex-col gap-[40px] xl:gap-[60px]">
            <div className="flex gap-[100px] items-end justify-between">
                <div className="grid gap-[10px]">
                    <h3 className="secondTitle">Top creators</h3>
                    <p className="text">Checkout Top Rated Creators on the NFT Marketplace</p>
                </div>
                <CustomButton style={"hidden md:w-[250px] hoverAnimation h-[60px]  rounded-[20px] border-2 " +
                    "border-purple bg-transparent md:flex justify-center items-center gap-x-[10px] "}>
                    <Rocket className="w-[22px] fill-purple"/> View Rankings</CustomButton>
            </div>
            <div className="grid gap-[20px] md:gap-[30px] md:grid-cols-2 xl:grid-cols-4">
                <AvatarCard price={"34.53 ETH"} avatar={avatar1} name={"Keepitreal"} number={1}/>
                <AvatarCard price={"34.53 ETH"} avatar={avatar2} name={"Keepitreal"} number={2}/>
                <AvatarCard price={"34.53 ETH"} avatar={avatar3} name={"Keepitreal"} number={3}/>
                <AvatarCard price={"34.53 ETH"} avatar={avatar4} name={"Keepitreal"} number={4}/>
                <AvatarCard price={"34.53 ETH"} avatar={avatar5} name={"Keepitreal"} number={5}/>
                <AvatarCard price={"34.53 ETH"} avatar={avatar6} name={"Keepitreal"} number={6}/>
                <AvatarCard price={"34.53 ETH"} avatar={avatar7} name={"Keepitreal"} number={7}/>
                <AvatarCard price={"34.53 ETH"} avatar={avatar8} name={"Keepitreal"} number={8}/>
                <AvatarCard price={"34.53 ETH"} avatar={avatar9} name={"Keepitreal"} number={9}/>
                <AvatarCard price={"34.53 ETH"} avatar={avatar10} name={"Keepitreal"} number={10}/>
                <AvatarCard price={"34.53 ETH"} avatar={avatar11} name={"Keepitreal"} number={11}/>
                <AvatarCard price={"34.53 ETH"} avatar={avatar12} name={"Keepitreal"} number={12}/>
      {/*          <AvatarCard price={"34.53 ETH"} avatar={avatar13} name={"Keepitreal"} number={13}/>
                <AvatarCard price={"34.53 ETH"} avatar={avatar14} name={"Keepitreal"} number={14}/>
                <AvatarCard price={"34.53 ETH"} avatar={avatar15} name={"Keepitreal"} number={15}/>
                <AvatarCard price={"34.53 ETH"} avatar={avatar16} name={"Keepitreal"} number={16}/>
                <AvatarCard price={"34.53 ETH"} avatar={avatar17} name={"Keepitreal"} number={17}/>
                <AvatarCard price={"34.53 ETH"} avatar={avatar18} name={"Keepitreal"} number={18}/>
                <AvatarCard price={"34.53 ETH"} avatar={avatar19} name={"Keepitreal"} number={19}/>
                <AvatarCard price={"34.53 ETH"} avatar={avatar20} name={"Keepitreal"} number={20}/>*/}

            </div>
            <CustomButton url={"/ranking"} style={"w-[315px] hoverAnimation md:hidden h-[60px]  rounded-[20px] border-2 " +
                "border-purple bg-transparent flex justify-center items-center gap-x-[10px] "}>
                <Rocket className="w-[22px] fill-purple"/> View Rankings</CustomButton>
        </div>
    );
};

export default TopArtist;