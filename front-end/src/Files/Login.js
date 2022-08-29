import React ,{ useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Poster from "../Components.js/Poster";
import HouseList from "../Components.js/HouseList";

const Login = () => 
{
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const logIn=async(e)=>{
    e.preventDefault();
    
    if (!email)  {
        toast.error("Please Provide Email");
      }
      else if (!password) {
        toast.error("Please Provide Password");
      }
      else{
        const data = {
          password,
          email
        };
        try {
          await axios.post(`http://localhost:5000/login`, data);
          console.log("login");
        } 
        catch (e) {
          console.log(e);
        }
      }
    
  }
  return (
    <div className="pt-10">
      <ToastContainer/>
      <div>
        <h1 className="text-blue-600 text-center"> Log In</h1>
      </div>

      <div>
        <form className="grid justify-center " onSubmit={logIn} method="post" >
         
          <div> 
            <div>
              <input
                type="email"
                name="email"
                id=""
                className="bg-slate-200 px-2 pr-20 w-200 h-10 my-2 rounded-lg flex justify-center items-center text-white text-lg"
                placeholder="Email ID"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div>
              <input
                type="text"
                name="password"
                id=""
                className="bg-slate-200 px-2 w-200 pr-20 h-10 my-2 rounded-lg flex justify-center items-center text-white text-lg"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          
          
          <center>
            <button  className="bg-violet-700 hover:bg-violet-800 transition w-100 pl-5 pr-5 lg:max-w-[100px] h-12 rounded-lg mb-5 flex items-center	align-items-center justify-center items-center text-white text-lg">
              Log In
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Login;
