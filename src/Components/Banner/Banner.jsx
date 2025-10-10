import React from "react";
import GooglePlay from "../../assets/googlePlay.png";
import AppStore from "../../assets/AppStore.png";
import heroImg from "../../assets/hero.png"
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="my-20 text-center">
      <div>
        <h1 className="font-bold text-6xl leading-tight text-[#192f45]">
          We Build <br /> <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">Productive</span> Apps
        </h1>
        <p className="text-gray-500 mt-5 mb-8">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>

        <div className="flex gap-5 w-fit mx-auto">

          <Link to={'https://play.google.com/store/games?hl=en'} className="btn py-7 flex items-center gap-3 shadow-lg">
            <img src={GooglePlay} alt="" />
            <span className="text-lg font-semibold">Google Play</span>
          </Link>

          <Link to={'https://www.apple.com/app-store/'} className="btn py-7 flex items-center gap-3 shadow-lg">
            <img src={AppStore} alt="" />
            <span className="text-lg font-semibold">App Store</span>
          </Link>

        </div>

      </div>
      <div className="w-[60%] mx-auto mt-8">
        <img className="mx-auto" src={heroImg} alt="" />
      </div>

      <div className="p-20 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white">
        <h1 className="text-5xl font-semibold">Trusted By Million, Built For You</h1>
        <div className="mt-8 flex gap-30 w-fit mx-auto">
            <div>
                <p className="font-light text-gray-300 text-sm">Total Downloads</p>
                <h1 className="text-6xl font-bold my-3">29.6M</h1>
                <p className="font-light text-gray-300 text-sm">21% more than last month</p>
            </div>
            <div>
                <p className="font-light text-gray-300 text-sm">Total Reviews</p>
                <h1 className="text-6xl font-bold my-3">906K</h1>
                <p className="font-light text-gray-300 text-sm">46% more than last month</p>
            </div>
            <div>
                <p className="font-light text-gray-300 text-sm">Active Apps</p>
                <h1 className="text-6xl font-bold my-3">132+</h1>
                <p className="font-light text-gray-300 text-sm">31 more will Launch</p>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Banner;
