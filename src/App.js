import "./assets/reset.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/Sign-up";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact render={() => <Welcome />}/>
                <Route path="/sign-up" exact render={() => <SignUp />}/>
                <Route path="/sign-in" exact />
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>
    );
}
