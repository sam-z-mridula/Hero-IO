import React from 'react';
import logoImg from "../../assets/logo.png"

const LoadingSpinner = () => {
    return (
        <div className='w-fit mx-auto my-50'>
            <p className='flex items-center font-bold text-8xl  tracking-widest text-gray-500'>L
            <span class="w-20 h-20 animate-spin opacity-50"><img src={logoImg} alt="" /></span>
            ADING</p>
        </div>
    );
};

export default LoadingSpinner;