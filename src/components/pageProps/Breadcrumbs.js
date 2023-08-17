import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Heading from "../../components/home/Products/Heading";

const Breadcrumbs = ({ prevLocation }) => {
  const location = useLocation();
  const [locationPath, setLocationPath] = useState("");
  useEffect(() => {
    setLocationPath(location.pathname.split("/")[1]);
  }, [location]);

  return (
    <div className="w-full py-10 xl:py-10 flex flex-col gap-3">
      <Heading heading="Biz haqimizda" />
      <p className="text-sm font-normal text-lightText capitalize flex items-center">
        <span className="px-1">{/* <HiOutlineChevronRight /> */}</span>
        <span className="capitalize font-semibold text-primeColor">{}</span>
      </p>
    </div>
  );
};

export default Breadcrumbs;
