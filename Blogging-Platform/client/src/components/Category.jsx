import React from "react";
import { useParams } from "react-router-dom";
import Cards from "./Cards";
import { blogs } from "../data";

const Category = () => {
  const params = useParams();
  return (
    <div className="mt-5 p-3">
      <h3>{params.category}</h3>
      <Cards
        blogs={blogs.filter((item) => item.category.includes(params.category))}
      />
    </div>
  );
};

export default Category;
