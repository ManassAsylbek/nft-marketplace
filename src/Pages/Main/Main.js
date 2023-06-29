import React from 'react';
import Header from "../../component/header/header";
import HeroSection from "../../component/heroSection/HeroSection";
import TrendCollection from "../../component/trendCollection/TrendCollection";
import TopArtist from "../../component/TopArtist/TopArtist";
import BrowseCategories from "../../component/BrowseCategories/BrowseCategories";
import DiscoverMore from "../../component/DiscoverMoreNft/DiscoverMore";
import Mushroom from "../../component/Mushroom/Mushroom";
import Works from "../../component/works/Works";
import Subscribe from "../../component/SubscribeWidget/Subscribe";
import Footer from "../../assets/Footer/Footer";

const Main = () => {
    return (
        <>
            <div className="bg-black">
                <HeroSection/>
                <TrendCollection/>
                <TopArtist/>
                <BrowseCategories/>
                <DiscoverMore/>
            </div>
            <div className="bg-cover bg-center bg-mobile md:bg-tablet xl:bg-screen">
                <div className="bgImage">
                    <Mushroom/>
                </div>
            </div>
            <div className="bg-black">
                <Works/>
                <Subscribe/>
            </div>

        </>

    );
};

export default Main;