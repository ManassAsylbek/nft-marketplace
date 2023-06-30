import React, {useEffect} from 'react';
import img from "../../assets/createAccount/wallet.svg";
import mask from "../../assets/icon/Metamask.svg";
import WalletConnect from "../../assets/icon/WalletConnect.svg";
import Coinbase from "../../assets/icon/Coinbase.svg";

import CustomButton from "../../component/button/button";

const ConnectWallet = () => {

    useEffect(() => {
        const targetElement = document.getElementById('scroll');
        if (targetElement) {
            targetElement.scrollIntoView({behavior: 'smooth'});
        }

    }, []);


    return (
        <div className="bg-black grid md:grid-cols-2 justify-items-center md:justify-items-start
         md:gap-[40px] xl:gap-[60px] self-stretch" id="scroll">
            <div className="object-cover  overflow-hidden flex justify-center items-center
              h-[232px] md:h-[615px]  xl:h-[691px]">
                <img src={img} className="w-[100vw] md:h-[615px] md:w-[100vw] object-cover  xl:h-[691px]" alt=""/>
            </div>

            <div className="flex flex-col gap-[40px] max-w-[330px] xl:max-w-[460px] px-[15px] md:px-0
             self-center pt-[30px] pb-[40px]">
                <div className="flex flex-col gap-[20px]">
                    <h2 className="font-sans font-bold text-white text-[38px]  leading-[45.6px] xl:text-[51px]
                 xl:leading-[56.1px]">Connect Wallet</h2>
                    <p className="text text-white">Choose a wallet you want to connect. There are several wallet providers.</p>
                </div>
                <div className="flex flex-col gap-[15px] xl:w-[330px]">
                    <CustomButton style={"w-[320px] hoverAnimation h-[72px] pl-[40px]  rounded-[20px] border-2 " +
                        "border-purple bg-gray-dark md:flex items-center gap-x-[20px] textWallet"}>
                        <img className="w-[40px] fill-purple" src={mask}/> Metamask</CustomButton>
                    <CustomButton style={"w-[320px] hoverAnimation h-[72px] pl-[40px] rounded-[20px] border-2 " +
                        "border-purple bg-gray-dark md:flex items-center gap-x-[20px] textWallet"}>
                        <img className="w-[40px] fill-purple" src={WalletConnect}/>Wallet Connect</CustomButton>
                    <CustomButton style={"w-[320px] hoverAnimation h-[72px] pl-[40px] rounded-[20px] border-2 " +
                        "border-purple bg-gray-dark md:flex items-center gap-x-[20px] textWallet"}>
                        <img className="w-[40px] fill-purple" src={Coinbase}/>Coinbase</CustomButton>
                </div>
            </div>
        </div>
    );
};

export default ConnectWallet;