import React from 'react'
import { useSelector } from 'react-redux';
 import {Link} from 'react-router-dom';
const Navbar = () => {
    const items = useSelector((state) => state.cart);
  return (
    <>
    <div style={{display : 'flex', alignItems: 'space-between'}}>
        <span>Redux Store</span>
        <div>
            <Link className='navLink p-3' to='/'>Home</Link>
            <Link className='navLink ms-2 p-3' to='/Cart'>Cart</Link>
            <Link className='navLink ms-2 p-3' to='/Total'>Total Price</Link>
            <span className='navLink ms-2 p-3' >Vart items: {items.length}</span>
        </div>
    </div>
    </>
   
  )
}

export default Navbar;
