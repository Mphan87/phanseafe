import React from "react";
import {useParams, Link } from "react-router-dom";
import "./fish.css";

import {ListGroupItem } from "reactstrap";

function CoralType({ corals }) {

  let items = corals
  let link = 'coral';
  const { type } = useParams();
  const results = items.filter(coral => coral.type === type)

  return (
    <section className="type">

      {results.map(result => (
        <Link className="typelist" to={`/${link}/${result.handle}`} key={result.handle}>
          <ListGroupItem className="typetext">{result.name}
          </ListGroupItem>
          <img src= {result.image} class="fishlistimg"></img>
        </Link>
      ))}
    </section>
  );
}

export default CoralType;