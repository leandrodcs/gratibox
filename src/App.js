import "./assets/reset.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact >{process.env.REACT_APP_API_URL === "prod" ? "https://gratibox-back.herokuapp.com" : "http://localhost:4000"}</Route>
                <Route path="/sign-up" exact />
                <Route path="/sign-in" exact />
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>
    );
}
