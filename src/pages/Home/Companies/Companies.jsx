import React from 'react';
import companiesImg1 from '../../../assets/brands/casio.png';
import companiesImg2 from '../../../assets/brands/amazon.png';
import companiesImg3 from '../../../assets/brands/moonstar.png';
import companiesImg4 from '../../../assets/brands/star.png';
import companiesImg5 from '../../../assets/brands/start_people.png';
import companiesImg6 from '../../../assets/brands/randstad.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';


const companiesData = [companiesImg1, companiesImg2, companiesImg3, companiesImg4, companiesImg5, companiesImg6];

const Companies = () => {
    return (
        <div className='w-11/12 mx-auto my-15'>
            <h1 className="title text-2xl text-center pb-5">We've helped thousands of sales teams</h1>
            <Swiper
                slidesPerView={5}
                centeredSlides={true}
                spaceBetween={10}
                grabCursor={true}
                loop={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {
                    companiesData.map((data, index) => (
                        <SwiperSlide key={index}>
                            <img src={data} alt={`companies image ${index + 1}`} className='h-5' />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Companies;