import React from 'react';
import Poster from '../Components.js/Poster';
import HouseList from '../Components.js/HouseList';
import { Link } from 'react-router-dom';
import axios from "axios";
import logo from '../images/logo.webp'
import { useNavigate ,useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Logout= async()=>{
  const navigate = useNavigate();

  try {
    
    const response= await axios.get(`http://localhost:5000/logout`);
    // console.log(response.status);
   if (response.status===200) {
      toast.success("Successfully log Out")

      setTimeout(() => {
        navigate("/")
      }, "1000")
    }
  } catch (error) {
    console.log(error);
    
  }
  
}


const Home = () => {
  const location=useLocation();
  const id=location.state.id
  console.log(location.state);
  return (
    <div className='min-h-[1000px] '>
      <nav>
      <a href='#' className='logo'>
        <Link to='/'>
           <img src={logo} alt='' />
         </Link>
        </a>
      <ul className='menu'>
             <Link to='/add' state={id}><li><a href='#' className='active'>Add</a></li></Link>
             <Link to='/mypost' state={id}><li><a href='#' className='active'>My Post</a></li></Link>
             <Link to='/' onClick={Logout}><li><a href='#' className='active'>Log Out</a></li></Link>
       </ul></nav>
      
      <Poster/>
      <HouseList />
    </div>
  );
};

export default Home;