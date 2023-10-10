import React from "react";
import Cards from "./Cards";
import { NavLink } from "react-router-dom";
import { blogs } from "../data";

const Home = () => {
  return (
    <div className="home">
      <div className="card text-bg-dark">
        <div
          style={{
            width: "100%",
            height: "670px",
          }}
        >
          <img
            src="/assets/img/banner.jpg"
            style={{
              width: "100%",
              height: "100%",
            }}
            alt="..."
          />
        </div>
        <div className="card-img-overlay home p-5">
          <h2 className="card-title">
            I'm <span>Bilal</span> - a MERN Stack Developer, and DevOps Engineer
          </h2>
          <p className="card-text show">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
            officia aliquam voluptatibus recusandae, excepturi rem corrupti
            consectetur laboriosam ex fuga neque ipsum, aliquid eum magnam
            itaque eos. Vero, saepe delectus.
          </p>
          <NavLink to="/blogs" className="btn home-btn">
            Explore Blogs
          </NavLink>
        </div>
      </div>
      <div className="mt-5 p-3">
        <h3>Latest Posts</h3>
        <Cards blogs={blogs} />
      </div>
      <div className="mt-5 p-3">
        <h3>Featured Posts</h3>
        <Cards blogs={blogs} />
      </div>
    </div>
  );
};

export default Home;
