import React, { useState, useEffect } from 'react';
import '../App.css';
import { FaShoppingCart } from 'react-icons/fa';  
import './menu.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Menu() {
  const [cart, setCart] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  const GST_RATE = 0; // Assuming GST is not applicable for now
  const navigate = useNavigate();

  // Define allowed time slots for booking
  const allowedTimeSlots = [
    { start: '10:25', end: '12:45' },
    { start: '12:15', end: '15:15' },
    { start: '07:00', end: '08:45' }
  ];

  useEffect(() => {
    const fetchAvailableProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/products/available');
        setMenuItems(response.data);
      } catch (error) {
        console.error('Error fetching available products:', error);
      }
    };

    fetchAvailableProducts();
  }, []);

  const handleAddToCart = (item) => {
    setCart(prevCart => {
      const updatedCart = { ...prevCart };

      if (updatedCart[item._id]) {
        updatedCart[item._id].quantity += 0.5;
      } else {
        updatedCart[item._id] = { ...item, quantity: 1 };
      }

      return updatedCart;
    });
  };

  const handleRemoveFromCart = (item) => {
    setCart(prevCart => {
      const updatedCart = { ...prevCart };

      if (updatedCart[item._id]) {
        if (updatedCart[item._id].quantity > 1) {
          updatedCart[item._id].quantity -= 1;
        } else {
          delete updatedCart[item._id];
        }
      }

      return updatedCart;
    });
  };

  const handlePayment = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const isWithinTimeSlot = (currentTime) => {
    const currentTimeString = currentTime.toTimeString().slice(0, 5); // Get HH:mm format
    return allowedTimeSlots.some(slot => 
      currentTimeString >= slot.start && currentTimeString <= slot.end
    );
  };

  const handleOrderType = (type) => {
    const currentTime = new Date();

    if (type === 'Book a Table' && !isWithinTimeSlot(currentTime)) {
      alert('Booking is only allowed between the specified time slots: ' + 
        allowedTimeSlots.map(slot => `${slot.start} to ${slot.end}`).join(', ')
      );
      return;
    }

    setIsModalOpen(false);

    // Convert cart object to array
    const cartArray = Object.values(cart);

    // Calculate totals
    const totalItems = cartArray.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartArray.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const gstAmount = totalPrice * GST_RATE;
    const totalWithGST = totalPrice + gstAmount;

    if (type === 'Book a Table') {
      navigate('/book-table', { state: { totalWithGST, cart: cartArray } });
    } else if (type === 'Home Delivery') {
      navigate('/home-delivery', { state: { totalWithGST, cart: cartArray } });
    } else if (type === 'Take Away') {
      navigate('/take-away', { state: { totalWithGST, cart: cartArray } });
    }
  };

  const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = Object.values(cart).reduce((sum, item) => sum + item.price * item.quantity, 0);
  const gstAmount = totalPrice * GST_RATE;
  const totalWithGST = totalPrice + gstAmount;

  return (
    <>
      <div className='m-bg'>
        <div className='text-container'>
          <div className='text-style'>KEC Food-Court Menu</div>
          
          {/* Buttons for navigation */}
          <div className='menu-navigation'>
            <button onClick={() => navigate('/veg')} className='nav-btn'>Veg</button>
            <button onClick={() => navigate('/nonveg')} className='nav-btn'>Non - Veg</button>
            <button onClick={() => navigate('/juice')} className='nav-btn'>Juices / Chat items</button>
          </div>
        </div>
  
        <div className='cart-icon-container'>
          <div className='logo1'>
            <FaShoppingCart size={50} className='logo'/>
            {totalItems > 0 && <span className='cart-count'>{totalItems}</span>}
          </div>
          <div className='cart-dropdown'>
            <h2>Your Cart</h2>
            {totalItems > 0 ? (
              <>
                <ul>
                  {Object.values(cart).map(item => (
                    <li key={item._id}>
                      {item.title} - {item.quantity} x ₹{item.price} = ₹{item.quantity * item.price}
                      <button onClick={() => handleAddToCart(item)}>+</button>
                      <button onClick={() => handleRemoveFromCart(item)}>-</button>
                    </li>
                  ))}
                </ul>
                <div>
                  <p>Total Price: ₹{totalPrice}</p>
                  <center><button onClick={handlePayment} className='confirm-btn'>Proceed to Confirm</button></center>
                </div>
              </>
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
        </div>
      </div>
  
      {/* Modal for selecting order type */}
      {isModalOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <button onClick={() => handleOrderType('Book a Table')}>Book a Pre-Order</button>
            <button onClick={handleModalClose}>Close</button>
          </div>
        </div>
      )}
  
      <div className='m1-bg'>
        <div className='menu-mainbox'>
          {menuItems.map(item => (
            <div key={item._id} className='menu-innerbox'>
              <img 
                src={`http://localhost:3001/${item.imageUrl}`} 
                alt={item.title} 
                className='menu-image' 
                onError={(e) => e.target.src = '/path/to/default-image.jpg'}
              />
              <h2 className='menu-title'>{item.title}</h2>
              <p className='menu-price'>Price: ₹{item.price}</p>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
  
  
}

export default Menu;
