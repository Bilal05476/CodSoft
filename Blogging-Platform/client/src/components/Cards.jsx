import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Cards;
