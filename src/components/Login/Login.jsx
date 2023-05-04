import React, { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error: ", error.message);
      });
  };

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  return (
    <div>
      {/* user? Logout Button : Sign In Button */}
      {user ? (
        <button onClick={handleGoogleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Google Login</button>
      )}
      {user && (
        <div>
          <img src={user.photoURL} alt="" />
          <h3>User: {user.displayName} </h3>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
