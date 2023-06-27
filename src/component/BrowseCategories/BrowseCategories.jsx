import React from 'react';
import img from "../../assets/img/Categories.svg"
import img2 from "../../assets/img/Categories2.svg"
import img3 from "../../assets/img/Categories3.svg"
import img4 from "../../assets/img/Categories4.svg"
import img5 from "../../assets/img/Categories5.svg"
import img6 from "../../assets/img/Categories6.svg"
import img7 from "../../assets/img/Categories7.svg"
import img8 from "../../assets/img/Categories8.svg"
import PaintBrush from "../../assets/icon/PaintBrush.svg"
import MusicNotes from "../../assets/icon/MusicNotes.svg"
import Camera from "../../assets/icon/Camera.svg"
import VideoCamera from "../../assets/icon/VideoCamera.svg"
import Basketball from "../../assets/icon/Basketball.svg"
import MagicWand from "../../assets/icon/MagicWand.svg"
import Planet from "../../assets/icon/Planet.svg"
import Swatches from "../../assets/icon/Swatches.svg"
import CategoriesCard from "./CategoriesCard";

const BrowseCategories = ({avatar, name, price, number}) => {
    return (
        <div className="container flex flex-col gap-[40px] xl:gap-[60px]">
            <div className="flex gap-[100px] items-end justify-between">
                <div className="grid gap-[10px]">
                    <h3 className="secondTitle">Browse Categories</h3>
                </div>
            </div>
            <div className="grid gap-[20px] grid-cols-2 md:gap-[30px] md:grid-cols-4 ">
                <CategoriesCard image={img} name={"Art"} logo={PaintBrush}/>
                <CategoriesCard image={img2} name={"Collectibles"} logo={Swatches}/>
                <CategoriesCard image={img3} name={"Music"} logo={MusicNotes}/>
                <CategoriesCard image={img4} name={"Photography"} logo={PaintBrush}/>
                <CategoriesCard image={img5} name={"Video"} logo={PaintBrush}/>
                <CategoriesCard image={img6} name={"Utility"} logo={PaintBrush}/>
                <CategoriesCard image={img7} name={"Sport"} logo={PaintBrush}/>
                <CategoriesCard image={img8} name={"Virtual Words"} logo={PaintBrush}/>
            </div>
        </div>
    );
};

export default BrowseCategories;