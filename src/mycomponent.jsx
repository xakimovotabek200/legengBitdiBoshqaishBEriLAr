import React, { useEffect, useState } from "react";
import localStorage from "redux-persist/es/storage";
import { useForm } from "./useFrom";
import {useSelector} from  "react-redux"
import { useNavigate } from "react-router-dom";

function Mycomponent() {
 
  const [items, setItems] = useState([]);
  const [itemss, setItemss] = useState([]);
  const [selectedItemsLength, setSelectedItemsLength] = useState([]);
  let selectedProducts = useSelector((state) => state.orebiReducer.products)
  const navigate = useNavigate()
  
  const objectApp = {
    name: "",
    phone: "",
    location: "",
    product: String(selectedProducts.map(item => ` ${item.name} - ${item.quantity}`)),
  };
  const [value, pocketInfo] = useForm(objectApp);
  useEffect(() => {
    if (items) {
      setItems(items);
    }
  }, []);
  useEffect(() => {
 
  }, []);
  useEffect(() => {
    let count = 0
    for (let index = 0; index < selectedProducts.length; index++) {
      count+=selectedProducts[index].quantity
      
    }
    setSelectedItemsLength(count)
  }, []);

  const HandelArea = (e) => {
    e.preventDefault();
  };

  const addApplication = async () => {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify(value);

    const response =  await fetch(
      "https://komiljonovdev.uz/Bobur/legendApi/api/addApplication",
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    ).then(() => {
      alert("Sizning arizangiz muoffaqqiyatli jo'natildi adminlar tominidan ko'rib chiqiladi");
      localStorage.removeItem("persist:root")
      navigate("/")
      window.location.reload()
    }).catch(() => {
      console.log("Error");
    })
    
  };
 
  return (
    <form onSubmit={HandelArea} className="my-3">
      <input
        className="w-full py-1 my-3 border-b-2 px-2 text-base  font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
        type="text"
        placeholder="Ismingiz"
        onChange={pocketInfo}
        name="name"
        value={value.name}
        required
      />
      <br />
      <input
        className="w-full py-1 my-3 border-b-2 px-2 text-base  font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
        type="text"
        placeholder="Manzil"
        onChange={pocketInfo}
        name="location"
        value={value.location}
        required
      />
      <br />
      <input
        className="w-full py-1 my-3 border-b-2 px-2 text-base  font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
        type="phone"
        placeholder="Telefon raqam"
        onChange={pocketInfo}
        name="phone"
        value={value.phone}
        required
      />
      <br />
      <input
        className="w-full py-1 my-3 border-b-2 px-2 text-base  font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
        type="text"
        placeholder="Mahsulot"
        name="product"
        onChange={pocketInfo}
        value={selectedProducts.map(item =>`${item.name} - ${item.quantity} - ${item.price}`)}
        required
      />
      <br />
      <button
        onClick={addApplication}
        className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300 my-3"
        type="submit"
      >
        Arizani jonatish
      </button>
    </form>
  );
}

export default Mycomponent;
