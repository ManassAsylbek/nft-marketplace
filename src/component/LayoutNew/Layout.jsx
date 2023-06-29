import React from 'react';
import Header from "../header/header";
import Footer from "../../assets/Footer/Footer";

const Layout = ({children}) => {
    return (
        <>
            <div className="bg-black">
                <Header/>
            </div>
            <div>{children}</div>
            <div className="bg-gray-dark">
                <Footer/>
            </div>
        </>
    );
};

export default Layout;
