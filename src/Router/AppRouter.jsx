import { Route, Routes } from "react-router-dom";
import Main from "../Pages/Main/Main";
import CreateAccount from "../Pages/CreateAccount/CreateAccount";
import ConnectWallet from "../Pages/ConnectWallet/ConnectWallet";
import ArtistPage from "../Pages/ArtistPage/ArtistPage";



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
    },
];

const AppRouter = () => {
    const pageRoutes = pagesData.map(({ path, title, element }) => {
        return <Route key={title} path={`/${path}`} element={element} />;
    });

    return <Routes>{pageRoutes}</Routes>;
};
export default AppRouter;