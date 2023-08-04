import React, { useEffect, useState } from "react";
import Heading from "../../../../components/home/Products/Heading";
import Product from "../../../../components/home/Products/Product";
import { useParams } from "react-router-dom";

const Futbolka = () => {
  const [data, setData] = useState([]);
  const params = useParams();

   useEffect(() => {
    fetch(`https://komiljonovdev.uz/Bobur/legend-api/api/getProductByCategory?category_name=${params.name}`)
    .then((response) => response.json())
    .then((response) => {
     

      // const item = response.products.find((i) => i.category == params.name);
      setData(response.data);
    });
   },[params.name])


  return (
  <div className="w-full p-5 pb-20">
      <Heading heading="Maxsus takliflar" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {(data?.map((item) => {
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
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Futbolka;
