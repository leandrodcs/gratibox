import "./assets/reset.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/Sign-up";
import SignIn from "./pages/Sign-in";
import { useState } from "react";
import UserContext from "./contexts/UserContext";

export default function App() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {});

    return (
        <UserContext.Provider value={{user, setUser}}>
            <Router>
                <Switch>
                    <Route path="/" exact render={() => <Welcome />}/>
                    <Route path="/sign-up" exact render={() => <SignUp />}/>
                    <Route path="/sign-in" exact render={() => <SignIn />}/>
                    <Route path="/home" exact render={() => <>Home</>}/>
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}
