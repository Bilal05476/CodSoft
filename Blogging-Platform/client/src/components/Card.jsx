import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Card = ({ img, title, excerpt, date, height, width, slug }) => {
  const [show, setShow] = useState(false);
  return (
    <NavLink to={`/blog/${slug}`} className="col">
      <div
        className="card text-bg-dark"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <div
          style={{
            width: width && width,
            height: height && height,
          }}
        >
          <img
            src={img}
            style={{
              width: "100%",
              height: "100%",
            }}
            alt="..."
          />
        </div>
        <div className="card-img-overlay">
          <h5 className="card-title">{title}</h5>
          <p className={`card-text ${show && "show"}`}>{excerpt}</p>
          {date && (
            <p className={`card-text ${show && "show"}`}>
              <small>{date}</small>
            </p>
          )}
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
