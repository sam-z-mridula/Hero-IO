import React from "react";
import Navbar from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";
import errorImg from "../../assets/error-404.png"
import { useNavigate } from "react-router";

const ErrorPage = () => {

    const navigate = useNavigate();

  return (
    <>
      <Navbar></Navbar>
      <div className="w-fit text-center mx-auto my-15">
        <img className="w-90" src={errorImg} alt="" />
        
        <div>
            <h1 className="text-4xl font-bold">Oops, page not found!</h1>
            <p className="text-gray-500 text-sm my-4">The page you are looking for is not available.</p>
            <button onClick={() => navigate(-1)} className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-medium text-white btn px-6 py-4">Go Back!</button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ErrorPage;
