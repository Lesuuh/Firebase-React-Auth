import { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase";
import { Timestamp, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;
  console.log(formData);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      console.log(user);

      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      const formDataCopy = { ...formData };
      formDataCopy.timeStamp = serverTimestamp();

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          ...formDataCopy,
        });
      }
      toast.success("Users Registration Successfull", { position: "top-center" });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Name"
          onChange={handleChange}
        />
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
        <button type="submit">Register</button>
        <p>
          Already have an Account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
