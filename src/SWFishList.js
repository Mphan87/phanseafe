import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./fish.css";

function FishList({ fishes }) {

  let items = fishes
  let link = 'saltwaterfish';

  return (
    <section>
      <button className="button">
        <NavLink to="/createswfish" className="button-text">ADD SALTWATER FISH</NavLink>
      </button>
      <div>
        {items.map(item => (
          <Link to={`/${link}/${item.handle}`} key={item.handle}>
            <li className="list">{item.name}
            </li>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default FishList;