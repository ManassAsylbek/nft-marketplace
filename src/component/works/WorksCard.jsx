import React from 'react';
import PaintBrush from "../../assets/icon/PaintBrush.svg"

const WorksCard = ({logo, text, title}) => {
    return (
        <div className="bg-gray-dark rounded-[20px] flex gap-[10px]  md:flex-col md:gap-[20px] xl:gap-[20px]
             hoverAnimation p-[20px] md:p-[30px] md:pt-[10px]">
            <div className="z-10  flex items-center justify-center object-cover">
                <img className="w-[100px] md:w-full" src={logo} alt=""/>
            </div>
            <div className="flex flex-col w-[154px] xl:w-full gap-[10px] justify-start md:items-center ">
                <h3 className="text-[16px]  xl:text-[22px] font-sans
                 leading-[22.4px] xl:leading-[30.8px] font-bold">{title}</h3>
                <p className="text-[12px] text-left md:text-center xl:text-[16px]
                font-sans leading-[16.8px] xl:leading-[22.4px]">{text}</p>
            </div>
        </div>
    );
};

export default WorksCard;