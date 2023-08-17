import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { navBarList } from "../../../constants";
import Flex from "../../designLayouts/Flex";
import Image from "../../designLayouts/Image";
import Legend from "./Legend.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const location = useLocation();
  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);
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
  const excludedBlockRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      const excludedBlock = excludedBlockRef.current;
      if (excludedBlock && excludedBlock.contains(event.target)) {
        return;
      }

      setFilteredProducts([]);
      setSearchQuery("");
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div className=" w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <Flex className="flex items-center justify-between h-full">
          <Link to="/">
            <div>
              <Image className="w-16 object-cover" imgSrc={Legend} />
            </div>
          </Link>
          <div>
            {showMenu && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center w-auto z-50 p-0 gap-2"
              >
                <>
                  {navBarList.map(({ _id, title, link }) => (
                    <NavLink
                      key={_id}
                      className="flex font-bold  w-42 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                      to={link}
                      state={{ data: location.pathname.split("/")[1] }}
                    >
                      <li>{title}</li>
                    </NavLink>
                  ))}
                </>
              </motion.ul>
            )}
            <HiMenuAlt2
              onClick={() => setSidenav(!sidenav)}
              className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
            />
            {sidenav && (
              <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-[80%] h-full relative"
                >
                  <div className="w-full h-full bg-primeColor p-6">
                    <h1 className="text-2xl text-gray-50">Legend</h1>

                    <ul className="text-gray-200 flex flex-col gap-2 pt-6">
                      {navBarList.map((item) => (
                        <li
                          className="font-normal font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                          key={item._id}
                        >
                          <NavLink
                            to={item.link}
                            state={{ data: location.pathname.split("/")[1] }}
                            onClick={() => setSidenav(false)}
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <span
                    onClick={() => setSidenav(false)}
                    className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                  >
                    <MdClose />
                  </span>
                </motion.div>
              </div>
            )}
          </div>
          <div
            ref={excludedBlockRef}
            className=" border-[0.7px] border-gray-400 relative mr-10 w-[218px] lg:w-[300px] h-[40px] text-base text-primeColor flex items-center gap-2 justify-between px-6 rounded-[10px]"
          >
            <input
              className="flex-1 h-full outline-none placeholder:text-[#444] placeholder:text-[14px]"
              type="text"
              onChange={handleSearch}
              value={searchQuery}
              placeholder="Qidiruv"
            />
            <FaSearch
              className="w-5 h-5 ml-[0pc] 
            text-gray-400"
            />
            {searchQuery && (
              <div
                className={`w-full mx-auto h-26 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
              >
                {filteredProducts &&
                Array.isArray(filteredProducts) &&
                filteredProducts.length > 0 ? (
                  filteredProducts.map((item) => (
                    <div
                      key={item.id}
                      onClick={() =>
                        navigate(
                          `/product/${item.name
                            .toLowerCase()
                            .split(" ")
                            .join("")}`,
                          {
                            state: {
                              item: item,
                            },
                          }
                        ) &
                        setShowSearchBar(true) &
                        setSearchQuery("")
                      }
                      className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                    >
                      <img
                        className="w-24"
                        src={
                          `https://komiljonovdev.uz/Bobur/legend-api/public/storage/images/` +
                          item.image
                        }
                        alt="productImg"
                      />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-lg">{item.name}</p>
                        <p className="text-xs">{item.description}</p>
                        <p className="text-sm">
                          Narx:
                          <span className="text-primeColor font-semibold">
                            {item.cost}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-400">
                    So'rov bo'yicha mahsulot topilmadi
                  </p>
                )}
              </div>
            )}
          </div>
        </Flex>
      </nav>
    </div>
  );
};

export default Header;
