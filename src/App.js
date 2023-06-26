import './App.css';
import Header from "./component/header/header";
import HeroSection from "./component/heroSection/HeroSection";
import TrendCollection from "./component/trendCollection/TrendCollection";
import TopArtist from "./component/TopArtist/TopArtist";

function App() {
    return (
        <div className="bg-black ">
            <Header/>
            <HeroSection/>
            <TrendCollection/>
            <TopArtist/>
        </div>
    );
}

export default App;
