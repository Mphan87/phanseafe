import React from "react";
import { Navigate, useParams } from "react-router-dom";
import ModalImage from "react-modal-image";
import "./fish.css";

function FWFishDetails({ fwfishes, cantFind }) {
  const { handle } = useParams();

  let fishhandle = fwfishes.find(fish => fish.handle === handle);
  if (!fishhandle) return <Navigate to={cantFind} />;

  return (
    <section className="fishdetailtext">

      <p><b>Name:</b> {fishhandle.name}</p>
      <p><b>Type:</b> {fishhandle.type}</p>
      <p><b>Description:</b> {fishhandle.description}</p>

      <ModalImage className="fishdetailimg"
        small={fishhandle.image}
        large={fishhandle.image}
        alt="No Image!"
      />
    </section>
  );
}

export default FWFishDetails;