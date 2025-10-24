import React, { useEffect } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { PiUsersThreeFill } from 'react-icons/pi';
import { VscGraphLine } from 'react-icons/vsc';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HowItWorks = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true, 
            offset: 100, 
            easing: 'ease-in-out', 
        });
    }, []);

    const howItWorks = [
        { title: "Browse Skills", desc: "Explore local skill providers" },
        { title: "Book Session", desc: "Choose your time and date" },
        { title: "Learn & Grow", desc: "Master new abilities" }
    ];

    return (
        <div data-aos="fade" className="bg-blue-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {howItWorks.map((item, index) => (
                        <div key={index} className="text-center" data-aos={item.animation}
                            data-aos-delay={item.delay}
                            data-aos-duration="1000">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4 transform transition-transform hover:scale-110">
                                {
                                    (index == 0) ?
                                        <PiUsersThreeFill className="h-8 w-8" /> :
                                        (index == 1) ? <FiCheckCircle className="h-8 w-8" /> :
                                            <VscGraphLine className="h-8 w-8" />
                                }
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;