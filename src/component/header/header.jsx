import React from 'react';
import {ReactComponent as Logo} from '../../assets/icon/Storefront.svg'
import {ReactComponent as List} from '../../assets/icon/List.svg'
import {ReactComponent as User} from '../../assets/icon/User.svg'

const Header = () => {
    return (
        <div className=" flex justify-between text-white  px-[30px] py-3.5  md:px-[50px] xl:py-5 ">
            <div className="flex gap-x-4 items-center">
                <Logo className=" fill-purple accent-purple w-6 xl:w-8"/>
                <span className="font-mono text-base font-semibold xl:text-xl ">NFT Marketplace</span>
            </div>
            <div>
                <List className="w-6 xl:hidden"/>
                <ul className="hidden xl:flex items-center font-sans font-bold gap-x-2">
                    <li className="px-[20px] hoverAnimation">Marketplace</li>
                    <li className="px-[20px] hoverAnimation">Rankings</li>
                    <li className="px-[20px] hoverAnimation">Connect a wallet</li>
                    <li className="flex items-center gap-x-3 py-[18px] px-[30px] rounded-[24px] bg-purple hoverAnimation">
                        <User className="w-5 h-5"/>Sign Up
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;