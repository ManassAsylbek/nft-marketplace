import React, {useEffect} from 'react';
import img from "../../assets/createAccount/wallet.svg";
import {ReactComponent as Globe} from "../../assets/icon/Globe.svg";
import CustomButton from "../../component/button/button";
import avatar from "../../assets/avatar/Avatar14.svg";
import {ReactComponent as ArrowRight} from "../../assets/icon/ArrowRight.svg";
import DiscoverCard from "../../component/DiscoverMoreNft/DiscoverCard";
import {useNavigate} from "react-router-dom";

const NftPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const targetElement = document.getElementById('scroll');
        if (targetElement) {
            targetElement.scrollIntoView({behavior: 'smooth'});
        }

    }, []);


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
        <div className="bg-black" id="scroll">
            <div className="object-cover  overflow-hidden flex justify-center items-center
             h-[316px] md:h-[416px] xl:h-[560px]">
                <img
                    src={"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-7@1x.png"}
                    className="w-[100vw] object-cover h-[316px] md:h-[416px] xl:h-[560px]" alt=""/>
            </div>
            <div className="containerMushroom py-[40px] grid gap-[30px] md:grid-cols-2 ">
                <div>
                    <h3 className="secondTitle">The Orbitians</h3>
                    <div className="text text-gray pt-[10px]">The Orbitians</div>
                </div>
                <div className="flex flex-col gap-[10px] bg-gray-dark rounded-[20px] bg-masala p-[30px] md:w-[295px]
                                row-span-3 h-[235px] md:justify-self-end ">
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
                    <CustomButton style={"hoverAnimation mt-[20px] h-[60px] rounded-[20px]" +
                        " bg-purple text-white flex justify-center items-center gap-x-[10px]"}>
                        Place Bid</CustomButton>
                </div>
                <div className="">
                    <div className="text text-gray pt-[10px]">Created By</div>
                    <div className="flex gap-[10px]">
                        <img className="w-[24px]" src={avatar} alt=""/>
                        <span>AnimeKid</span>
                    </div>
                    <div className="text text-gray pt-[10px]">Description</div>
                    <div className="grid gap-[20px] md:gap-[30px]">
                        <div>The Orbitians <br/>
                            is a collection of 10,000 unique NFTs on the Ethereum blockchain,
                        </div>
                        <div> There are all sorts of beings in the NFT Universe. The most advanced and friendly of the
                            bunch are Orbitians.
                        </div>

                        <div>
                            They live in a metal space machines, high up in the sky and only have one foot on
                            Earth. <br/>
                            These Orbitians are a peaceful race, but they have been at war with a group of invaders for
                            many generations. The invaders are called Upside-Downs, because of their inverted bodies
                            that live on the ground, yet do not know any other way to be. Upside-Downs believe that they
                            will be able to win this war if they could only get an eye into Orbitian territory, so
                            they've taken to make human beings their target.
                        </div>
                    </div>
                    <div className="text text-gray pt-[30px] grid gap-[10px]">
                        <div>Details</div>
                        <div className="flex items-center gap-[10px] text-white">
                            <Globe className="fill-gray w-[24px]"/> View on Etherscan
                        </div>
                        <div className="flex items-center gap-[10px] text-white">
                            <Globe className="fill-gray w-[24px]"/> View Original
                        </div>
                    </div>

                    <div className="text text-gray pt-[30px] flex flex-col gap-[20px]">
                        <div>Tags</div>
                        <div className="hoverAnimation px-[30px] rounded-[20px]  bg-gray-dark h-[46px]
                         flex items-center w-fit text-white" onClick={()=>navigate("/marketplace")}>ANIMATION
                        </div>
                        <div className="hoverAnimation px-[30px] rounded-[20px]  bg-gray-dark h-[46px]
                         flex items-center w-fit text-white" onClick={()=>navigate("/marketplace")}>ILLUSTRATION
                        </div>
                        <div className="hoverAnimation px-[30px] rounded-[20px]  bg-gray-dark h-[46px]
                         flex items-center w-fit text-white" onClick={()=>navigate("/marketplace")}>MOON
                        </div>
                        <div className="hoverAnimation px-[30px] rounded-[20px]  bg-gray-dark h-[46px]
                         flex items-center w-fit text-white" onClick={()=>navigate("/marketplace")}>MOON
                        </div>
                    </div>
                    <div></div>
                </div>

            </div>
            <div className="containerMushroom py-[40px] flex flex-col gap-[40px] xl:gap-[60px]">
                <div className="flex gap-[100px] items-start justify-between">
                    <div className="grid gap-[10px]">
                        <h3 className="secondTitle">More From This Artist</h3>
                    </div>
                    <CustomButton url={"/artist-page"}  style={"hidden md:w-[250px] hoverAnimation h-[60px]  rounded-[20px] border-2 " +
                        "border-purple bg-transparent md:flex justify-center items-center gap-x-[10px] "}>
                        <ArrowRight className="w-[22px] fill-purple"/>Go to the Artist page</CustomButton>
                </div>
                <div className="grid gap-[20px] md:gap-[30px] md:grid-cols-2  xl:grid-cols-3 ">
                    <DiscoverCard/>
                    <DiscoverCard/>
                    <DiscoverCard/>
                    <DiscoverCard/>
                    <DiscoverCard/>
                    <DiscoverCard/>
                </div>
                <CustomButton url={"/artist-page"} style={"w-[315px] hoverAnimation md:hidden h-[60px]  rounded-[20px] border-2 " +
                    "border-purple bg-transparent flex justify-center items-center gap-x-[10px] "}>
                    <ArrowRight className="w-[22px] fill-purple"/> See All</CustomButton>
            </div>
        </div>
    );
};

export default NftPage;