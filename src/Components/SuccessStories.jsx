import React from 'react';

const SuccessStories = () => {
    return (
         <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl  text-center mb-12 font-bold md:text-5xl pb-4 text-white ">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 animate__animated animate__bounceInDown hover:scale-105 transition-all ease-in-out duration-1000">
              <p className="text-gray-700 mb-4">"Learning guitar with Alex was amazing! I can now play my favorite songs."</p>
              <p className="font-semibold">- John Doe</p>
            </div>
            <div className="bg-white rounded-lg p-6 animate__animated animate__bounceInUp hover:scale-105 transition-all ease-in-out duration-1000">
              <p className="text-gray-700 mb-4">"The yoga classes helped me improve my flexibility and reduce stress."</p>
              <p className="font-semibold">- Jane Smith</p>
            </div>
            <div className="bg-white rounded-lg p-6 animate__animated animate__bounceInDown hover:scale-105 transition-all ease-in-out duration-1000">
              <p className="text-gray-700 mb-4">"I learned web development basics and built my first website!"</p>
              <p className="font-semibold">- Mike Johnson</p>
            </div>
          </div>
        </div>
      </div>
    
    );
};

export default SuccessStories;