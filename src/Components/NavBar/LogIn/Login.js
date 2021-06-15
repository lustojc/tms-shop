import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../../../App";
import { AuthProvider } from "./Auth";
import './Login.css';
import Home from "./Home"
import PrivateRoute from "./PrivateRoute"
import Log from "./Log"
import Signup from "./SignUp"
import { Switch, withRouter } from "react-router";


const Login = () => {

    return (
        <AuthProvider>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/history" component={Home} />
                        <Route exact path="/login" component={Log} />
                        <Route exact path="/signup" component={Signup} />
                    </Switch>
                </div>
            </Router>
        </AuthProvider>
    );



};


export default Login;