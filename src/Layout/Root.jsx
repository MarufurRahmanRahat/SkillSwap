import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='max-w-screen-2xl w-full flex-1'>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;