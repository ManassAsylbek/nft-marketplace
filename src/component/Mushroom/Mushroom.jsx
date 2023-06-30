import React from 'react';
import avatar from "../../assets/avatar/Avatar14.svg";
import useTimer from "../../Hook/useTimer";
import {ReactComponent as Eye} from "../../assets/icon/Eye.svg";
import CustomButton from "../button/button";

const Mushroom = () => {

    const [over, setOver] = React.useState(false);
    const [[h, m, s], setTime] = React.useState([24, 0, 0]);

    const tick = () => {

        if (h === 0 && m === 0 && s === 0) {
            setOver(true);
        } else if (m === 0 && s === 0) {
            setTime([h - 1, 59, 59]);
        } else if (s == 0) {
            setTime([h, m - 1, 59]);
        } else {
            setTime([h, m, s - 1]);
        }
    };



    React.useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });
    return (

        <div className="containerMushroom pt-[120px] pb-[40px] flex flex-col md:flex-row
         md:justify-between md:items-end gap-[30px]">
            <div className="grid gap-[30px]">
                <div className="flex gap-[10px] w-[151px] px-[20px] py-[10px] bg-gray-dark rounded-[20px]">
                    <img className="w-[24px]" src={avatar} alt=""/>
                    <span>AnimeKid</span>
                </div>
                <div className=" font-sans font-bold text-white text-[38px]  leading-[45.6px] xl:text-[51px]
                 xl:leading-[56.1px]">
                    Magic Mushrooms
                </div>
                <CustomButton url={"/nft-page"} style={"hidden md:w-[250px] hoverAnimation h-[60px]  rounded-[20px] border-2 " +
                    "border-purple bg-white md:flex text-black justify-center items-center gap-x-[10px] "}>
                    <Eye className="w-[22px] fill-purple"/> See NFT</CustomButton>
            </div>

            <div className="flex flex-col gap-[10px] backdrop-blur-md rounded-[20px] bg-masala p-[30px] md:w-[295px]">
                <div>Auction ends in:</div>
                <div className="flex justify-between">
                    <div className=" font-sans font-bold text-white text-[38px]  leading-[45.6px]">
                        {h.toString().padStart(2, '0')}
                    </div>
                    <div className=" font-sans font-bold text-white text-[38px]  leading-[45.6px]">:</div>
                    <div className=" font-sans font-bold text-white text-[38px]  leading-[45.6px]">
                        {m
                            .toString()
                            .padStart(2, '0')}
                    </div>
                    <div className=" font-sans font-bold text-white text-[38px]  leading-[45.6px]">:</div>
                    <div className=" font-sans font-bold text-white text-[38px]  leading-[45.6px]">
                        {s.toString().padStart(2, '0')}
                    </div>
                </div>
            </div>
            <CustomButton url={"/nft-page"} style={"w-[315px] hoverAnimation md:hidden h-[60px]  rounded-[20px] border-2 " +
                "border-purple bg-white text-black flex justify-center items-center gap-x-[10px]"}>
                <Eye className="w-[22px] fill-purple"/> See NFT</CustomButton>
        </div>
    );
};

export default Mushroom;