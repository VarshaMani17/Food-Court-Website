import React, { useState } from 'react';
import './VegPage.css';
import gobirice from '../assets/gobirice.jpg'
import butternaan from '../assets/butternaan.jpg'
import masaldosa from '../assets/masaldosa.jpg'
import mushroomrice from '../assets/mushroomrice.jpg'
import parotta from '../assets/parotta.jpg'
import roast from '../assets/roast.jpg'
import poori from '../assets/poori.jpg'
import rice from '../assets/shezfried.jpg'


const VegPage = () => {
  const vegItems = [
    {
      _id: "1",
      name: "Gobi Rice",
      price: 70,
      imageUrl: gobirice
    },
    {
      _id: "2",
      name: "Butter Naan",
      price: 30,
      imageUrl: butternaan
    },
    {
      _id: "3",
      name: "Masala Dosa",
      price: 90,
      imageUrl: masaldosa
    },
    {
      _id: "4",
      name: "Mushroom Rice",
      price: 70,
      imageUrl: mushroomrice
    },
    {
      _id: "5",
      name: "Parotta",
      price: 15,
      imageUrl: parotta
    },
    {
      _id: "6",
      name: "Roast",
      price: 20,
      imageUrl: roast
    },
    {
      _id: "7",
      name: "Poori",
      price: 20,
      imageUrl: poori
    },
    {
      _id: "8",
      name: "Shezwan Fried Rice",
      price: 80,
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
      <h1 className='veg-page-title'>Vegetarian Dishes</h1>
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
