import React, { useState, useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import './Review.css'; // Import your custom CSS

const Review = () => {
    const [currentNote, setCurrentNote] = useState(0);
    
    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const reviews = [
        { note: "I liked it", img: "/person1.jpg" },
        { note: "The food was amazing", img: "/person2.jpg" },
        { note: "Great atmosphere!", img: "/person3.jpg" }
    ];

    const handleNoteClick = (index) => {
        setCurrentNote(index);
    };

    return (
        <div className="review-container" data-aos="fade-up">
            {/* Reviews Section */}
            <div className="notes" style={{ transform: `translateX(-${currentNote * 100}%)` }}>
                {reviews.map((review, index) => (
                    <div 
                        className={`review ${currentNote === index ? 'active' : ''}`} 
                        key={index} 
                        data-aos="fade-up"
                    >
                        <img src={review.img} alt={`Review ${index + 1}`} className="review-img" />
                        <div className="note-container">
                            <p>{review.note}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dot Section */}
            <div className="dots-container">
                {reviews.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentNote === index ? 'active' : ''}`}
                        onClick={() => handleNoteClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Review;
