import React from "react";
import Navbar from "../../Components/Header/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Root = () => {

  const navigation = useNavigation();

  return (
    <>
      <div>
        <Navbar></Navbar>

        {
          navigation.state === 'loading' 
            ? <LoadingSpinner></LoadingSpinner> 
            : <Outlet></Outlet>
        }
        
        <Footer></Footer>
      </div>

      <ToastContainer />
    </>
  );
};

export default Root;
