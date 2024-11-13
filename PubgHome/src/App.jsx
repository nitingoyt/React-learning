import { app } from "./firebase";
import "./App.css";
import AppHeader from "./components/Header/appHeader";
import SignupPage from "./pages/Signup"
import SigninPage from "./pages/Signin";



function App() {
  // const signupUser = () => {
  //   createUserWithEmailAndPassword(
  //     auth,
  //     "nitin@example.com",
  //     "example@123"
  //   ).then((value) => console.log(value));
  // };

  return (
    <>
      <div>
        <h1>Signup From</h1>
        <SignupPage/>
        <AppHeader />
        <SigninPage/>

      </div>
    </>
  );
}

export default App;
