import { Download } from "lucide-react";
import React from "react";
import { FaStar } from "react-icons/fa";

const SingleApp = ({ singleApp }) => {

  const {image, title, ratingAvg, downloads} = singleApp;

  return (
    // <div className="card bg-base-100 w-78 shadow-lg rounded-xl">
    //   <figure className="p-3">
    //     <img className="w-full rounded-2xl" src={image} alt="" />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title"> {title} </h2>
        
    //     <div className="card-actions justify-between">
    //       <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg text-[#00D390] font-semibold"> <Download className="h-4"></Download> {downloads} </span>
    //       <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg text-orange-500"> <FaStar className="h-4 "></FaStar> {ratingAvg} </span>
    //     </div>
    //   </div>
    // </div>

 
    <div className="bg-white rounded-2xl p-3 shadow-lg transition ease-in-out duration-300 hover:scale-105 cursor-pointer">
        <div className={`w-full h-70 rounded-xl bg-cover bg-no-repeat bg-center`} style={{ backgroundImage: `url(${image})` }}></div>
        <div className="">
            <h1 className="font-semibold text-lg my-2"> {title} </h1>
            <div className="flex justify-between items-center">
                <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg text-[#00D390] font-semibold"> <Download className="h-4"></Download> {downloads} </span>
                <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg text-orange-500"> <FaStar className="h-4 "></FaStar> {ratingAvg} </span>
            </div>
        </div>
    </div>
  );
};
// className={`bg-[url(${image})] w-full`}
export default SingleApp;
