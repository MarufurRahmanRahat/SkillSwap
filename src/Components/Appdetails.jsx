
import { Link, useParams } from 'react-router';
import UseProducts from '../Hooks/UseProducts';

import starlogo from '../assets/icon-ratings.png'


import LoadingSpinner from './LoadingSpinner';
import Error from './Error';
import { BiDollar } from 'react-icons/bi';
import { FaRegClock } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

const Appdetails = () => {


    const { id } = useParams()
    const { products, loading } = UseProducts()
    


    // console.log(products);

    const product = products ? products.find(p => String(p.skillId) === id) : undefined
    // console.log(product);

    if (!product) {
        return <Error></Error>;
    }


    const { image, skillName, providerName, description, price, rating,category,slotsAvailable,providerEmail } = product
    // console.log(product);
    if (loading) return <LoadingSpinner></LoadingSpinner>

    const notify = () => toast.success('Session booked successfully!');
    const handleSubmit = (e) => {
        notify()
       e.preventDefault();
        e.target.reset();
    
    
   
  };
    




    return (
        <div className=" bg-gray-50 py-8">
            

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to='/'  className=" mb-6 flex items-center btn btn-secondary">
                    ← Back to Home
                </Link>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src={image} alt={skillName} className="w-full h-64 object-cover" />

                    <div className="p-8">
                        <div className="flex items-center justify-between mb-4">
                            <h1 className="text-3xl font-bold text-gray-800">{skillName}</h1>
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{category}</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div className="flex items-center">
                                <img src={starlogo} className="h-5 w-5 text-yellow-400 fill-current mr-2" />
                                <span className="text-gray-700">Rating: {rating}</span>
                            </div>
                            <div className="flex items-center">
                                <BiDollar className="h-5 w-5 text-green-600 mr-2" />
                                <span className="text-gray-700">Price: ${price}</span>
                            </div>
                            <div className="flex items-center">
                                <FaRegClock className="h-5 w-5 text-blue-600 mr-2" />  
                                <span className="text-gray-700">Slots: {slotsAvailable}</span>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-2">Description</h2>
                            <p className="text-gray-700">{description}</p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-2">Provider Information</h2>
                            <p className="text-gray-700">Name: {providerName}</p>
                            <p className="text-gray-700">Email: {providerEmail}</p>
                        </div>

                        <div className="border-t pt-6">
                            <h2 className="text-xl font-semibold mb-4">Book a Session</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder='Name'
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder='email'
                                        required
                                    />
                                </div>
                                <button  type="submit" className="w-full text-white py-3 rounded-lg font-semibold btn btn-secondary">
                                    Book Session
                                    
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appdetails;