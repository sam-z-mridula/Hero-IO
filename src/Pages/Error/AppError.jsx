import React from 'react';
import appErrImg from "../../assets/App-Error.png"
import { useNavigate } from 'react-router';

const AppError = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="w-fit text-center mx-auto my-10">
                <img className="w-90 mx-auto" src={appErrImg} alt="" />

                <div className='mt-5'>
                    <h1 className="text-4xl font-bold">Oops, App not found!</h1>
                    <p className="text-gray-500 text-sm my-4">The App you are requesting is not found on our system.  please try another apps!</p>
                    <button onClick={() => navigate(-1)} className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-medium text-white btn px-6 py-4">Go Back!</button>
                </div>
            </div>
        </>
    );
};

export default AppError;