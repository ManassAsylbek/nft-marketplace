import React from 'react';
import animal from '../../assets/collection/Primary Photo Placeholder.svg'
import animal2 from '../../assets/collection/Secondary Photo Placeholder.svg'
import animal3 from '../../assets/collection/Secondary Photo Placeholder (1).svg'
import grib from '../../assets/collection/Primary Photo Placeholder (1).svg'
import grib2 from '../../assets/collection/Secondary Photo Placeholder (2).svg'
import grib3 from '../../assets/collection/Secondary Photo Placeholder (3).svg'
import robot from '../../assets/collection/Primary Photo Placeholder (2).svg'
import robot2 from '../../assets/collection/Secondary Photo Placeholder (4).svg'
import robot3 from '../../assets/collection/Secondary Photo Placeholder (5).svg'
import avatar from "../../assets/avatar/Avatar14.svg";


const TrendCollection = () => {
    return (
        <div className="container flex flex-col gap-[40px] xl:gap-[60px]">
            <div>
                <h3 className="secondTitle">Trending Collection</h3>
                <p className="text">Checkout our weekly updated trending collection.</p>
            </div>
            <div className=" flex gap-[30px]">
                <div className=" flex flex-col gap-[15px]">
                    <img src={animal} className="w-[330px] hoverAnimation" alt=""/>
                    <div className="flex gap-[15px]">
                        <img src={animal2} className="hoverAnimation" alt=""/>
                        <img src={animal3} className="hoverAnimation" alt=""/>
                        <div className="w-[100px] hoverAnimation bg-purple rounded-[20px] flex justify-center items-center
                    text-[22px] leading-[35.2px] text-white font-bold font-mono">1025+</div>
                    </div>
                    <div className="text font-bold">DSGN Animals</div>
                    <div className="flex gap-[10px]">
                        <img className="w-[24px]" src={avatar} alt=""/>
                        <span>AnimeKid</span>
                    </div>
                </div>
                <div className=" md:flex flex-col gap-[15px] hidden">
                    <img src={grib} className="w-[330px] hoverAnimation" alt=""/>
                    <div className="flex gap-[15px]">
                        <img src={grib2} className="hoverAnimation" alt=""/>
                        <img src={grib3} className="hoverAnimation" alt=""/>
                        <div className="w-[100px] hoverAnimation bg-purple rounded-[20px] flex justify-center items-center
                    text-[22px] leading-[35.2px] text-white font-bold font-mono">1025+</div>
                    </div>
                    <div className="text font-bold">Magic Mushrooms</div>
                    <div className="flex gap-[10px]">
                        <img className="w-[24px]" src={avatar} alt=""/>
                        <span>AnimeKid</span>
                    </div>
                </div>
                <div className=" xl:flex flex-col gap-[15px] hidden">
                    <img src={robot} className="w-[330px] hoverAnimation" alt=""/>
                    <div className="flex gap-[15px]">
                        <img src={robot2} className="hoverAnimation" alt=""/>
                        <img src={robot3} className="hoverAnimation" alt=""/>
                        <div className="w-[100px] hoverAnimation bg-purple rounded-[20px] flex justify-center items-center
                    text-[22px] leading-[35.2px] text-white font-bold font-mono">1025+</div>
                    </div>
                    <div className="text font-bold">Disco Machines</div>
                    <div className="flex gap-[10px]">
                        <img className="w-[24px]" src={avatar} alt=""/>
                        <span>AnimeKid</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TrendCollection;