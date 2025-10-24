import React from 'react';
import { Link } from 'react-router';
import star from '../assets/star.png'
import down from '../assets/down.png'

const Appcard = ({ product }) => {
    const { rating, image, price, skillName, skillId } = product
    return (
        <div>
            <Link to={`/app-details/${skillId}`}>
                <div className="card bg-base-100  shadow-sm hover:scale-105 transition ease-in-out">
                    <figure className='h-48 overflow-hidden'>
                        <img className='w-full object-cover'
                            src={image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{skillName}</h2>
                        <div className="card-actions justify-between">
                            <button className="btn  bg-[#F1F5E8] text-[#00D390]">
                                ${price}</button>
                            <button className="btn  bg-[#FFF0E1] text-[#FF8811]">
                                <img src={star} alt="" />{rating}</button>
                        </div>
                        <div className="text-center mt-4">
                            <button className='btn btn-secondary w-full'>View Details</button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Appcard;