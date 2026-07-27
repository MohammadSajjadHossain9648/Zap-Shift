import React, { use } from 'react';
import reviewIcon from '../../../assets/customer-top.png';
import ReviewCard from './ReviewCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise);

    return (
        <div>
            <div className="flex flex-col items-center text-center">
                <img src={reviewIcon} alt='customer-top icon' className='w-60' />
                <div className="md:w-2/3 mx-auto py-10">
                    <h1 className="title text-4xl">What our customers are sayings</h1>
                    <p className="pt-3">Every successful delivery creates a happy customer. Here's what they have to say about their experience with us.</p>
                </div>
            </div>

            <Swiper
                loop={true}
                spaceBetween={60}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: '50%',
                    depth: 200,
                    modifier: 1,
                    slideShadows: true,
                    scale: 0.9,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className="mySwiper"
            >
                {
                    reviews.map(review => (
                        <SwiperSlide key={review.id}>
                            <ReviewCard review={review}></ReviewCard>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Reviews;