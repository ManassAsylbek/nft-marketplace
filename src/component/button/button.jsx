import React from 'react';
import {useNavigate} from "react-router-dom";

const CustomButton = ({children,style,url}) => {
    const navigate = useNavigate()
    return (
        <button className={`${style}`} onClick={()=>navigate(url)}>
            {children}
        </button>
    );
};

export default CustomButton;