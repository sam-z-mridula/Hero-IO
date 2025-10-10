import React from "react";
import { BsExclamationOctagonFill } from "react-icons/bs";

const NoAppInstalled = () => {
  return (
    <div className="w-fit text-center mx-auto mt-10 mb-20">
        <div className="w-fit mx-auto mb-5">
            <BsExclamationOctagonFill className="text-red-500" size={100}/>
        </div>
      <h1 className="text-4xl font-bold">No App Installed</h1>
      <p className="text-gray-500 text-sm my-4">
        Install an app to see it listed
      </p>
    </div>
  );
};

export default NoAppInstalled;
