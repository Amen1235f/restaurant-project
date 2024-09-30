// MenuItem.js
import React from 'react';
import './MenuItem.css';

const MenuItem = ({ handleMenuItemChange }) => {
  const menuItems = [
    { name: 'Pine Nut Sbrisalona', price: 29.79 },
    { name: 'Aenean eu', price: 19.35 },
    { name: 'Sed feugiat', price: 12.19 },
    { name: 'Consectetur', price: 21.89 },
    { name: 'Vivamus pretium', price: 29.79 },
    { name: 'Duis pharetra ligula', price: 19.35 },
    { name: 'In eu dolor', price: 53.34 },
    { name: 'Feugiat maximus', price: 62.45 },
    { name: 'Duis sed aliquet', price: 31.18 },
    { name: 'Suspendisse', price: 70.25 },
    { name: 'Scelerisque sed', price: 36.19 },
    { name: 'Mollis nulla', price: 19.50 },
    { name: 'Convallis augue', price: 29.15 },
    { name: 'Maecenas tristique', price: 29.79 },
    { name: 'Duis tincidunt', price: 19.35 },
    { name: 'Tempus aliquet', price: 9.79 },
    { name: 'Scelerisque', price: 19.35 },
    { name: 'Cras maximus', price: 5.79 }
  ];

  return (
    <div className="menu-container">
      <h1 className="menu-title">Our Menu</h1>

      {menuItems.map(item => (
        <div key={item.name} className="menu-section">
          <div className="menuMenu">
            <label>
              <input 
                type="checkbox" 
                onChange={(e) => handleMenuItemChange(item, e.target.checked)} 
              />
              <span className="menu-item-name">{item.name}</span>
              <span className="menu-item-price">${item.price.toFixed(2)}</span>
            </label>
          </div>
          <p className="menu-item-description">Description for {item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuItem;
