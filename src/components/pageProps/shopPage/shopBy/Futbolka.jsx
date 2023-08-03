import React, { useEffect, useState } from "react";
import Heading from "../../../../components/home/Products/Heading";
import Product from "../../../../components/home/Products/Product";
import { useParams } from "react-router-dom";

const Futbolka = () => {
  const [data, setData] = useState([]);
  const params = useParams();

  console.log(params.name);
  useEffect(() => {
    fetch("http://komiljonovdev.uz/Bobur/legendApi/api/getProduct")
      .then((response) => response.json())
      .then((response) => {
        const item = response.products.find((i) => i.category == params.name);
        setData(item);
      });
  }, []);

  console.log(data);

  return (
    <div className="w-full pb-20">
      <Heading heading="Maxsus takliflar" />
      {Array.isArray(data)
        ? data.map((item) => {
            return (
              <div
                className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10"
                key={item.id}
              >
                <Product
                  img={
                    `http://komiljonovdev.uz/Bobur/legendApi/public/storage/images/` +
                    item.image
                  }
                  productName={item.category}
                />
              </div>
            );
          })
        : "Tovar mavjud emas"}
    </div>
  );
};

export default Futbolka;
