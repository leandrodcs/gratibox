import "./assets/reset.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/Sign-up";
import SignIn from "./pages/Sign-in";
import { useState } from "react";
import UserContext from "./contexts/UserContext";
import Home from "./pages/Home";

export default function App() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {});

    return (
        <UserContext.Provider value={{user, setUser}}>
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <Welcome />}/>
                    <Route exact path="/sign-up" render={() => <SignUp />}/>
                    <Route exact path="/sign-in" render={() => <SignIn />}/>
                    <Route exact path="/home"  render={() => <Home />}/>
                    <Route exact path="/subscribe" render={() => <>SubForm</>} />
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}
