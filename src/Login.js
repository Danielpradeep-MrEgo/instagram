import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [{ user }, dispatch] = useStateValue();
  const userFire = auth.currentUser;

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch({
        type: actionTypes.SET_USER,
        user: userFire,
        email: result.user.email,
        id: result.user.uid,
      });
    });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch({
        type: actionTypes.SET_USER,
        user: userFire,
      });
    });
  }, [user]);

  // console.log(userFire);

  return (
    <div>
      <Button onClick={signIn}>Login</Button>
    </div>
  );
}

export default Login;
