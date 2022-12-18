import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../forms/form.css";


function SignupForm({ signup }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    img: "",
    bio: ""
  });

  const [formErrors, setFormErrors] = useState([]);
  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await signup(formData);
    if (result.success) {
      navigate("/");
    } else {
      setFormErrors(result.errors);
    }
  }
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  }
  return (
    <div>
      <h3 className="fs-title">Sign Up</h3>
      <form id="msform" onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>First name</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last name</label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Image</label>
          <input
            type="img"
            name="img"
            value={formData.img}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Bio</label>
          <input
            type="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="next action-button"
          onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignupForm;