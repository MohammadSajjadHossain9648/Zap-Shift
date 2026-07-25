import React from 'react';
import companiesImg1 from '../../../assets/brands/casio.png';
import companiesImg2 from '../../../assets/brands/amazon.png';
import companiesImg3 from '../../../assets/brands/moonstar.png';
import companiesImg4 from '../../../assets/brands/star.png';
import companiesImg5 from '../../../assets/brands/start_people.png';
import companiesImg6 from '../../../assets/brands/randstad.png';

const companiesData = [
    companiesImg1,
    companiesImg2,
    companiesImg3,
    companiesImg4,
    companiesImg5,
    companiesImg6,
];

const Companies = () => {
    return (
        <div className='w-11/12 mx-auto my-15'>
            <h1 className="title text-center pb-5">We've helped thousands of sales teams</h1>
            <div className="grid grid-flow-row md:grid-flow-col justify-between gap-10">
                {
                    companiesData.map((data, index) => (
                        <img key={index} src={data} alt={`companies image ${index + 1}`} className='h-5' />
                    ))
                }
            </div>
        </div>
    );
};

export default Companies;