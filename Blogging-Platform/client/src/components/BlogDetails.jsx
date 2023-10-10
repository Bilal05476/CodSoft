import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../data";
// import
const BlogDetails = () => {
  const params = useParams();
  const [details, setDetails] = useState("");

  useEffect(() => {
    setDetails(blogs.filter((item) => item.slug === params.slug));
  }, []);
  return (
    <div className="mt-5 p-3 blog-details">
      <h2 className="m-0">{details[0]?.title}</h2>
      <small className="my-5">{details[0]?.excerpt}</small>
      <p className="m-0">{details[0]?.description}</p>
    </div>
  );
};

export default BlogDetails;
