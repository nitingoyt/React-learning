// // paste in app.jsx to check logout and login in action
// import { app } from "./firebase";
// import { useEffect, useState } from "react";
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import AppHeader from "./components/Header/appHeader";
// import SignupPage from "./pages/Signup";
// import SigninPage from "./pages/Signin";

// const auth = getAuth();

const Logout = () => {
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         console.log("you are logged out");
//         setUser(null);
//       }
//     });
//   }, []);
//   if (user === null) {
//     return (
//       <div>
//         <h1>Signup From</h1>
//         <SignupPage />
//         <AppHeader />
//         <SigninPage />
//       </div>
//     );
//   }
//   return (
//     <>
//       <div>
//         <h1>Hwloo {user.email}</h1>
//         <button onClick={() => signOut(auth)}>Logout</button>
//       </div>
//     </>
//   );
};

export default Logout;
