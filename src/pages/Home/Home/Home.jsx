import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import Services from '../Services/Services';
import Companies from '../Companies/Companies';
import Advertisement from '../Advertisement/Advertisement';
import Merchant from '../Merchant/Merchant';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Services></Services>
            <Companies></Companies>
            <Advertisement></Advertisement>
            <Merchant></Merchant>
        </div>
    );
};

export default Home;