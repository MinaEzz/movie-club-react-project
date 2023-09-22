import React, { useState } from "react";
// import { categories } from "../../data/categories";
import "./style.css";

const Categories = ({ genres }) => {
  // const [activeCat, setActiveCat] = useState(false);
  return (
    <aside id="categories" className="pd-y-s">
      <h2 className="text-center">Genres</h2>
      <ul className="mt-4">
        {genres &&
          genres.map((cat) => {
            return <li key={cat.id}>{cat.name}</li>;
          })}
      </ul>
    </aside>
  );
};

export default Categories;
