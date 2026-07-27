import React from 'react';
import expressDelivery from '../../../assets/expressDelivery.png';
import nationwideDelivery from '../../../assets/nationwideDelivery.png';
import fulfillmentSolution from '../../../assets/fulfillmentSolution.png';
import delivery from '../../../assets/delivery.png';
import corporateLogistics from '../../../assets/corporateLogistics.png';
import parcelReturn from '../../../assets/parcelReturn.png';

const servicesData = [
    {
        "id": 1,
        "title": "Express & Standard Delivery",
        "subtitle": "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
        "image": expressDelivery
    },
    {
        "id": 2,
        "title": "Nationwide Delivery",
        "subtitle": "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
        "image": nationwideDelivery
    },
    {
        "id": 3,
        "title": "Fulfillment Solution",
        "subtitle": "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
        "image": fulfillmentSolution
    },
    {
        "id": 4,
        "title": "Cash on Home Delivery",
        "subtitle": "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
        "image": delivery
    },
    {
        "id": 5,
        "title": "Corporate Service / Contract Logistics",
        "subtitle": "Customized corporate services which includes warehouse and inventory management support.",
        "image": corporateLogistics
    },
    {
        "id": 6,
        "title": "Parcel Return",
        "subtitle": "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
        "image": parcelReturn
    }
]

const Services = () => {
    return (
        <div className='p-5 md:p-20 bg-green_bg rounded-3xl'>
            <div className="md:w-3/4 mx-auto text-center">
                <h1 className="title2 pb-3">Our Services</h1>
                <p className="subtitle2">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 ">
                {
                    servicesData.map(data => (
                        <div key={data.id} className="rounded-xl bg-white p-5 flex flex-col items-center text-center">
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

export default Services;