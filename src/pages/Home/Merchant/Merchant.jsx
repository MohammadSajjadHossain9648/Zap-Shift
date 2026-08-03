import React from 'react';
import merchantBg from '../../../assets/be-a-merchant-bg.png';
import location from '../../../assets/location-merchant.png';
import { NavLink } from 'react-router';

const Merchant = () => {
    return (
        <div className='relative w-11/12 mx-auto p-5 md:p-10 my-15 bg-green_bg rounded-3xl'>
            <img src={merchantBg} alt={`merchant Bg icon`} className="absolute top-0" />

            <div className="md:w-2/3">
                <h1 className="title2">Merchant and Customer Satisfaction <br />is Our First Priority</h1>
                <p className="subtitle py-5 md:w-4/5">We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>

                <div className='flex flex-wrap items-center gap-4'>
                    <NavLink to={'#'} className='btn active_btn bg-green_bg text-secondary_green border-2 border-secondary_green rounded-3xl font-bold'>Become a Merchant</NavLink>
                    <NavLink to={'#'} className='btn active_btn bg-green_bg text-secondary_green border-2 border-secondary_green rounded-3xl font-bold'>Earn with ZapShift Courier</NavLink>
                </div>
                <img src={location} alt={`location-merchant icon`} className='absolute right-5 bottom-5 md:right-10 md:bottom-10 w-50 md:w-xs lg:w-sm' />
            </div>

        </div>
    );
};

export default Merchant;