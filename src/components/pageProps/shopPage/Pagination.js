import React, { useEffect, useState } from "react";
import { paginationItems } from "../../../constants";
import Product from "../../home/Products/Product";
// import Heading from "../../home/Products/Heading";

const items = paginationItems;

const Pagination = ({ itemsPerPage }) => {
  const [fetchPaginations, setFetchPaginations] = useState("");
  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);
  useEffect(() => {
    fetch("http://komiljonovdev.uz/Bobur/legend-api/api/getProduct")
      .then((res) => res.json())
      .then((res) => {
        setFetchPaginations(res.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    setItemStart(newOffset);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        {/* <Heading heading="Biz haqimizda" /> */}
        {Array.isArray(fetchPaginations)
          ? fetchPaginations.map((fetchItem, index) => {
              return (
                <div key={fetchItem.id}>
                  <div style={{ width: "100%" }}>
                    <Product
                      img={
                        `http://komiljonovdev.uz/Bobur/legend-api/public/storage/images/` +
                        fetchItem.image
                      }
                      productName={fetchItem.name}
                      price={fetchItem.cost}
                      des={fetchItem.description}
                    />
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Pagination;
