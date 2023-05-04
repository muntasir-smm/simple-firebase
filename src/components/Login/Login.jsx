import React, { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error: ", error.message);
      });
  };

  const handleGitHubSignIn = () => {
    signInWithPopup(auth, githubProvider)
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
        <div>
          <button onClick={handleGoogleSignIn}>Google Login</button>
          <button onClick={handleGitHubSignIn}>GitHub Login</button>
        </div>
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
