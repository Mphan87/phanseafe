import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../forms/form.css";



function LoginForm({ login }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await login(formData);
    if (result.success) {
      navigate("/");
    } else {
      setFormErrors(result.errors);
    }
  }
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(l => ({ ...l, [name]: value }));
  }
  return (
    <div>
      <div>
        <h3 className="fs-title">Log In</h3>
        <div>
          <div>
          <form id="msform" onSubmit={handleSubmit}>
              <div>
                <label>Username</label>
                <input
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  autoComplete="username"
                  required
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                />
              </div>
              <button
                  className="next action-button"
                onSubmit={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;
