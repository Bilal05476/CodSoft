import React from "react";
import { useParams } from "react-router-dom";
const BlogDetails = () => {
  const params = useParams();
  console.log(params);
  return <div>BlogDetails</div>;
};

export default BlogDetails;