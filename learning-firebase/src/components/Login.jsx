import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
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
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successfully");
      window.location.href = "/profile";
    } catch (error) {
      console.log(error);
      toast.error("An Error occured");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
