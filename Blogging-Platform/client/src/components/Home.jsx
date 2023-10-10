import React from "react";
import Cards from "./Cards";

const Home = () => {
  return (
    <div>
      <div className="jumbotron bg-success p-5">
        <h3>Hello World</h3>
        <h3>Hello World</h3>
        <h3>Hello World</h3>
        <h3>Hello World</h3>
        <h3>Hello World</h3>
        <h3>Hello World</h3>
        <h3>Hello World</h3>
        <h3>Hello World</h3>
      </div>
      <div className="mt-5 p-3">
        <h3>Latest Posts</h3>
        <Cards />
      </div>
      <div className="mt-5 p-3">
        <h3>Featured Posts</h3>
        <Cards />
      </div>
    </div>
  );
};

export default Home;
