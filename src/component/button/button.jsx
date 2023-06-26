import React from 'react';

const CustomButton = ({children,style}) => {
    return (
        <button className={`${style}`}>
            {children}
        </button>
    );
};

export default CustomButton;