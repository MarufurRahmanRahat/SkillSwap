
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import './Hero.css'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { useNavigate } from 'react-router';

const HeroSection = () => {
  const navigate = useNavigate();
  const slides = [
    {
      id: 1,
      title: "Learn New Skills Today",
      subtitle: "Connect with expert tutors in your local area",
      image: "https://ibb.co.com/d4zpZwNP",
      buttonText: "Get Started"
    },
    {
      id: 2,
      title: "Share Your Expertise",
      subtitle: "Earn money teaching what you love",
      image: "https://www.istockphoto.com/en/photo/business-colleagues-having-a-meeting-in-a-boardroom-gm1365567295-436384110",
      buttonText: "Become a Provider"
    },
    {
      id: 3,
      title: "Join Our Community",
      subtitle: "Thousands of skills waiting to be discovered",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200",
      buttonText: "Explore Skills"
    },
    {
      id: 4,
      title: "Make The World Skillful",
      subtitle: "Spread skills in the diverse world",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200",
      buttonText: "Join Now"
    }
  ];

  return (
    <div className="hero-section">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        className="h-[400px] md:h-[500px] lg:h-[600px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">

              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />


              <div className="absolute inset-0 bg-black bg-opacity-50"></div>


              <div className="relative h-full flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl mb-8 animate-fade-in-up animation-delay-200">
                    {slide.subtitle}
                  </p>
                  <button onClick={() => navigate('/apps')} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;