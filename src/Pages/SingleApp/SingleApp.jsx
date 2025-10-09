import { Download } from "lucide-react";
import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const SingleApp = ({ singleApp }) => {

  const {image, title, ratingAvg, downloads, id} = singleApp;

  return (
    <Link to={`/appDetails/${id}`}>
        <div className="bg-white rounded-2xl p-3 shadow-lg transition ease-in-out duration-300 hover:scale-105 cursor-pointer">
            <div className={`w-full h-70 rounded-xl bg-cover bg-no-repeat bg-center`} style={{ backgroundImage: `url(${image})` }}></div>
            <div className="">
                <h1 className="font-semibold text-lg my-2"> {title} </h1>
                <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg text-[#00D390] font-semibold"> <Download className="h-4"></Download> {downloads}M </span>
                    <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg text-orange-500"> <FaStar className="h-4 "></FaStar> {ratingAvg} </span>
                </div>
            </div>
        </div>
    </Link>
  );
};
// className={`bg-[url(${image})] w-full`}
export default SingleApp;
