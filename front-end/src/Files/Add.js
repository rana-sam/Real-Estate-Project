import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Add = (e) => {
  const [image, setimage] = useState("");
  const [type, settype] = useState("");
  const [country, setcountry] = useState("");
  const [address, setaddress] = useState("");
  const [bedrooms, setbedrooms] = useState("");
  const [bathrooms, setbathrooms] = useState("");
  const [area, setarea] = useState(Number);
  const [price, setprice] = useState(Number);
  const [contact, setcontact] = useState(Number);


  const AddProperty = async (e) => {
   
    e.preventDefault();
    if (!image || !type || !country || !address || !bedrooms || !bathrooms || !area || !price || !contact) {
      toast.error("Please Provide All Value");
    }
    else{
      const propertyDetail={
        image,
        type,
        country,
        address,
        bedrooms,
        bathrooms,
        area,
        price,
        contact
      } 
      try {
        const response=await axios.post(`http://localhost:5000/add`, propertyDetail);
        if (response.status===200) {
          toast.success("Successfully Stored")
   
  
      }
      else if (response.status===400) {
        toast.error("Failed To stored")
        
      }
      
      } catch (error) {
        console.log(error);
      }
    }

    settype("")
    setbedrooms("")
    setbathrooms("")
    setprice(0)
    setarea(0)
    setcontact(0)
    setcountry("")
    setaddress("")
    setimage("")


  };
  return (
    <form   
      class="min-h-[180px] bg-gradient-to-br from-green-400 to-blue-600"
      method="post"
    >
      <ToastContainer position="top-center"/>
      <div class="flex justify-center items-center w-full mb-10">
        <label  
          for="dropzone-file"
          class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              class="mb-3 w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input onChange={(e) => setimage(e.target.value)} id="dropzone-file" type="file" class="hidden" />
        </label>
      </div>

      
        <div
          class="grid gap-6 mt-10 md:grid-cols-2 bg-gradient-to-br from-green-400 to-blue-600"
          
        >
          <legend class="sr-only">Countries</legend>

          <div class="flex items-center mb-4">
            <input
              id="type-option-1"
              type="radio"
              name="type"
              value="House"
              class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              onChange={(e) => settype(e.target.value)}

            />
            <label
              for="type-option-1"
              class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              House 
            </label>
            <input
            onChange={(e) => settype(e.target.value)}
              id="type-option-2"
              type="radio"
              name="type"
              value="apartment"
              class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600 ml-5"
            />
            <label
              for="type-option-2"
              class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Appartment
            </label>
          </div>
          <div></div>
          <div>
            <label
              for="country"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Model Town,Humak,Islamabad"
              required=""
              onChange={(e) => setcountry(e.target.value)}
            />
          </div>
          <div>
            <label
              for="address"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Model Town,Humak,Islamabad"
              required=""
              onChange={(e) => setaddress(e.target.value)}
            />
          </div>
          <div>
            <label
              for="beds"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Number Of Bed's
            </label>
            <input
              type="text"
              id="beds"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="##"
              required=""
              onChange={(e) => setbedrooms(e.target.value)}
            />
          </div>
          <div>
            <label
              for="bathrooms"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Bathroom's
            </label>
            <input
              type="tel"
              id="bathrooms"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="##"
              required=""
              onChange={(e) => setbathrooms(e.target.value)}
            />
          </div>
          <div>
            <label
              for="area"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Area Of House
            </label>
            <input
              type="number"
              id="area"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0000 sq ft"
              required=""
              onChange={(e) => setarea(e.target.value)}
            />
          </div>
          <div>
            <label
              for="price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="$000.0"
              required=""
              onChange={(e) => setprice(e.target.value)}
            />
          </div>
          <div>
            <label
              for="contact"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Contact
            </label>
            <input
              type="number"
              id="contact"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="phone#"
              required=""
              onChange={(e) => setcontact(e.target.value)}
            />
          </div>
          <button onClick={AddProperty}
            type="submit"
            class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Submit
          </button>
        </div>
      
    </form>
  );
};

export default Add;
