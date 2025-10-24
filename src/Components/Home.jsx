import React from 'react';
import Appcard from './Appcard';
import UseProducts from '../Hooks/UseProducts';
import { Link } from 'react-router';
import HeroSection from './HeroSection';
import HowItWorks from './HowItWorks';
import TopProvidors from './TopProvidors';


const Home = () => {

 const {products,loading,error} = UseProducts()
    // if(loading) return <LoadingSpinner></LoadingSpinner>
    const featuredProducts = products.slice(0, 6);

    return (
       <div>
            <HeroSection></HeroSection>
            <div className="p-3 sm:p-8 md:p-14 lg:p-20  py-3 sm:py-8 md:py-14 lg:py-20">
                <div className="text-center pb-10">
                    <h1 className='font-bold text-3xl md:text-5xl pb-4'>Popular Skills</h1>
                    <p className='font-normal text-[16px] sm:text-[20px] text-[#627382]'>Explore Our Trending Skills</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                    {
                        featuredProducts.map(product => (
                            <Appcard key={product.id} product={product} />
                        ))
                    }
                </div>
                <div className="py-10 text-center">
                    <Link className='btn btn-primary bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)] ' to='/apps'>See All</Link>
                </div>
            </div>
            <HowItWorks></HowItWorks>
            <TopProvidors></TopProvidors>
        </div>
    );
};

export default Home;