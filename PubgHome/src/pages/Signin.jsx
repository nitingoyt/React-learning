import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth();
const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const singinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        alert("Success"); 
        // setEmail("");
        // setPassword("");
      })
      .catch((err) => {
        alert("wrong credentials");
      });
  };

  return (
    <div className="signin-page">
      <label>Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter your mail"
      ></input>
      <label>Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Enter your password"
      ></input>
      <button onClick={singinUser}>Signin</button>
    </div>
  );
};

export default SigninPage;
