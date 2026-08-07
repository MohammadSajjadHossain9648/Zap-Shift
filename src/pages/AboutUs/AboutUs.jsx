import React from 'react';
import { useState } from "react";

const AboutUs = () => {
    const [activeTab, setActiveTab] = useState("story");

    const tabs = [
        { id: "story", label: "Story" },
        { id: "mission", label: "Mission" },
        { id: "success", label: "Success" },
        { id: "team", label: "Team & Others" },
    ];

    const content = {
        story: (
            <div className="space-y-7">
                <p>
                    We started with a simple promise — to make parcel delivery
                    fast, reliable, and stress-free. Over the years, our
                    commitment to real-time tracking, efficient logistics, and
                    customer-first service has made us a trusted partner for
                    thousands of individuals and businesses across the country.
                    We believe every parcel deserves careful handling and timely
                    delivery from pickup to destination.
                </p>

                <p>
                    Whether it's a personal gift or a time-sensitive business
                    delivery, we understand how important every parcel can be.
                    That's why we work hard to make sure every package reaches
                    its destination safely and on time. Our dedicated service
                    helps customers send their important items with confidence,
                    knowing that their parcels are handled with care throughout
                    the entire delivery process.
                </p>

                <p>
                    From the moment a parcel is picked up until it reaches its
                    destination, we focus on providing a smooth and dependable
                    delivery experience for every customer. By combining reliable
                    logistics, modern technology, and responsive customer service,
                    we continue to improve the way people send and receive parcels
                    every day.
                </p>
            </div>
        ),

        mission: (
            <div className="space-y-7">
                <p>
                    Our mission is to make parcel delivery simple, accessible,
                    and dependable for everyone. We aim to connect people and
                    businesses through a delivery service they can trust, while
                    making the entire process convenient and easy to understand.
                    Every step of our service is designed around reliability,
                    efficiency, and customer satisfaction.
                </p>

                <p>
                    We continuously improve our logistics system and use
                    technology to provide faster deliveries, accurate tracking,
                    and a better experience for our customers. By using modern
                    tools and efficient delivery processes, we aim to reduce
                    unnecessary delays and make every shipment more convenient.
                </p>

                <p>
                    Customer satisfaction is at the heart of everything we do.
                    We believe that reliable service, clear communication, and
                    responsible handling can make every delivery experience
                    better. Our goal is to build long-term relationships with
                    customers by consistently providing dependable and professional
                    parcel delivery services.
                </p>
            </div>
        ),

        success: (
            <div className="space-y-7">
                <p>
                    Our success is built on the trust and satisfaction of the
                    people and businesses who use our delivery service. Every
                    successful parcel delivery is an important part of our journey,
                    and every satisfied customer motivates us to continue improving
                    our service and expanding our capabilities.
                </p>

                <p>
                    By focusing on reliable logistics, timely delivery, and
                    customer support, we continue to build strong relationships
                    with our customers and delivery partners. Our commitment to
                    maintaining high service standards allows us to create a
                    delivery network that people can depend on for both everyday
                    packages and important shipments.
                </p>

                <p>
                    We measure our success not only by the number of parcels we
                    deliver, but also by the confidence our customers have when
                    they choose us to handle their important packages. Their trust
                    encourages us to maintain our standards, improve our operations,
                    and provide an even better delivery experience in the future.
                </p>
            </div>
        ),

        team: (
            <div className="space-y-7">
                <p>
                    Behind every successful delivery is a dedicated team.
                    Our people work together across logistics, customer support,
                    technology, and delivery operations to keep everything running
                    smoothly. Each team member plays an important role in making
                    sure parcels move safely and efficiently from one destination
                    to another.
                </p>

                <p>
                    We believe teamwork, responsibility, and communication are
                    essential to providing a dependable delivery service. Every
                    team member contributes to creating a better experience for
                    our customers, while working together to solve challenges and
                    maintain the quality of our service.
                </p>

                <p>
                    We are always looking for better ways to serve our customers,
                    improve our operations, and grow together as a team. By
                    encouraging collaboration, learning, and continuous
                    improvement, we aim to build a strong team that can provide
                    reliable service and support our customers at every step.
                </p>
            </div>
        ),
    };

    return (
        <div className="bg-white rounded-2xl my-5 p-5 md:p-15">
            {/* header */}
            <div className="border-b border-[#CBD5E1] pb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-green_bg mb-5">
                    About Us
                </h1>
                <p className="md:w-3/5">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                    From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-8 md:gap-12 mt-12">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`text-2xl transition-all duration-200 cursor-pointer
                                ${activeTab === tab.id
                                ? "font-bold text-active_nav_btn"
                                : "font-normal text-auth_secondary_text hover:text-active_nav_btn"
                            }
                                `}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="mt-12 text-justify leading-10">
                {content[activeTab]}
            </div>

        </div>
    );
};

export default AboutUs;