import React, { useState } from 'react';

const FaqCard = ({ faq }) => {
    const { question, answer } = faq;

    const [active, setActive] = useState(false);
    const handleToChange = () => {
        setActive(!active);
    }

    return (
        <div>
            <div className={`collapse collapse-arrow my-5 p-2 rounded-2xl ${active ? 'bg-faq_green' : 'bg-white'}`}>
                <input type="checkbox" onClick={handleToChange} />
                {/* <input type="radio" name="my-accordion-2" /> */}
                <div className="collapse-title title">{question}</div>
                <div className="collapse-content">
                    <div className="border-t border-dashed border-green_bg pt-2">{answer}</div>
                </div>
            </div>
        </div>
    );
};

export default FaqCard;