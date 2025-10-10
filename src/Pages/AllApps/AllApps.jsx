import React, { useState } from 'react';
import SingleApp from '../SingleApp/SingleApp';
import { IoIosApps } from "react-icons/io";
import AppError from '../Error/AppError';
import { useLoaderData } from 'react-router';
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";


const AllApps = () => {

    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false)

    const appData = useLoaderData();

    const handleSearch = (e) => {

        setLoading(true); 
        
        setSearch(e.target.value);

        setTimeout(() => {
            setLoading(false); 
        }, 350);
        
        };

    const filteredApps = appData.filter(app => search.toLowerCase() === '' ? app : app.title.toLowerCase().includes(search.toLowerCase()));
    
        return (
            <div className='container mx-auto mb-20'>
    
                <div className='my-15 text-center'>
                    <h1 className='text-4xl font-bold flex items-center w-fit mx-auto gap-2'>Our All Applications <IoIosApps size={50} /></h1>
                    <p className='text-gray-500 my-3'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                
                <div className='flex items-center justify-between mb-5'>
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
    
    
                <div className='grid md:grid-cols-4 gap-5'>
                    
                    {
                        loading 
                        ? ( <div className='col-span-4'> 
                                <LoadingSpinner></LoadingSpinner> 
                            </div>) 
                        : filteredApps.length === 0 
                            ? ( <div className='col-span-4'> 
                                    <AppError></AppError> 
                                </div>) 
                            : ( filteredApps.map(app => ( <SingleApp key={app.id} singleApp={app} /> )))
                    }
                    
                </div>
            </div>
            
        );
    
};

export default AllApps;