import React from 'react';
import liveTracking from '../../../assets/liveTracking.png';
import safeDelivery from '../../../assets/safeDelivery.png';

const advertisementData = [
    {
        "id": 1,
        "title": "Live Parcel Tracking",
        "subtitle": "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
        "image": liveTracking
    },
    {
        "id": 2,
        "title": "100% Safe Delivery",
        "subtitle": "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
        "image": safeDelivery
    },
    {
        "id": 3,
        "title": "24/7 Call Center Support",
        "subtitle": "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
        "image": safeDelivery
    }
]

const Advertisement = () => {
    return (
        <div className='w-11/12 mx-auto py-15 border-y border-dashed border-icon'>
            <div className="grid gap-5">
                {
                    advertisementData.map(data => (
                        <div key={data.id} className="bg-white p-5 rounded-2xl grid grid-cols-1 md:grid-cols-5 justify-between items-center gap-10">
                            <div className="md:col-span-1 mx-auto border-b md:border-b-0 md:border-r border-dashed border-green_bg p-5">
                                <img src={data.image} alt={`${data.title} icon`} className='w-30' />
                            </div>
                            <div className='md:col-span-4'>
                                <h1 className="title pb-3">{data.title}</h1>
                                <p>{data.subtitle}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Advertisement;