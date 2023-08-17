import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Flex from "../../designLayouts/Flex";
import Product from "../Products/Product";
import "./HeaderBottom.css";

const HeaderBottom = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  const [data, setData] = useState([]);
  const [dataTwo, setDataTwo] = useState([]);
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);

  const navigate = useNavigate();
  const ref = useRef();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
    fetch(`https://komiljonovdev.uz/Bobur/legend-api/api/getProduct`)
      .then((response) => response.json())
      .then((response) => {
        setDataTwo(response.products);
      });
  }, []);
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
      };

      try {
        let response = null;
        if (searchQuery) {
          response = await fetch(
            `http://komiljonovdev.uz/Bobur/legend-api/api/search?name=${searchQuery}`,
            {
              method: "GET",
              headers: headersList,
            }
          );
        }

        if (!response.ok) {
          // Handle non-2xx responses
          throw new Error("Network response was not ok");
        }

        let data = await response.json();
        setFilteredProducts(data || []);
      } catch (error) {
        // Handle fetch error
        setFilteredProducts([]);
      }
    };

    fetchProducts();
  }, [searchQuery]);

  useEffect(() => {
    fetch("http://komiljonovdev.uz/Bobur/legend-api/api/getCategory")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);

  const redirectFilteredItems = (item) => {
    navigate(`/futbolka/${item.toLowerCase()}`);
  };

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = (itemId) => {
    setDropdownVisible(isDropdownVisible === itemId ? null : itemId);
  };

  return (
    <div className="w-full bg-[#F5F5F3] relative">
      <div className="max-w-container mx-auto">
        <Flex className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-10">
          <div
            onClick={() => setShow(!show)}
            ref={ref}
            className="flex h-14 cursor-pointer items-center gap-2 text-primeColor"
          >
            <HiOutlineMenuAlt4 className="w-5 h-5 md:hidden" />
            <p className="text-[14px] font-normal md:hidden">Kategoriya</p>

            {show && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-[70px] z-50 bg-primeColor w-auto text-[#767676] h-auto p-4 pb-6"
              >
                {data?.map((item) => {
                  return (
                    <div
                      key={item.id}
                      onClick={() => redirectFilteredItems(item.category_name)}
                    >
                      <li className="list-none">
                        <p className=" text-gray-400 px-4 py-1 duration-300 cursor-pointer ">
                          {item.category_name}
                        </p>
                      </li>
                    </div>
                  );
                })}
              </motion.ul>
            )}
          </div>
          <div className="hidden md:grid grid-cols-8 gap-[50px] w-[100%]">
            {data?.map((item, i) => {
              return (
                <div key={item.id}>
                  <div className=" list-style list-none border-none">
                    <div className="m-0 p-0 cursor-pointer capitalize hover:text-[#44403c] ">
                      <div
                        className="nav-item dropdown"
                        onMouseEnter={() => handleDropdownToggle(item.id)}
                        onMouseLeave={handleDropdownToggle}
                      >
                        {item.category_name}
                        {isDropdownVisible === item.id && (
                          <div className="dropdown-content">
                            <div className="w-full pt-10 grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
                              {dataTwo
                                .filter(
                                  (dataitem) =>
                                    dataitem.category.toLowerCase() ===
                                    item.category_name.toLowerCase()
                                )
                                .slice(0, 4)
                                .map((item) => (
                                  <div key={item.id}>
                                    <Product
                                      img={`http://komiljonovdev.uz/Bobur/legend-api/public/storage/images/${item.image}`}
                                      productName={item.name}
                                      price={item.cost}
                                      des={item.description}
                                      id={item.id}
                                    />
                                  </div>
                                ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Link to="/cart">
            <div className="relative md:hidden">
              <FaShoppingCart />
              <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
                {products.length > 0 ? products.length : 0}
              </span>
            </div>
          </Link>
        </Flex>
      </div>
    </div>
  );
};

export default HeaderBottom;
