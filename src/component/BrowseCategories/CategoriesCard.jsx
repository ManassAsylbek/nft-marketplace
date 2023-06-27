import React from 'react';


const CategoriesCard = ({image,name,logo}) => {
    return (
        <div className="bg-gray-dark rounded-[20px] relative xl:flex-col hoverAnimation">
            <div className="z-10  w-[100%] h-[148px] xl:h-[240px] absolute flex items-center justify-center">
                <img className="w-[80px] xl:w-[100px] object-cover" src={logo} alt=""/>
            </div>
            <div className="w-[148px] md:w-[153px] xl:w-[240px] rounded-t-[20px] object-cover overflow-hidden ">
                <img className="blur-lg" src={image} alt=""/>
            </div>
            <div className="p-[20px] pb-[25px]">
                <h3 className="text-[16px] xl:text-[22px] font-sans leading-[22.4px]  font-bold">{name}</h3>
            </div>
        </div>
    );
};

export default CategoriesCard;