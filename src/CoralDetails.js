import React from "react";
import { Navigate, useParams } from "react-router-dom";
import ModalImage from "react-modal-image";




function CoralDetails({ corals, cantFind }) {
  const { handle } = useParams();

  let coralhandle = corals.find(coral => coral.handle === handle);
  if (!coralhandle) return <Navigate to={cantFind} />;

  console.log(coralhandle)

  return (

    <section className="fishdetailtext">
      <p><b>Name:</b> {coralhandle.name}</p>
      <p><b>Type:</b> {coralhandle.type}</p>
      <p><b>Description:</b> {coralhandle.description}</p>

      <ModalImage className="fishdetailimg"
        small={coralhandle.image}
        large={coralhandle.image}
        alt="No Image!"
      />

    </section>
  );
}



export default CoralDetails;