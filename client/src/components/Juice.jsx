import React, { useState } from 'react';
import './VegPage.css';
import badam from '../assets/badam.jpg';
import rose from '../assets/rosemilk.jpg';
import apple from '../assets/apple.jpg';
import lemon from '../assets/lemon.jpg';
import orange from '../assets/orange.jpg';
import chpuff from '../assets/chickenpuff.jpg';
import eggpuff from '../assets/eggpuff.jpg';
import panipori from '../assets/panipori.jpg';
import bhelpori from '../assets/bhelpori.jpg';
import masalpori from '../assets/masalapori.jpg';
import samosa from '../assets/samosa.jpg'
const VegPage = () => {
  // Hardcoded veg items
  const vegItems = [
    {
      _id: "1",
      name: "Badam",
      price: 25,
      imageUrl: badam
    },
    {
      _id: "2",
      name: "Rose Milk",
      price: 25,
      imageUrl: rose
    },
    {
      _id: "3",
      name: "Apple",
      price: 40,
      imageUrl: apple
    },
    {
      _id: "4",
      name: "Lemon",
      price: 20,
      imageUrl: lemon
    },
    {
      _id: "5",
      name: "Orange",
      price: 40,
      imageUrl: orange
    },
    {
      _id: "6",
      name: "Chicken puff",
      price: 25,
      imageUrl: chpuff
    },
    {
      _id: "7",
      name: "Egg puff",
      price: 20,
      imageUrl: eggpuff
    },
    {
      _id: "8",
      name: "Pani Poori",
      price: 25,
      imageUrl: panipori
    },
    {
      _id: "9",
      name: "BelPoori",
      price: 20,
      imageUrl: bhelpori
    },
    {
      _id: "10",
      name: "MasalPoori",
      price: 30,
      imageUrl: masalpori
    },
    {
      _id: "11",
      name: "Samosa",
      price: 30,
      imageUrl: samosa
    },
    // Add more items here
  ];

  
  const [searchTerm, setSearchTerm] = useState('');

  // Handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filter items based on search input
  const filteredItems = vegItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className='veg-page-container'>
      <h1 className='veg-page-title'>Juices and Chat items</h1>
      
      {/* Search Bar */}
      <input 
        type="text" 
        placeholder="Search for items..." 
        value={searchTerm} 
        onChange={handleSearch} 
        className="search-bar"
      />

      <div className='veg-items-grid'>
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <div key={item._id} className='veg-item'>
              <img 
                src={item.imageUrl} 
                alt={item.name} 
                className='veg-item-image'
              />
              <h2 className='veg-item-name'>{item.name}</h2>
              <p className='veg-item-price'>₹{item.price}</p>
              
            </div>
          ))
        ) : (
          <p>No items found</p>
        )}
      </div>
    </div>
  );
};

export default VegPage;
