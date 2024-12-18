import React, { useState } from 'react';
import './VegPage.css';
import gobirice from '../assets/chrice.jpg'
import butternaan from '../assets/ctikka.jpg'
import briyani from '../assets/briyani.jpeg'
import mushroomrice from '../assets/chicken65.jpg'
import parotta from '../assets/chnoodles.jpg'
import poori from '../assets/poori.jpg'
import rice from '../assets/shezfried.jpg'


const VegPage = () => {
  const vegItems = [
    {
      _id: "1",
      name: "Chicken Rice",
      price: 70,
      imageUrl: gobirice
    },
    {
      _id: "2",
      name: "chikken Tikka",
      price: 100,
      imageUrl: butternaan
    },
    {
      _id: "3",
      name: "Biryani",
      price: 90,
      imageUrl: briyani
    },
    {
      _id: "4",
      name: "Chicken 65",
      price: 80,
      imageUrl: mushroomrice
    },
    {
      _id: "5",
      name: "Chicken Noodles",
      price: 90,
      imageUrl: parotta
    },
    {
      _id: "6",
      name: "Poori",
      price: 20,
      imageUrl: poori
    },
    {
      _id: "7",
      name: "Shezwan Fried Rice",
      price: 20,
      imageUrl: rice
    },
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
      <h1 className='veg-page-title'>Non - Vegetarian Dishes</h1>
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
