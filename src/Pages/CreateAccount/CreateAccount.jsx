import React, {useEffect} from 'react';
import img from "../../assets/createAccount/Create.svg"
import {ReactComponent as User} from "../../assets/icon/User.svg";
import {ReactComponent as Mail} from "../../assets/icon/EnvelopeSimple.svg";
import {ReactComponent as LockKey} from "../../assets/icon/LockKey.svg";


const CreateAccount = () => {
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
            pt-[30px] pb-[40px] self-center">
                <div className="flex flex-col gap-[20px]">
                    <h2 className="font-sans font-bold text-white text-[38px]  leading-[45.6px] xl:text-[51px]
                 xl:leading-[56.1px]">Create Account</h2>
                    <p className="text text-white">Welcome! enter your details and start creating, collecting and selling NFTs.</p>
                </div>
                <div className="flex flex-col gap-[15px] xl:w-[330px]">
                    <div className=" w-full h-[46px]  px-[20px] bg-white rounded-[20px] flex items-center gap-[12px]">
                        <User className={"w-[20px] fill-gray"}/>
                        <input type="text"
                               className="text-gray-dark outline-none w-full"
                               placeholder="Enter Your Email Address "/>
                    </div>
                    <div className=" w-full h-[46px]  px-[20px] bg-white rounded-[20px] flex items-center gap-[12px]">
                        <Mail className={"w-[20px] fill-gray"}/>
                        <input type="text"
                               className="text-gray-dark outline-none w-full"
                               placeholder="Enter Your Email Address "/>
                    </div>
                    <div className=" w-full h-[46px]  px-[20px] bg-white rounded-[20px] flex items-center gap-[12px]">
                        <LockKey className={"w-[20px] fill-gray"}/>
                        <input type="password"
                               className="text-gray-dark outline-none w-full"
                               placeholder="Enter Your Email Address "/>
                    </div>
                    <div className=" w-full h-[46px]  px-[20px] bg-white rounded-[20px] flex items-center gap-[12px]">
                        <LockKey className={"w-[20px] fill-gray"}/>
                        <input type="password"
                               className="text-gray-dark outline-none w-full"
                               placeholder="Enter Your Email Address "/>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default CreateAccount;