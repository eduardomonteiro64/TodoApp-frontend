import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Todo from "../todo";
import About from "../about";

export default function Routers() {
    return (
        <Router>
            <Switch>
                <Route path="/todo" component={Todo} />
                <Route path="/about" component={About} />
                <Route path='*' component={Todo} />
            </Switch>
        </Router >
    )
}