import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannerImg1 from '../../../assets/banner1.png';
import bannerImg2 from '../../../assets/banner2.png';
import bannerImg3 from '../../../assets/banner3.png';
import bannerTopImg from '../../../assets/tiny-deliveryman.png';
import { NavLink } from 'react-router';
import aboveArrow from '../../../assets/aboveArrow.png'

const Banner = () => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            showIndicators={true}
            className='mt-5 md:p-10 p-5 bg-white rounded-3xl'
        >
            {/* banner 1 */}
            <div className="flex flex-col md:flex-row md:justify-between">
                <div className='md:w-1/2 text-left'>
                    <div className='w-[32%]'>
                        <img src={bannerTopImg} alt="tiny-deliveryman image" />
                    </div>
                    <h1 className='title text-2xl lg:text-4xl'>We Make Sure Your <br /><span className='text-primary_green'>Parcel Arrives</span> On Time <br />– No Fuss</h1>
                    <p className='py-5'>Safe, reliable, and on-time parcel delivery with real-time tracking for complete peace of mind.</p>
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center">
                            <NavLink to="#" className="btn rounded-4xl">
                                Track Your Parcel
                            </NavLink>
                            <img src={aboveArrow} alt="aboveArrow icon" className="w-9 h-9" />
                        </div>

                        <NavLink to="#" className="btn rounded-xl">
                            Be A Rider
                        </NavLink>
                    </div>
                </div>

                <div className="md:w-2/5 flex items-center">
                    <img src={bannerImg1} alt="Banner image 1" className='max-h-[80%]' />
                </div>
            </div>

            {/* banner 2 */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className='md:w-1/2 text-left'>
                    <h1 className='title text-2xl lg:text-4xl'>Fastest <br /><span className='text-primary_green'>Delivery & </span>Easy <br /><span className='text-primary_green'>Pickup</span></h1>
                    <p className='py-5'>Get your packages delivered quickly or pick them up effortlessly at your nearest collection point.</p>
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center">
                            <NavLink to="#" className="btn rounded-4xl">
                                Track Your Parcel
                            </NavLink>
                            <img src={aboveArrow} alt="aboveArrow icon" className="w-9 h-9" />
                        </div>

                        <NavLink to="#" className="btn rounded-xl">
                            Be A Rider
                        </NavLink>
                    </div>
                </div>

                <div className="md:w-2/5 flex items-center">
                    <img src={bannerImg2} alt="Banner image 2" className='max-h-[80%]' />
                </div>
            </div>

            {/* banner 3 */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className='md:w-1/2 text-left'>
                    <h1 className='title text-2xl lg:text-4xl'>Delivery in <span className='text-primary_green'>30 <br />Minutes</span> at Your <br />Doorstep</h1>
                    <p className='py-5'>Our express delivery service brings your urgent parcels straight to your doorstep in just 30 minutes.</p>
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center">
                            <NavLink to="#" className="btn rounded-4xl">
                                Track Your Parcel
                            </NavLink>
                            <img src={aboveArrow} alt="aboveArrow icon" className="w-9 h-9" />
                        </div>

                        <NavLink to="#" className="btn rounded-xl">
                            Be A Rider
                        </NavLink>
                    </div>
                </div>

                <div className="md:w-2/5 flex items-center">
                    <img src={bannerImg3} alt="Banner image 3" className='max-h-[80%]' />
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;