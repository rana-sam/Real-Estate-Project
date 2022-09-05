import React, { createContext, useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate ,useLocation } from "react-router-dom";
import House from '../Components.js/House';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const HouseContext = createContext();


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





const MyPost= async()=> {
    const location=useLocation();
    const id=location.state.id
    
    const [houses, sethouses] = useState([]);
    
    // console.log(location.state);

    const fetchData=async()=>{
        const id =location.state
        const response= await axios.get(`http://localhost:5000/post`,id);
      
        return response.data;
        
      }
      useEffect(async() => {
        const getData = await fetchData()
        sethouses(getData)
    }, [])
    console.log(houses);
    
   

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-14 flex'>
        <h1 className='text-7xl'>My Posts</h1>
        <nav>
            <ul className='menu'>
             <Link to='/home' state={id}><li><a href='../Files/Home.js' className='active'>Home</a></li></Link>
            <Link to='/add'state={id}><li><a href='../Files/Add.js' className='active'>Add</a></li></Link>
             <Link to='/' onClick={Logout}><li><a href='#' className='active'>Log Out</a></li></Link>
            </ul>
        </nav>
        <div >
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
        
        </div>
  </div>
  )
}
export default MyPost
