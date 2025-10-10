import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp, removeFromDB } from '../../utility/addToDB';
import InstalledApp from '../InstalledApp/InstalledApp';
import { FaDownload } from "react-icons/fa6";
import NoAppInstalled from '../Error/NoAppInstalled';

const InstalledApps = () => {

    const [appInstalled, setAppInstalled] = useState([]);
    const [sort, setSort] = useState("");

    const data = useLoaderData();

    useEffect(() => {
        const storedAppData = getStoredApp();
        const convertedAppData = storedAppData.map(id => parseInt(id));
        const eachInstalledApp = data.filter(app => convertedAppData.includes(app.id));
        // console.log(eachInstalledApp);
        setAppInstalled(eachInstalledApp);
    }, [])

    const handleSort = type => {
        setSort(type)
        if (type === "High to Low") {
            const sortedHighToLow = [...appInstalled].sort((a, b) => b.downloads - a.downloads);
            setAppInstalled(sortedHighToLow);
        }

        if (type === "Low to High") {
            const sortedLowToHigh = [...appInstalled].sort((a, b) => a.downloads - b.downloads);
            setAppInstalled(sortedLowToHigh);
        }
    }

    const handleDelete = (app) => {
        const filtered = appInstalled.filter(ap => ap.id !== app.id);
        setAppInstalled(filtered);
        removeFromDB(app.id);
    }

    return (
        <div className='container mx-auto mb-20 w-[90%]'>
            <div className='my-10 md:my-15 text-center'>
                <h1 className='text-2xl md:text-4xl font-bold flex items-center w-fit mx-auto gap-2'>Your Installed Apps <FaDownload /> </h1>
                <p className='text-gray-500 my-3'>Explore All Apps on the Market developed by us</p>
            </div>

            <div className='flex md:flex-row flex-col items-center justify-between gap-3 mb-8 md:mb-5'>
                <p className='text-xl font-semibold'>{appInstalled.length} Apps Found</p>

                <details className="dropdown">
                    <summary className="btn m-1">Sort by Downloads{sort ? ': '+ sort : ''}</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => handleSort("High to Low")}><a>High to Low</a></li>
                        <li onClick={() => handleSort("Low to High")}><a>Low to High</a></li>
                    </ul>
                </details>
            </div>

            {
                (() => {
                    if (appInstalled.length === 0) {
                        return <NoAppInstalled></NoAppInstalled>
                    }
                    
                    return(
                        <div className='grid gap-3 '>
                            {
                                appInstalled.map(app => <InstalledApp key={app.id} app={app} 
                                    setAppInstalled={setAppInstalled} 
                                    appInstalled={appInstalled}
                                    handleDelete={handleDelete}></InstalledApp>)
                            }
                        </div>
                    )
                })()
            }
        </div>
    );
};

export default InstalledApps;