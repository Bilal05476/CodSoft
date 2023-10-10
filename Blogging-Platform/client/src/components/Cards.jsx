import React from "react";
import Card from "./Card";

const Cards = ({ blogs }) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {blogs.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          excerpt={item.excerpt}
          slug={item.slug}
          img="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWwlMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
        />
      ))}
    </div>
  );
};

export default Cards;
