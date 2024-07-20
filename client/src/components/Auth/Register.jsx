import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

const Register = () => {
  const { register } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    register(name, email, password);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Password"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
