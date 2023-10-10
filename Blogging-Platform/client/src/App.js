import React from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs";
import BlogDetails from "./components/BlogDetails";
import Category from "./components/Category";

const App = () => {
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/category/:category" element={<Category />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
      </Routes>
    </div>
  );
};

export default App;
