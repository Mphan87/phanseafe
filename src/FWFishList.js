import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./fish.css";


import {
  Card,
  CardBody,
  ListGroupItem
} from "reactstrap";


function FWFishList({ fwfishes }) {

  let items = fwfishes
  let link = 'freshwaterfish';


  return (
    <section>

      <button className="button">
        <NavLink to="/createfwfish" className="button-text">ADD SALTWATER FISH</NavLink>
      </button>

      <Card>
        <CardBody>
          {items.map(item => (
            <Link to={`/${link}/${item.handle}`} key={item.handle}>
              <ListGroupItem className="list">{item.name}
              </ListGroupItem>

            </Link>
          ))}

        </CardBody>
      </Card>
    </section>
  );
}




export default FWFishList;