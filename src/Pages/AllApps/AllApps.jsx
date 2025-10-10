import React, { useState } from 'react';
import SingleApp from '../SingleApp/SingleApp';
import { IoIosApps } from "react-icons/io";
import AppError from '../Error/AppError';
import { useLoaderData } from 'react-router';
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import appErrImg from "../../assets/App-Error.png"


const AllApps = () => {

    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false)

    const appData = useLoaderData();

    const handleSearch = (e) => {

        setLoading(true); 
        
        setSearch(e.target.value);

        setTimeout(() => {
            setLoading(false); 
        }, 200);
        
        };

    const filteredApps = appData.filter(app => search.toLowerCase() === '' ? app : app.title.toLowerCase().includes(search.toLowerCase()));
    
        return (
            <div className='container mx-auto mb-20'>
    
                <div className='my-10 md:my-15 text-center'>
                    <h1 className='text-[26px] md:text-4xl font-bold flex items-center w-fit mx-auto gap-2'>Our All Applications <IoIosApps size={50} className='w-[11%]' /></h1>
                    <p className='text-gray-500 my-3 md:w-full w-[80%] mx-auto'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                
                <div className='flex md:flex-row flex-col gap-4 items-center justify-between mb-10 md:mb-5'>
                    <p className='text-xl font-semibold'>({appData.length}) Apps Found</p>
    
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                            >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required onChange={handleSearch} placeholder="Search Apps" />
                    </label>
                </div>
    
    
                <div className='grid md:grid-cols-4 gap-8 md:gap-5 w-[85%] mx-auto'>
                    
                    {
                        loading 
                        ? ( <div className='col-span-4'> 
                                <LoadingSpinner></LoadingSpinner> 
                            </div>) 
                        : filteredApps.length === 0 
                            ? ( <div className='col-span-4 text-center my-8'> 
                                    <img className='w-80 mx-auto' src={appErrImg} alt="" /> 
                                    <p className="text-3xl font-bold mt-5">No App Found</p>
                                    <p className="text-gray-500 text-sm my-2"> The App you are requesting is not found on our system.  please try another app! </p>
                                </div>) 
                            : ( filteredApps.map(app => ( <SingleApp key={app.id} singleApp={app} /> )))
                    }
                    
                </div>
            </div>
            
        );
    
};

export default AllApps;