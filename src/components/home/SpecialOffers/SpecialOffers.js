import React, { useState, useEffect } from "react";
import Product from "../Products/Product";

const SpecialOffers = () => {
  const [loading, setLaoding] = useState(false);

  const [data, setData] = useState([]);
  useEffect(() => {
    setLaoding(true);
    fetch("http://komiljonovdev.uz/Bobur/legend-api/api/getProduct")
      .then((response) => response.json())
      .then((data) => {
        setData(data.products);
        setLaoding(false);
      });
  }, []);
  return (
    <div className="w-full pb-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {loading ? (
          <div className="container_loader">
            <span className="loader"></span>
          </div>
        ) : (
          data?.map((item) => {
            return (
              <div key={item.id}>
                <Product
                  img={
                    `http://komiljonovdev.uz/Bobur/legend-api/public/storage/images/` +
                    item.image
                  }
                  productName={item.name}
                  price={item.cost}
                  des={item.description}
                  id={item.id}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SpecialOffers;
