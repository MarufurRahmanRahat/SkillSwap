import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='fixed inset-0 flex justify-center items-center'>
            <h1 className='text-3xl text-center'>Loading... <span className="loading loading-ring loading-5xl"></span>
            </h1>
        </div>
    );
};

export default LoadingSpinner;