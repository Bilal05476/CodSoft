import React from "react";
import { useParams } from "react-router-dom";
import Cards from "./Cards";
const Category = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="mt-5 p-3">
      <Cards />
    </div>
  );
};

export default Category;
