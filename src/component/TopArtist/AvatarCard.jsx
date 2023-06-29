import React from 'react';
import avatar1 from "../../assets/avatar/Avatar 1.svg";
import {useNavigate} from "react-router-dom";

const AvatarCard = ({avatar,name,price,number}) => {
    const navigate = useNavigate()
    return (
        <div className="flex gap-[20px] items-center p-[20px] bg-gray-dark rounded-[20px] relative
                        xl:flex-col hoverAnimation"
        onClick={()=>navigate("/artist-page")}>
            <div className="z-10 w-[30px] h-[30px] bg-black rounded-[50%] absolute top-[13px] left-[13px]
                     flex items-center justify-center font-mono text-gray text-base">
                {number}
            </div>
            <img className="w-[60px] xl:w-[120px]" src={avatar} alt=""/>
            <div className="flex flex-col gap-[5px] xl:items-center">
                <h3 className="text-[22px] font-sans   leading-[22.4px]  font-bold">{name}</h3>
                <div>
                    <span className="font-sans  text-[16px] leading-[22.4px] text-gray">Total Sales: </span>
                    <span className="font-mono text-base leading-[22.4px]">{price}</span>
                </div>
            </div>
        </div>
    );
};

export default AvatarCard;