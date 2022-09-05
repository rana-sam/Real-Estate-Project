import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './Files/Home';
import Header from './Components.js/Header';
import PropertyDetails from './Files/PropertyDetails';
import Contact from './Components.js/Contact';
import Footer from './Components.js/Footer';
import Add from './Files/Add';
import Login from './Files/Login';
import Signup from './Files/Signup';
import Start from './Files/Start';
import MyPost from './Files/MyPost';



function App() {
  return (
    <div className='max-w-[1440px] h-12 mx-auto bg-white'>
   
    <Routes>
      <Route path='/' element={<Start />} />
      <Route path='/home' element={<Home />} />
      <Route path='/add' element={<Add />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/mypost' element={<MyPost />} />
      
      <Route path='/property/:id' element={<PropertyDetails />} />
    </Routes>
    {/* <Contact/> */}
   {/* <Footer/> */}
  </div>
  );
}

export default App;
