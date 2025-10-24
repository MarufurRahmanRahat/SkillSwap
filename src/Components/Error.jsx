import React from 'react';
import { Link } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import apperror from '../assets/App-Error.png'

const Error = () => {
    return (
        <div>
            <div className='text-center p-3 sm:p-8 md:p-14 lg:p-20 bg-[#F5F5F5]'>
                <img className='mx-auto' src={apperror} alt="" />
                <h1 className='font-bold text-3xl sm:text-5xl py-4'>OPPS!! APP NOT FOUND</h1>
                <p className='font-normal text-[20px] py-1.5'>The App you are requesting is not found on our system.  please try another apps</p>
                <Link to='/apps' className='btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)] mt-4'>Go Back</Link>
            </div>
            

        </div>
    )
};

export default Error