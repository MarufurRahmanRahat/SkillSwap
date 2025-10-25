
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
      image: "https://cdn.pixabay.com/photo/2018/01/24/17/33/light-bulb-3104355_1280.jpg",
      buttonText: "Get Started"
    },
    {
      id: 2,
      title: "Share Your Expertise",
      subtitle: "Earn money teaching what you love",
      image: "https://cdn.pixabay.com/photo/2016/01/08/14/38/coffee-1128134_1280.jpg",
      buttonText: "Become a Provider"
    },
    {
      id: 3,
      title: "Join Our Community",
      subtitle: "Thousands of skills waiting to be discovered",
      image: "https://cdn.pixabay.com/photo/2020/05/24/23/44/hands-5216585_1280.jpg",
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
    <div className="hero-section ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
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


              <div className="absolute inset-0  bg-opacity-50"></div>


              <div className="relative h-full flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl mb-8 animate-fade-in-up animation-delay-200">
                    {slide.subtitle}
                  </p>
                  <button onClick={() => navigate('/apps')} className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400">
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