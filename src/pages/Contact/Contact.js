import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { useForm } from "../../useFrom";

const Contact = () => {
  const dispatch = useDispatch();
  const objectApp = {
    name: "",
    phone: "",
    msg: "",
  };
  const [value, pocketInfo] = useForm(objectApp);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify(value);

    try {
      const response = await fetch(
        "https://komiljonovdev.uz/Bobur/legend-api/api/sendMessage",
        {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        }
      );

      if (response.ok) {
        alert("Sizning arizangiz muoffaqqiyatli jo'natildi adminlar tomonidan ko'rib chiqiladi");
        window.location.reload();
      }
    } catch (error) {
      alert("Internet bilan aloqa yaxshi emas");
    }
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <form onSubmit={handleSubmit} className="my-3">
        <input
          className="w-full py-1 my-3 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
          type="text"
          placeholder="Ismingiz"
          onChange={pocketInfo}
          name="name"
          value={value.name}
          required
        />
        <br />
        <input
          className="w-full py-1 my-3 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
          type="text"
          placeholder="Xabar Yuborish"
          onChange={pocketInfo}
          name="msg"
          value={value.msg}
          required
        />
        <br />
        <input
          className="w-full py-1 my-3 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
          type="phone"
          placeholder="Telefon raqam"
          onChange={pocketInfo}
          name="phone"
          value={value.phone}
          required
        />
        <br />
        <button
          className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300 my-3"
          type="submit"
        >
          Arizani jonatish
        </button>
      </form>
    </div>
  );
};

export default Contact;
