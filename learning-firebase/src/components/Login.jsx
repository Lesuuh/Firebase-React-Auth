import { useState } from "react";
import { Link } from "react-router-dom";
// import Register from "../components/Register";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div>
      <form>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
        <p>
          Do not have an Account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
