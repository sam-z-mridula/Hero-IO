import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadImg from "../../assets/icon-downloads.png"
import ratingImg from "../../assets/icon-ratings.png"
import reviewImg from "../../assets/icon-review.png"
import { addToStoredDB, getStoredApp } from '../../utility/addToDB';
import { toast } from 'react-toastify';
import ReviewChart from '../../Components/ReviewChart/ReviewChart';


const AppDetails = () => {

    
    const [isActive, setIsActive] = useState(true);

    const {id} = useParams();
    const appId = parseInt(id);
    
    const data = useLoaderData();
    const singleApp = data.find(app => app.id === appId)
    // console.log(singleApp);
    
    const {image, title, companyName, downloads, size, ratingAvg, reviews, ratings, description} = singleApp;

    const handleInstallation = (id) => {
        addToStoredDB(id);
        toast.success("App Installed");
    }

    const handleDisabled = () => {
        setIsActive(false);
    }

    useEffect(() => {
        const storedAppData = getStoredApp();
        const convertedAppData = storedAppData.map(id => parseInt(id));
        const appsToDisable = data.filter(app => convertedAppData.includes(app.id));
        
        // console.log(appId);
        // console.log(appsToDisable);

         appsToDisable.map(app => {
            if (app.id === appId) {
                setIsActive(false);
            }
        })
        
    }, [])

    return (
        <div className='container mx-auto my-20 '>
            <div className='pb-10 border-b border-b-gray-400 flex items-center gap-10 mx-10'>
                <div className=''>
                    <img className='w-70 rounded-xl shadow-lg' src={image} alt="" />
                </div>

                <div className='w-220'>
                    <div className='pb-5 border-b border-b-gray-400 mb-5'>
                        <h1 className='text-2xl font-bold text-[#192f45]'> {title} </h1>
                        <p className='text-gray-500 my-1'> Developed by <span className='text-violet-700 font-semibold'> {companyName} </span> </p>
                    </div>
                    <div className='flex gap-20 mb-7'>
                        <div>
                            <img className='w-7' src={downloadImg} alt="" />
                            <p className='text-gray-500 text-sm my-2'>Downloads</p>
                            <h1 className='text-3xl font-extrabold'> {downloads}M </h1>
                        </div>
                        <div>
                            <img className='w-7' src={ratingImg} alt="" />
                            <p className='text-gray-500 text-sm my-2'>Average Rating</p>
                            <h1 className='text-3xl font-extrabold'> {ratingAvg} </h1>
                        </div>
                        <div>
                            <img className='w-7' src={reviewImg} alt="" />
                            <p className='text-gray-500 text-sm my-2'>Total Reviews</p>
                            <h1 className='text-3xl font-extrabold'> {reviews} </h1>
                        </div>
                    </div>
                    <button onClick={() => {
                        handleInstallation(id)
                        handleDisabled()}} className={`btn bg-[#00D390] p-5 text-white text-lg`} disabled={!isActive}> {isActive ? `Install Now (${size}M)`: 'Installed'} </button>
                </div>
            </div>

            <div className='pb-10 border-b border-b-gray-400 mb-10 mx-10'>
                <ReviewChart ratings={ratings}></ReviewChart>
            </div>

            <div className='mx-10'>
                <p className='mb-5 text-xl font-semibold'>Description</p>
                <p> {description} </p>
            </div>
        </div>
    );
};

export default AppDetails;