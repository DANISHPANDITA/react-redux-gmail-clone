import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Body from "./Body";
import { login, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Login from "./Login";
import Navbar from "./Navbar";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            userName: user.displayName,
            email: user.displayName,
            photo: user.photoURL,
          })
        );
      }
    });
  });
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="AppContent">
          <Navbar />
          <Body />
        </div>
      )}
    </div>
  );
}

export default App;
