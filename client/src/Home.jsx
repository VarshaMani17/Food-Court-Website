import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'
function Home() {
  return (
  <>
  <div className='h-bg'>
    <br/><br/> <br/><br/> <br/><br/> <br/>
    <div className='h-font'>
       Freshness in Every Bite
    </div>
    <div className='q-f'><br/>
    Explore a variety of delicious meals from our<br/> food court, perfect for dine-in or takeaway.
    <br/><br/>
    <Link to='/menu'>
    <button className='btn'>Order Now</button></Link>
    </div>
    {/* <div className='s-f'>
      Traditional Kudil Restaurant
    </div> */}
    </div>
    {/* <img src={b} width={1100} height={300} alt='nope' /> */}
    <hr />
    {/* <div className='s-f'>
      Traditional Kudil Restaurant
    </div>
    <hr />
    <div className='bb-container'>
    <img src={b} width={1000} height={300} alt='nope' className='bbg' />
    </div> */}
    </>
  )
}

export default Home