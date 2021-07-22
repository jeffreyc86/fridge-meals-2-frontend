import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../features/userSlice";
import {useHistory} from 'react-router-dom'


function LogIn() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState([]);
  const history = useHistory()
  const dispatch = useDispatch()
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_RAILS_URL}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors);
          setFormData({
            username: "",
            password: "",
          });
        } else {
          const { user, token } = data;
          const action = setCurrentUser(user);
          dispatch(action);
          localStorage.setItem("token", token);
          history.push("/profile");
        }
      });

    setFormData({ username: "", password: "" });
  };

  return (
    <div className="login">
      {errors.map((error, index) => {
        return (
          <p key={index} className="errors">
            {error}
          </p>
        );
      })}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={formData.username}
          name="username"
          placeholder="Enter your username"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={formData.password}
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LogIn;
