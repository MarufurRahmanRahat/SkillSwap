import React from 'react';
import star from '../assets/star.png'

const TopProvidors = () => {

    const topProviders = [
    { name: "Alex Martin", rating: 4.9, students: 150, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" },
    { name: "Sara Hossain", rating: 4.8, students: 120, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150" },
    { name: "Priya Sharma", rating: 4.9, students: 200, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150" },
    { name: "Rafi Ahmed", rating: 4.7, students: 95, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" }
  ];
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Top Rated Providers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {topProviders.map((provider, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
              <img src={provider.image} alt={provider.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-semibold mb-2">{provider.name}</h3>
              <div className="flex items-center justify-center mb-2">
                <img src={star}  className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm">{provider.rating}</span>
              </div>
              <p className="text-sm text-gray-600">{provider.students} students</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default TopProvidors;