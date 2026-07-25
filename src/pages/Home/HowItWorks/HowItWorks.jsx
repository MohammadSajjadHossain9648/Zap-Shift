import React from 'react';
import pickupIcon from '../../../assets/booking.png'
import cashIcon from '../../../assets/delivery.png'
import hubIcon from '../../../assets/hub.png'
import corporateIcon from '../../../assets/corporate.png'

const howItWorksData = [
    {
        "id": 1,
        "title": "Booking Pick & Drop",
        "subtitle": "Schedule a pickup in seconds and let our riders collect your parcel from your doorstep.",
        "image": pickupIcon
    },
    {
        "id": 2,
        "title": "Cash On Delivery",
        "subtitle": "Collect payments securely upon delivery and receive fast settlement for every successful order.",
        "image": cashIcon
    },
    {
        "id": 3,
        "title": "Delivery Hub",
        "subtitle": "Parcels are sorted and dispatched efficiently through our nationwide delivery hub network.",
        "image": hubIcon
    },
    {
        "id": 4,
        "title": "Booking SME & Corporate",
        "subtitle": "Flexible logistics solutions tailored for SMEs and corporate businesses with bulk delivery support.",
        "image": corporateIcon
    }
]

const HowItWorks = () => {
    return (
        <div className='w-11/12 mx-auto px-5 my-15 bg-white rounded-3xl'>
            <h1 className="title text-xl">How it Works</h1>

            <div className="grid grid-flow-row md:grid-flow-col gap-10 py-5">
                {
                    howItWorksData.map(data => (
                        <div key={data.id}>
                            <img src={data.image} alt={`${data.title} icon`} className='w-10' />
                            <h1 className="title py-3">{data.title}</h1>
                            <p>{data.subtitle}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HowItWorks;