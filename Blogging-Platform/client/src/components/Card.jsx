import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Card = () => {
  const [show, setShow] = useState(false);
  return (
    <NavLink to="/blog/slug" className="col">
      <div
        className="card text-bg-dark"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <img
          src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWwlMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay">
          <h5 className="card-title">Card title</h5>
          <p className={`card-text ${show && "show"}`}>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className={`card-text ${show && "show"}`}>
            <small>Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
