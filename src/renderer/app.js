import React from "react";
import ReactDom from "react-dom";
import { Router, Route, hashHistory } from "react-router";

const appRouting = (
    <Router history={hashHistory}>
        <Route path="/">
        </Route>
    </Router>
);

if (!location.hash.length) {
    location.hash = "#/login";
}

ReactDom.render(appRouting, document.getElementById("app"));