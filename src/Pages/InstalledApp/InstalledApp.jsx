import { Download } from 'lucide-react';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';

const InstalledApp = ({app, handleDelete}) => {

    const {image, title, downloads, ratingAvg, size} = app;

    const handleRemove = () => {
        handleDelete(app);
        toast.error("App Uninstalled");
    }

    return (
        <div className='flex md:flex-row flex-col justify-between md:items-center bg-white rounded-xl py-3 px-2 md:p-3 shadow-sm'>
            <div className='flex items-center gap-3'>
                <img className='w-18 rounded-lg' src={image} alt="" />
                <div className='grid gap-1'>
                    <h1 className='text-lg font-medium'>{title}</h1>

                    <div className='flex items-center gap-5 text-sm'>
                        <span className="flex items-center gap-1 py-1 rounded-lg text-[#00D390] font-semibold"> <Download className="h-4"></Download> {downloads}M </span>

                        <span className="flex items-center gap-1 py-1 rounded-lg text-orange-500"> <FaStar className="h-4 "></FaStar> {ratingAvg} </span>

                        <span className='text-gray-500'>{size} MB</span>

                        <div className='md:hidden'>
                            <button onClick={() => {
                                handleRemove()
                            }} className='btn bg-[#00D390] text-white rounded-lg'>Uninstall</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='hidden md:flex'>
                <button onClick={() => {
                    handleRemove()
                }} className='btn bg-[#00D390] text-white rounded-lg'>Uninstall</button>
            </div>
        </div>
    );
};

export default InstalledApp;