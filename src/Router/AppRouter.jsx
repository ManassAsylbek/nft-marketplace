import { Route, Routes } from "react-router-dom";
import Main from "../Pages/Main/Main";
import CreateAccount from "../Pages/CreateAccount/CreateAccount";
import ConnectWallet from "../Pages/ConnectWallet/ConnectWallet";
import ArtistPage from "../Pages/ArtistPage/ArtistPage";
import NftPage from "../Pages/NftPage/NftPage";
import MarketPlace from "../Pages/MarketPlace/MarketPlace";
import RankingPage from "../Pages/RankingPage/RankingPage";



const pagesData = [
    {
        path: "",
        title: "Main",
        element: <Main/>
    },{
        path: "/create-account",
        title: "CreateAccount",
        element: <CreateAccount/>
    },{
        path: "/connect-a-wallet",
        title: "ConnectWallet",
        element: <ConnectWallet/>
    },{
        path: "/artist-page",
        title: "ArtistPage",
        element: <ArtistPage/>
    },{
        path: "/nft-page",
        title: "NftPage",
        element: <NftPage/>
    },
    {
        path: "/marketplace",
        title: "MarketPlace",
        element: <MarketPlace/>
    },
    {
        path: "/ranking",
        title: "RankingPage",
        element: <RankingPage/>
    },
];

const AppRouter = () => {
    const pageRoutes = pagesData.map(({ path, title, element }) => {
        return <Route key={title} path={`/${path}`} element={element} />;
    });

    return <Routes>{pageRoutes}</Routes>;
};
export default AppRouter;