import React, { useEffect, useState } from "react";
import './Slider.css'; 
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const sliders = [
        '/design4.jpg',
        '/design6.jpg',
        '/design5.jpg'
    ];

    const handleClickDot = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with desired duration
    }, []);

    return (
        <div className="slider-container" data-aos="fade-up"> {/* Professional fade-up animation for the container */}
            <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {sliders.map((slide, index) => (
                    <div className="slide" key={index} data-aos="slide-up"> {/* Use slide-up for each slide */}
                        <img src={slide} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>

            {/* Overlay Div */}

            <div className="dots-container">
                {sliders.map((_, index) => (
                    <span 
                        key={index} 
                        className={`dot ${currentSlide === index ? 'active' : ''}`} 
                        onClick={() => handleClickDot(index)} 
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slider;
