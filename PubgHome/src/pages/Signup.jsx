import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("success");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        alert("invalid");
      });
  };

  const signupWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  }

  return (
    <>
      <div className="signup-page"></div>
      <label>Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        placeholder="Enter your mail"
      ></input>
      <label>Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        required
        placeholder="Enter your paasword "
      ></input>
      <button onClick={createUser}>SignUp</button>
      <br /> <br /> <br /> 
      <button onClick={signupWithGoogle}>Google Signin</button>
      <br />
    </>
  );
};

export default SignupPage;
