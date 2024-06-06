import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./components/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/Profile";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={user ? <Navigate to={"/profile"} /> : <Login />}
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
