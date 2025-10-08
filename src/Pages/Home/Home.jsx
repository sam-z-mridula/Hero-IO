import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Apps from '../Apps/Apps';
import { useLoaderData } from 'react-router';

const Home = () => {

    const appData = useLoaderData();
    // console.log(appData);

    return (
        <div>
            <Banner></Banner>
            <Apps appData={appData}></Apps>
        </div>
    );
};

export default Home;