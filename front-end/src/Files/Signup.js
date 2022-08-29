import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(Number);

  const SignUp = async (e) => {
    e.preventDefault();
    if (!fname || !lname || !email || !password || !phone) {
      toast.error("Please Provide All Value");
    } else if (!email.includes("@")) {
      toast.error("Email is invalid 👎");
      
    }
    else {
      const data = {
        fname,
        lname,
        password,
        email,
        phone,
      };
      try {
        await axios.post(`http://localhost:5000/register`, data);
        console.log("new registerd");
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <div>
        <h1 className="text-blue-600 text-center">Sign Up</h1>
      </div>

      <div>
        <form className="grid justify-center" method="post" onSubmit={SignUp}>
          <div>
            <div>
              <input
                type="text"
                name="fname"
                id=""
                className="bg-slate-200 px-2 pr-20 w-200 h-10 my-2 rounded-lg flex justify-center items-center text-white text-lg"
                placeholder="First Name"
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                name="lname"
                id=""
                className="bg-slate-200 px-2 pr-20 w-200 h-10 my-2 rounded-lg flex justify-center items-center text-white text-lg"
                placeholder="Last Name"
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div>
              <input
                type="number"
                name="phone"
                id=""
                className="bg-slate-200 px-2 pr-20 w-200 h-10 my-2 rounded-lg flex justify-center items-center text-white text-lg"
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
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
                type="password"
                name="password"
                id=""
                className="bg-slate-200 px-2 w-200 pr-20 h-10 my-2 rounded-lg flex justify-center items-center text-white text-lg"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <center>
            <button className="bg-violet-700 hover:bg-violet-800 transition w-100 pl-5 pr-5 lg:max-w-[100px] h-12 rounded-lg mb-5 flex items-center	align-items-center justify-center items-center text-white text-lg">
              Submit
            </button>
          </center>
        </form>
      </div>
    </div>
  );
}
