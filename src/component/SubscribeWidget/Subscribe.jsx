import React from 'react';
import astroMobile from "../../assets/subscribe/img.png"
import {ReactComponent as Mail} from "../../assets/icon/EnvelopeSimple.svg";
import CustomButton from "../button/button";

const Subscribe = () => {
    return (
        <div className="containerAstro">
            <div className="grid gap-[30px] lg:gap-[80px] md:grid-cols-2 md:bg-gray-dark
             md:rounded-[20px] md:px-[30px] md:py-[40px] xl:p-[60px]">
                <div className="object-cover  overflow-hidden rounded-[20px] flex justify-center items-center
             w-[315px] h-[255px] md:w-[300px] md:h-[280px] xl:w-[425px] xl:h-[310px]">
                    <img src={astroMobile} alt=""/>
                </div>

                <div className="grid gap-[40px] ">
                    <div className="flex gap-[100px] items-end justify-between">
                        <div className="grid gap-[10px]">
                            <h3 className="secondTitle">Join Our Weekly Digest</h3>
                            <p className="text">Get exclusive promotions & updates straight to your inbox.</p>
                        </div>
                    </div>
                    <div className="grid gap-[16px] relative">
                        <input type="text"
                               className="text-gray-dark w-full h-[46px] xl:h-[60px] px-[20px] py-[16px] rounded-[20px] outline-none"
                               placeholder="Enter Your Email Address "/>
                        <CustomButton
                            style={"w-full h-[46px] xl:h-[60px] xl:w-[210px] xl:absolute xl:right-0 hoverAnimation rounded-[20px] bg-purple flex" +
                                " justify-center items-center gap-x-[10px] "}>
                            <Mail className="w-[22px] fill-white"/> Subscribe</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;