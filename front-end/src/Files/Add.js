import React, { useState } from "react";
import { useHistory, withRouter } from 'react-router-dom'
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
  

//   const imagehandler = (e) => {
//     if (e.target.files && e.target.files[0]) {
//         let img = e.target.files[0]
//         setimage(img)e
//     }
// }

  const AddProperty = async (e) => {
    e.preventDefault();
    
    // const formData=new FormData();
    // formData.append("image", image);
    // formData.append("type", type);
    // formData.append("country", country);
    // formData.append("address", address);
    // formData.append("bedrooms", bedrooms);
    // formData.append("bathrooms",bathrooms);
    // formData.append("contact",contact);
    // formData.append("area",area);
    // formData.append("price",price);


// console.log(formData);
    // console.log(image);
    // setimage(image)
    if (
      !image ||
      !type ||
      !country ||
      !address ||
      !bedrooms ||
      !bathrooms ||
      !area ||
      !price ||
      !contact
    ) {
      toast.error("Please Provide All Value");
      console.log(image);
    }
     else {
      const propertyDetail = {
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
        const response = await axios.post(`http://localhost:5000/add`,propertyDetail );
        if (response.status === 200) {
          toast.success("Successfully Stored");
          // history.push('/')
        } else if (response.status === 400) {
          toast.error("Failed To stored");
        }
      } catch (error) {
        console.log("front nd");
        console.log(error);
      }
    }

    settype("");
    setbedrooms("");
    setbathrooms("");
    setprice(0);
    setarea(0);
    setcontact(0);
    setcountry("");
    setaddress("");
    setimage("");
  };
  return (
    <form
      class="min-h-[180px] bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 "
      method="post"
      encType="multipart/formd-ata"
    >
      <ToastContainer position="top-center" />
      <div className="form-group">
        <label htmlFor="inputId">Profile Picture</label>
        <input
          required
          className="form-control-file"
          type="url"
          filename="image"
          accept=".jpg,.png,.jpeg"
          id="inputId"
          onChange={(e) => setimage(e.target.value)}
        ></input>
      </div> 

      <div class="form-group grid gap-6 mt-10 md:grid-cols-2 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500">
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
            type="number"
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
        <button
          onClick={AddProperty}
          type="submit"
          class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Submit
        </button>
      </div>
      
    </form >
  );
};

export default Add;
