import React from 'react';
import reviewQuote from '../../../assets/reviewQuote.png';

const ReviewCard = ({ review }) => {
    const { review: testomonial, user_photoURL, userName, designation } = review;

    return (
        <div className='p-3 lg:p-10 bg-white rounded-2xl'>
            <img src={reviewQuote} alt={`reviewQuote icon`} />
            <p>{testomonial}</p>
            <div className="my-3 border border-dashed border-icon"></div>
            <div className="flex flex-col lg:flex-row lg:flex-wrap items-center lg:gap-5">
                <img src={user_photoURL} alt={`${userName} image`} className='rounded-full object-cover w-10' />
                <div>
                    <h1 className="title">{userName}</h1>
                    <p>{designation}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;