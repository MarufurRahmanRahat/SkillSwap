import React, { useState } from 'react';
import UseProducts from '../Hooks/UseProducts';
import Appcard from './Appcard';
import LoadingSpinner from './LoadingSpinner';

const Apps = () => {

    const { products, loading } = UseProducts()

    const [loader, setLoader] = useState(false);
    
    

    if (loading) return <LoadingSpinner></LoadingSpinner>

    return (
        <div>
            <div className="p-3 sm:p-8 md:p-14 lg:p-20  py-3 sm:py-8 md:py-14 lg:py-20">
                <div className="text-center pb-10">
                    <h1 className='font-bold text-3xl md:text-5xl pb-4'>Our All Programs</h1>
                    <p className='font-normal text-[20px]'>Explore All Skill Programs provided by us. We work for better world.</p>
                </div>

                {
                    loader && <LoadingSpinner></LoadingSpinner>
                }
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">

                    <Appcard key={product.skillId} product={product} />





                </div>
                {/* <div className="py-10 text-center">
                    <Link className='btn btn-primary ' to='/apps'>Show All</Link>
                </div> */}
            </div>
        </div >
    );
};

export default Apps;