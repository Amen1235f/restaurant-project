import React, { useState } from "react";
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS for animation
import './Subscription.css'
const Subscription = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    AOS.init(); // Initialize AOS

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            // Store email in localStorage
            localStorage.setItem('subscribedEmail', email);
            setMessage("Thank you for subscribing!");
            setEmail(""); // Clear the input after submission
        } else {
            setMessage("Please enter a valid email address.");
        }
    };

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    return (
        <div className="subscription-container" data-aos="fade-up">
            <h2 className="subscription-title" data-aos="fade-right">Subscribe to our newsletter</h2>
            <form onSubmit={handleSubmit} className="subscription-form" data-aos="fade-left">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    className="subscription-input"
                    required
                />
                <button type="submit" className="subscription-button">Submit</button>
            </form>
            {message && <p className="subscription-message">{message}</p>}
        </div>
    );
};

export default Subscription;
