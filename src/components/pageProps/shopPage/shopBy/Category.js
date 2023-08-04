import React from "react";
import NavTitle from "./NavTitle";

const Category = () => {
  return (
    <div className="w-full">
      <NavTitle title="Reklama" icons={false} />
      <img
        src="https://www.pammsoft.com/wp-content/uploads/2023/04/pammsoft_march_blog_5-Types-of-paid-ads-to-improve-your-business-.jpg"
        alt=""
      />
    </div>
  );
};

export default Category;
