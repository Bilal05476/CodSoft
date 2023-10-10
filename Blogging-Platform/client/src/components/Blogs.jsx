import React from "react";
import Cards from "./Cards";
import { blogs } from "../data";

const Blogs = () => {
  return (
    <div className="mt-5 p-3">
      <Cards blogs={blogs} />
    </div>
  );
};

export default Blogs;
