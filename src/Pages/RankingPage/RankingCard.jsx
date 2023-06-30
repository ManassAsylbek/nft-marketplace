import React from 'react';
import {useNavigate} from "react-router-dom";
import avatar1 from "../../assets/avatar/Avatar 1.svg"
import avatar2 from "../../assets/avatar/Avatar2.svg"
import avatar3 from "../../assets/avatar/Avatar3.svg"
import avatar4 from "../../assets/avatar/Avatar4.svg"
import avatar5 from "../../assets/avatar/Avatar5.svg"
import avatar6 from "../../assets/avatar/Avatar6.svg"
import avatar7 from "../../assets/avatar/Avatar7.svg"
import avatar8 from "../../assets/avatar/Avatar8.svg"
import avatar9 from "../../assets/avatar/Avatar9.svg"
import avatar10 from "../../assets/avatar/Avatar10.svg"
import avatar11 from "../../assets/avatar/avatar11.svg"
import avatar12 from "../../assets/avatar/avatar12.svg"
/*import avatar13 from "../../assets/avatar/avatar13.svg"
import avatar14 from "../../assets/avatar/Avatar14.svg"
import avatar15 from "../../assets/avatar/avatar15.svg"
import avatar16 from "../../assets/avatar/avatar16.svg"
import avatar17 from "../../assets/avatar/avatar17.svg"
import avatar18 from "../../assets/avatar/avatar18.svg"
import avatar19 from "../../assets/avatar/avatar19.svg"
import avatar20 from "../../assets/avatar/avatar20.svg"*/

const RankingCard = ({avatar,name,price,number}) => {
    const navigate = useNavigate()

    return (
        <div className="h-[50px] md:h-[60px] xl:h-[84px] flex items-center bg-gray-dark rounded-[20px] px-[10px]
                        md:px-[20px]  hoverAnimation gap-[12px]"
             onClick={()=>navigate("/artist-page")}>
            <div className="z-10 w-[24px] h-[24px]
                     flex items-center justify-center font-mono text-gray text- [12px]">
                {number}
            </div>
            <img className="w-[24px] xl:w-[60px]" src={avatar} alt=""/>
            <h3 className="text-base font-sans w-[119px] md:w-[390px] leading-[22.4px]  font-bold">{name}</h3>
            <div className="font-sans hidden md:block w-[100px]  text-[16px] leading-[13.2px] text-[#00ac4f] xl:w-[160px]">-1.41%</div>
            <div className="font-sans hidden xl:block text-[12px] leading-[13.2px] text-[#00ac4f] xl:w-[160px]">-1.41%</div>
            <div className="font-mono text-[12px] leading-[13.2px] xl:w-[160px]">{price}</div>
        </div>
    );
};

export default RankingCard;