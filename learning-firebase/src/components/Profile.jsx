import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);

  const fetchData = async () => {
    auth.onAuthStateChanged(async (user) => {
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log(docSnap.data());
        setUserDetails(docSnap.data());
      } else {
        console.log("User not found");
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function logout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="profile">
      {userDetails ? (
        <div>
          <div>hello {userDetails.name}</div>
          <h4>
            your email is <p>{userDetails.email}</p>
            {/* you registered on the {userDetails.timeStamp} */}
          </h4>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
