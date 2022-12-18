import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

function CreateswfishForm({ createswfish }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    handle: "",
    name: "",
    taxonomy: "",
    image: "",
    reefsafe: "",
    description: "",
    maxsize: "",
    type: "",
  });

  const [formErrors, setFormErrors] = useState([]);
  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await createswfish(formData);
    console.log(result)
    if (result.success) {
      navigate("/saltwaterfish");
    } else {
      setFormErrors(result.errors);
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    console.log({ name, value })
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
    <div>
      <h3 className="fs-title">Sign Up</h3>
      <form id="msform" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Handle:</label>
          <input
            name="handle"
            className="form-control"
            value={formData.handle.replace(/ /g, "-")}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Name:</label>
          <input
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Taxonomy:</label>
          <input
            name="taxonomy"
            className="form-control"
            value={formData.taxonomy}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input
            name="image"
            className="form-control"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Reefsafe:</label>
          <input
            name="reefsafe"
            className="form-control"
            value={formData.reefsafe}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            name="description"
            className="form-control"
            value={formData.description}
            onChange={handleChange}
          />
        </div>


        <div className="form-group">
          <label>Maxsize:</label>
          <input
            name="maxsize"
            className="form-control"
            value={formData.maxsize}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <form id="dropdown">
          <label>Type:</label>
            <select name="type" onChange={handleChange}>
              <option value="Clownfish">Clownfish</option>
              <option value="Tangs">Tangs</option>
              <option value="Damselfish">Damselfish</option>
              <option value="Angelfish_large">Large Angel Fish</option>
              <option value="Angelfish_dwarf">Angelfish dwarf</option>
              <option value="Blennies">Blennies</option>
            </select>
          </form>
        </div>

        <button
          type="submit"
          className="next action-button"
          onSubmit={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateswfishForm;