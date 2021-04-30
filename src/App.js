import { useEffect } from "react";
import "./App.css";
import { auth } from "./firebase";
import Header from "./Header";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import Status from "./Status";
import Post from "./Post";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./Profile";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch({
        type: actionTypes.SET_USER,
        user: auth.user,
      });
    });
  }, []);

  console.log(user);
  return (
    <Router>
      <Switch>
        <div className="app">
          {!user ? (
            <Login />
          ) : (
            <div className="app_header">
              <Header />
              <div className="app_center">
                <Route path="/" exact>
                  <Status />
                  <Post />
                </Route>

                <Route path="/profile" exact>
                  <Profile />
                </Route>
              </div>
            </div>
          )}
        </div>
      </Switch>
    </Router>
  );
}

export default App;
