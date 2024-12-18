import React, { useEffect, useState } from 'react';
import './OrderPage.css'; // Make sure to create and link a CSS file for styling

const UserDetailsTable = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch user details from MongoDB
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/get-details');
        if (response.ok) {
          const data = await response.json();
          setUserDetails(data);
        } else {
          console.error('Failed to fetch user details');
        }
      } catch (error) {
        console.error('Error connecting to the server', error);
      }
    };

    fetchUserDetails();
  }, []);

  // Filter userDetails based on the search term
  const filteredUserDetails = userDetails.filter(user =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-details-container">
      <h2>Order Details</h2>
      
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      
      <table className="user-details-table">
        <thead>
          <tr>
            <th>Role</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Delivery Type</th>
            <th>Cart Items</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {filteredUserDetails.length > 0 ? (
            filteredUserDetails.map((user, index) => (
              <tr key={index}>
                <td>{user.role || "N/A"}</td>
                <td>{user.name || "N/A"}</td>
                <td>{user.email || "N/A"}</td>
                <td>{user.phone || "N/A"}</td>
                <td>{user.deliveryType || "N/A"}</td>
                <td>
                  <ul>
                    {user.cart && user.cart.length > 0 ? (
                      user.cart.map((item, i) => (
                        <li key={i}>
                          {item.title} (Qty: {item.quantity}, Price: ₹{item.price.toFixed(2)})
                        </li>
                      ))
                    ) : (
                      <li>No items in cart</li>
                    )}
                  </ul>
                </td>
                <td>₹{user.totalWithGST ? user.totalWithGST.toFixed(2) : "0.00"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No user details available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetailsTable;
