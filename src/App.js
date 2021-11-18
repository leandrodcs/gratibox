import "./assets/reset.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact render={() => <Welcome />}/>
                <Route path="/sign-up" exact />
                <Route path="/sign-in" exact />
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>
    );
}
