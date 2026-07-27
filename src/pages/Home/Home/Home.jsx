import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import Services from '../Services/Services';
import Companies from '../Companies/Companies';
import Advertisement from '../Advertisement/Advertisement';
import Merchant from '../Merchant/Merchant';
import Reviews from '../Reviews/Reviews';
import Faq from '../Faq/Faq';

const reviewsPromise = fetch('/reviews.json')
    .then(res => res.json());

const faqPromise = fetch('/faq.json')
    .then(res => res.json());


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Services></Services>
            <Companies></Companies>
            <Advertisement></Advertisement>
            <Merchant></Merchant>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
            <Faq faqPromise={faqPromise}></Faq>
        </div>
    );
};

export default Home;