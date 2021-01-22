import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth, googleAuth } from "./firebase";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  const SignIn = () => {
    auth
      .signInWithPopup(googleAuth)
      .then((result) =>
        dispatch(
          login({
            userName: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
          })
        )
      )
      .catch((err) => console.log(err));
  };
  return (
    <div className="LoginPage">
      <img
        className="LoginImage"
        src="https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
        alt=""
      />
      <h2>Login to your Gmail Account</h2>
      <h2>Click on the Below Button To Login</h2>
      <button className="LoginButton" onClick={SignIn}>
        {" "}
        Login{" "}
      </button>
    </div>
  );
}

export default Login;
