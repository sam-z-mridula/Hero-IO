import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadImg from "../../assets/icon-downloads.png"
import ratingImg from "../../assets/icon-ratings.png"
import reviewImg from "../../assets/icon-review.png"


const AppDetails = () => {

    const {id} = useParams();
    const appId = parseInt(id);
    // console.log(id);
    const appData = useLoaderData();
    const singleApp = appData.find(app => app.id === appId)
    console.log(singleApp);

    const {image, title, companyName, downloads, size, ratingAvg, reviews} = singleApp;

    return (
        <div className='container mx-auto my-20 '>
            <div className='pb-10 border-b border-b-gray-400 flex items-center gap-20'>
                <div className=''>
                    <img className='w-80 rounded-xl shadow-lg' src={image} alt="" />
                </div>

                <div className='w-220'>
                    <div className='pb-5 border-b border-b-gray-400 mb-5'>
                        <h1 className='text-3xl font-bold text-[#192f45]'> {title} </h1>
                        <p className='text-gray-500 my-2'> Developed by <span className='text-violet-700 font-semibold'> {companyName} </span> </p>
                    </div>
                    <div className='flex gap-20 mb-8'>
                        <div>
                            <img src={downloadImg} alt="" />
                            <p className='text-gray-500 text-sm my-2'>Downloads</p>
                            <h1 className='text-4xl font-extrabold'> {downloads} </h1>
                        </div>
                        <div>
                            <img src={ratingImg} alt="" />
                            <p className='text-gray-500 text-sm my-2'>Average Rating</p>
                            <h1 className='text-4xl font-extrabold'> {ratingAvg} </h1>
                        </div>
                        <div>
                            <img src={reviewImg} alt="" />
                            <p className='text-gray-500 text-sm my-2'>Total Reviews</p>
                            <h1 className='text-4xl font-extrabold'> {reviews} </h1>
                        </div>
                    </div>
                    <button className='btn bg-[#00D390] p-6 text-white text-xl'> Install Now ({size}M)</button>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;