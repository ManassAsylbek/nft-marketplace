import './App.css';
import Header from "./component/header/header";
import HeroSection from "./component/heroSection/HeroSection";
import TrendCollection from "./component/trendCollection/TrendCollection";
import TopArtist from "./component/TopArtist/TopArtist";
import BrowseCategories from "./component/BrowseCategories/BrowseCategories";
import DiscoverMore from "./component/DiscoverMoreNft/DiscoverMore";
import Mushroom from "./component/Mushroom/Mushroom";
import Works from "./component/works/Works";

function App() {
    return (
        <>
            <div className="bg-black">
                <Header/>
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
            </div>

        </>


    );
}

export default App;
