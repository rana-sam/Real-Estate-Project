 import React from 'react'
 import logo from '../images/logo.webp'
 import { Link } from 'react-router-dom';
 


 export default function Navbar() {
   return (
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
             <Link to='/'><li><a href='#' className='active'>Home</a></li></Link>
             <Link to='/add'><li><a href='../Files/Add.js' className='active'>Add</a></li></Link>
             <Link to='/login'><li><a href='' className='active'>Log In</a></li></Link>
             <Link to='/register'><li><a href='' className='active'>Sign Up</a></li></Link>
             
       </ul>

        
 </nav>
  )
 }
 
 
 
