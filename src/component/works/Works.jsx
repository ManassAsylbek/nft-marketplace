import React from 'react';
import CustomButton from "../button/button";
import {ReactComponent as Rocket} from "../../assets/icon/RocketLaunch.svg";
import Create from "../../assets/icon/Create Collection Icon.svg"
import Setup from "../../assets/icon/Setup Wallet Icon.svg"
import Start from "../../assets/icon/Start Earning Icon.svg"
import WorksCard from "./WorksCard";

const Works = () => {
    return (
        <div className="containerWork flex flex-col gap-[40px] xl:gap-[60px]">
            <div className="flex gap-[100px] items-end justify-between">
                <div className="grid gap-[10px]">
                    <h3 className="secondTitle">How It Works</h3>
                    <p className="text">Find out how to get started</p>
                </div>
            </div>
            <div className="grid gap-[20px] md:gap-[30px] md:grid-cols-3 ">
                <WorksCard title={"Setup Your wallet"} logo={Setup}
                           text={"Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner."} />
                <WorksCard title={"Create Collection"} logo={Create}
                           text={"Upload your work and setup your collection. Add a description, social links and floor price."} />
                <WorksCard  title={"Start Earning"} logo={Start}
                            text={"Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."}/>

            </div>
        </div>
    );
};

export default Works;