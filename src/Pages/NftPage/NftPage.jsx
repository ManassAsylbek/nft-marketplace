import React from 'react';
import img from "../../assets/createAccount/wallet.svg";

const NftPage = () => {
    return (
        <div className="bg-black">
            <div className="object-cover  overflow-hidden flex justify-center items-center
             h-[316px] md:h-[416px] xl:h-[560px]">
                <img
                    src={"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-7@1x.png"}
                    className="w-[100vw] object-cover h-[316px] md:h-[416px] xl:h-[560px]" alt=""/>
            </div>
        </div>
    );
};

export default NftPage;