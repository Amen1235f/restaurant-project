import React, { useEffect } from 'react';
import './Booking.css'; // Import the CSS file for styling
import { FaUtensils } from 'react-icons/fa'; // Import a fancy icon for added luxury
import AOS from 'aos';
import 'aos/dist/aos.css';

const Booking = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="booking-container" data-aos="fade-up">
            <div className="left-side">
                <h1 className="booking-title">
                    <FaUtensils className="icon" /> Make Your Reservation
                </h1>
                <p className="booking-description">
                    We invite you to indulge in a unique culinary experience. Reserve your table today and enjoy the finest flavors in a luxurious atmosphere.
                </p>
                <button className="booking-button" data-aos="zoom-in">Book Now</button>
            </div>
            <div className="right-side" data-aos="fade-left">
                <img src="/rest.jpg" alt="Restaurant Interior" className="booking-image" />
            </div>
        </div>
    );
};

export default Booking;
