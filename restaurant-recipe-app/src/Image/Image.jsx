import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import './Image.css'; // Import the CSS file for styles

const Image = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animation
            easing: 'ease-in-out', // Easing function
            once: true, // Animation happens only once
        });
    }, []);

    return (
        <div className="image-container" data-aos="zoom-in"> {/* Fancy animation */}
            <img src="/res.jpg" alt="Italian Cuisine" className="image" />
            <div className="overlay"></div> {/* Black overlay */}
            <div className="text-overlay">
                <h2 className="discover-text">Discover</h2>
                <p className="description-text">Authentic flavors and timeless recipes of Italy.</p>
            </div>
        </div>
    );
};

export default Image;
