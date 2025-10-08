import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import SingleApp from '../SingleApp/SingleApp';

const AllApps = () => {

    const appData = useLoaderData();
    console.log(appData);

    return (
        <div className='container mx-auto mb-20'>

            <div className='my-15 text-center'>
                <h1 className='text-4xl font-bold'>Our All Applications</h1>
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
                    <input type="search" required placeholder="Search Apps" />
                </label>
            </div>

            <Suspense fallback={<span>Loading...</span>}>
                <div className='grid md:grid-cols-4 gap-3'>
                    {
                        appData.map(app => <SingleApp key={app.id} singleApp={app}></SingleApp>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default AllApps;