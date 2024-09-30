import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import './Menu.css'; // Import the CSS file for styles

const Menu = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-in-out', once: true }); // Initialize AOS
    }, []);

    const menuItems = [
        { name: "Starter", img: "/starter.jpg" },
        { name: "Lunch", img: "/lunch.jpg" },
        { name: "Happy Hour", img: "/happyhour.jpg" },
        { name: "Drink", img: "/drink.jpg" },
        { name: "Dinner", img: "/dinner.jpg" },
        { name: "Dessert", img: "/desert.jpg" }
    ];

    return (
        <div className="menu-container">
            <h1 className="menu-title" data-aos="fade-up">Discover Our Menu</h1>
            <div className="menu-grid">
                {menuItems.map((item, index) => (
                    <div 
                        className={`menu-item item-${index}`} 
                        key={index}
                        data-aos="fade-up" // Add AOS animation to each menu item
                    >
                        <img src={item.img} alt={item.name} className="menu-image" />
                        <button className="menu-button" data-aos="zoom-in">{item.name}</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
