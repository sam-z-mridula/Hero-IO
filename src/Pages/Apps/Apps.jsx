import React, { Suspense } from 'react';
import SingleApp from '../SingleApp/SingleApp';
import { TrendingUp } from 'lucide-react';
import { Link } from 'react-router';

const Apps = ({appData}) => {
    return (
        <div className='text-center mb-20 w-[90%] md:container mx-auto'>
            <h1 className="text-5xl font-semibold text-[#152739] flex items-center w-fit mx-auto gap-2">Trending Apps <TrendingUp className='text-violet-700' size={60}></TrendingUp> </h1>
            <p className='my-5 mb-10 text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            <Suspense fallback={<span>Loading...</span>}>
                <div className='grid md:grid-cols-4 gap-5'>
                    {
                        appData.map(app => <SingleApp key={app.id} singleApp={app}></SingleApp>)
                    }
                </div>
            </Suspense>

            <Link to='/all-apps' className='mt-15 btn px-7 py-6 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-lg font-medium text-white'> Show All </Link>
        </div>
    );
};

export default Apps;