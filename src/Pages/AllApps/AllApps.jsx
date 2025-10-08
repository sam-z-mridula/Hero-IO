import React from 'react';
import { useLoaderData } from 'react-router';

const AllApps = () => {

    const appData = useLoaderData();
    console.log(appData);

    return (
        <div className='w-fit mx-auto'>
            All Apps
        </div>
    );
};

export default AllApps;