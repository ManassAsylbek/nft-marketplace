import React, {useEffect, useState} from 'react';
import {ReactComponent as Search} from "../../assets/icon/MagnifyingGlass.svg";
import {useNavigate} from "react-router-dom";
import RankingCard from "./RankingCard";
import AvatarCard from "../../component/TopArtist/AvatarCard";
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
import avatar13 from "../../assets/avatar/avatar13.svg"
import avatar14 from "../../assets/avatar/Avatar14.svg"
import avatar15 from "../../assets/avatar/avatar15.svg"
import avatar16 from "../../assets/avatar/avatar16.svg"
import avatar17 from "../../assets/avatar/avatar17.svg"
import avatar18 from "../../assets/avatar/avatar18.svg"
import avatar19 from "../../assets/avatar/avatar19.svg"
import avatar20 from "../../assets/avatar/avatar20.svg"

const RankingPage = () => {

    const [choose, setChoose] = useState(1)
    const navigate = useNavigate()


    useEffect(() => {
        const targetElement = document.getElementById('scroll');
        if (targetElement) {
            targetElement.scrollIntoView({behavior: 'smooth'});
        }

    }, []);

    return (
        <div className="bg-black" id="scroll">
            <div className="container py-[60px] flex flex-col gap-[30px]">
                <div>
                    <h3 className="secondTitle">Top Creators</h3>
                    <div className="text  pt-[10px]">Check out top ranking NFT artists on the NFT Marketplace.</div>
                </div>
                <div className="grid grid-cols-4 h-[60px] items-center justify-items-center">
                    <div
                        className={`text font-bold cursor-pointer ${1 === choose ? "selectButton" : "unselectButton"}`}
                        onClick={() => setChoose(1)}>
                        <div className="md:hidden">1d</div>
                        <div className="hidden md:block">Today</div>
                    </div>
                    <div
                        className={`text font-bold cursor-pointer ${2 === choose ? "selectButton" : "unselectButton"}`}
                        onClick={() => setChoose(2)}>
                        <div className="md:hidden">7d</div>
                        <div className="hidden md:block">This Week</div>
                    </div>
                    <div
                        className={`text font-bold cursor-pointer ${3 === choose ? "selectButton" : "unselectButton"}`}
                        onClick={() => setChoose(3)}>
                        <div className="md:hidden">30d</div>
                        <div className="hidden md:block" >This Month</div>
                    </div>
                    <div
                        className={`text font-bold cursor-pointer ${4 === choose ? "selectButton" : "unselectButton"}`}
                        onClick={() => setChoose(4)}>
                        <div>All Time</div>
                    </div>
                </div>
                <div className="grid gap-[20px]">
                    <div className="h-[50px] md:h-[60px] xl:h-[84px]  px-[10px] xl:h-[84px] rounded-[20px]
                     md:px-[20px] border border-gray text-gray flex items-center gap-[12px]">
                        <div className="w-[24px] text-center">#</div>
                        <div className="w-[181px] md:w-[430px] xl:w-[460px]">Artist</div>
                        <div className="font-sans hidden md:block w-[100px]  text-[16px] leading-[13.2px]
                         text-[#00ac4f] xl:w-[160px]">Change</div>
                        <div className="font-sans hidden xl:block text-[12px] leading-[13.2px] text-[#00ac4f]
                         xl:w-[160px]">NFTs Sold</div>
                        <div className="xl:w-[160px]">Volume</div>
                    </div>
                    <RankingCard price={"34.53 ETH"} avatar={avatar1} name={"Keepitreal"} number={1}/>
                    <RankingCard price={"34.53 ETH"} avatar={avatar2} name={"Keepitreal"} number={2}/>
                    <RankingCard price={"34.53 ETH"} avatar={avatar3} name={"Keepitreal"} number={3}/>
                    <RankingCard price={"34.53 ETH"} avatar={avatar4} name={"Keepitreal"} number={4}/>
                    <RankingCard price={"34.53 ETH"} avatar={avatar5} name={"Keepitreal"} number={5}/>
                    <RankingCard price={"34.53 ETH"} avatar={avatar6} name={"Keepitreal"} number={6}/>
                    <RankingCard price={"34.53 ETH"} avatar={avatar7} name={"Keepitreal"} number={7}/>
                    <RankingCard price={"34.53 ETH"} avatar={avatar8} name={"Keepitreal"} number={8}/>
                    <RankingCard price={"34.53 ETH"} avatar={avatar9} name={"Keepitreal"} number={9}/>
                    <RankingCard price={"34.53 ETH"} avatar={avatar10} name={"Keepitreal"} number={10}/>
                    <RankingCard price={"34.53 ETH"} avatar={avatar11} name={"Keepitreal"} number={11}/>
                    <RankingCard price={"34.53 ETH"} avatar={avatar12} name={"Keepitreal"} number={12}/>
                    <RankingCard price={"34.53 ETH"} avatar={avatar13} name={"Keepitreal"} number={13}/>
                    <RankingCard price={"34.53 ETH"} avatar={avatar14} name={"Keepitreal"} number={14}/>
                    <RankingCard price={"34.53 ETH"} avatar={avatar15} name={"Keepitreal"} number={15}/>
                    <RankingCard price={"34.53 ETH"} avatar={avatar16} name={"Keepitreal"} number={16}/>
                    <RankingCard price={"34.53 ETH"} avatar={avatar17} name={"Keepitreal"} number={17}/>
                    <RankingCard price={"34.53 ETH"} avatar={avatar18} name={"Keepitreal"} number={18}/>
                    <RankingCard price={"34.53 ETH"} avatar={avatar19} name={"Keepitreal"} number={19}/>
                    <RankingCard price={"34.53 ETH"} avatar={avatar20} name={"Keepitreal"} number={20}/>
                </div>
            </div>
        </div>
    );
};

export default RankingPage;