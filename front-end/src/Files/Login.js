import React ,{ useState } from "react";
import axios from "axios";
import "../App.css"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = (props) => 
{
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  
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
          const response= await axios.post(`http://localhost:5000/login`, data);
          if (response.status===200) {
            toast.success("Successfully login")
            const id=response.data
            console.log(id);
            setTimeout(() => {
              navigate("/home",{state:{id},replace: true})
            }, "2000")
            
          }
        else if (response.status===202) {
            toast.error("Incorrect Email Or Password")
           
          }
        } 
        catch (e) {
          console.log(e);
        }
      }
    
  }
 
  return (
    <div className="login pt-10 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 rounded-lg">
      <ToastContainer position="top-center"/>
      <div>
        <h1 className="text-blue-600 text-center text-5xl font-bold mb-10"> Log In</h1>
      </div>

      <div>
        <form className="grid justify-center " onSubmit={logIn} method="post" >
         
          <div className="mb-7"> 
            <div>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-slate-200 px-2 pr-20 w-200 h-10 my-2 rounded-lg flex justify-center items-center text-black text-lg"
                placeholder="Email ID"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-7">
            <div>
              <input
                type="password"
                name="password"
                id="password"
                className="bg-slate-200 px-2 w-200 pr-20 h-10 my-2 rounded-lg flex justify-center items-center text-white text-lg"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          
          
          <center>
            <button id className="bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-violet-800 transition w-100 pl-5 pr-5 lg:max-w-[100px] h-12 rounded-lg mb-5 flex items-center	align-items-center justify-center items-center text-white text-lg">
              Log In
            </button>
            
          </center>
        </form>
      </div>
    </div>
  );
};

export default Login;
