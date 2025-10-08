import React, { Suspense } from 'react';
import SingleApp from '../SingleApp/SingleApp';
import { TrendingUp } from 'lucide-react';

const Apps = ({appData}) => {
    return (
        <div className='text-center mb-20 w-[90%] md:container mx-auto'>
            <h1 className="text-5xl font-semibold text-[#152739] flex items-center w-fit mx-auto gap-2">Trending Apps <TrendingUp className='text-violet-700' size={60}></TrendingUp> </h1>
            <p className='my-5 mb-10 text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
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

export default Apps;