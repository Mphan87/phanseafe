import React from "react";
import { useParams, Link } from "react-router-dom";
import {ListGroupItem } from "reactstrap";


function FWFishType({ fwfishes }) {

  let items = fwfishes
  let link = 'freshwaterfish';

  const { type } = useParams();
  const results = items.filter(fish => fish.type === type)

  return (
    <section className="type">

      {results.map(result => (
        <Link to={`/${link}/${result.handle}`} key={result.handle}>
          <ListGroupItem className="typetext">{result.name}

          </ListGroupItem>

          <img src= {result.image} class="fishlistimg"></img>
        </Link>


      ))}

    </section>
  );
}

export default FWFishType;