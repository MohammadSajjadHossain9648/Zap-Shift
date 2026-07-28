import React, { use } from 'react';
import FaqCard from './FaqCard';
import { NavLink } from 'react-router';
import aboveArrow from '../../../assets/aboveArrow.png';

const Faq = ({ faqPromise }) => {
    const faqs = use(faqPromise);

    return (
        <div>
            <div className="md:w-2/3 mx-auto text-center py-10">
                <h1 className="title text-4xl">Frequently Asked Question (FAQ)</h1>
                <p className="pt-3">Find quick answers to the most common questions about our parcel delivery services, booking process, tracking, payments, and delivery policies.</p>
            </div>
            <div className='md:w-4/5 mx-auto'>
                {
                    faqs.map(faq => <FaqCard key={faq.id} faq={faq}></FaqCard>)
                }

                <div className="flex items-center justify-center">
                    <NavLink to="#" className="btn active_btn rounded-xl">
                        See More FAQ’s
                    </NavLink>
                    <img src={aboveArrow} alt="aboveArrow icon" className="w-9 h-9" />
                </div>
            </div>
        </div>
    );
};

export default Faq;