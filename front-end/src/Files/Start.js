import React from 'react'
import Poster from '../Components.js/Poster';
import HouseList from '../Components.js/HouseList';
import logo from '../images/logo.webp'
import { Link } from 'react-router-dom';

export default function Start() {
    return (
        <div className='min-h-[1000px] '>
            <nav>
        <a href='#' className='logo'>
        <Link to='/'>
           <img src={logo} alt='' />
         </Link>
        </a>
         <input className='menu-btn' type='checkbox' id='menu-btn'></input>
          <label className='menu-icon'>
         <span className='nav-icon'></span>
         </label>
         <ul className='menu'>
             <Link to='/login'><li><a href='' className='active'>Log In</a></li></Link>
             <Link to='/register'><li><a href='' className='active'>Sign Up</a></li></Link>
             
       </ul>

        
 </nav>
          <Poster/>
          <HouseList />
        </div>
      );
}
