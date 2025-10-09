import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const ReviewChart = ({ratings}) => {

    const reversedData = [...ratings].reverse();

    return (
        <div className='mt-10'>
            <h1 className='mb-5 text-xl font-semibold'>Rating</h1>
        <ResponsiveContainer width="90%" height={350}>
            <BarChart
                data={reversedData}
                layout='vertical'>
                    
                    <XAxis type='number'></XAxis>
                    <YAxis dataKey="name" type='category'></YAxis>
                    <Tooltip></Tooltip>
                    <Bar dataKey="count" fill='#ff9500' barSize={45}></Bar>
                </BarChart>
        </ResponsiveContainer>
        </div>
    );
};

export default ReviewChart;