import React, { useEffect } from 'react';
import './About.css'; // Import the CSS file for styles
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with desired duration
    }, []);

    return (
        <div className="about-container" data-aos="fade-up"> {/* Add data-aos attribute for animation */}
            <div className="about-text" data-aos="fade-right"> {/* Animation for text */}
                <h2>Welcome</h2>
                <p>
                    Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.
                </p>
            </div>
            <div className="about-image" data-aos="fade-left"> {/* Animation for image */}
                <img src="/logo10.jpg" alt="Logo" />
            </div>
        </div>
    );
};

export default About;
