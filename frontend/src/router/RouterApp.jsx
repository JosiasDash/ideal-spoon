import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import URLs from "../URLS";

function RouterApp() {

    return (
        <Router>
            <Routes>
            {
                URLs.map(function(url, index) {
                    return (
                        <Route path={url.path} key={index} component={url.component} exact={url.exact} />
                    )
                })
            }
            </Routes>
        </Router>
    )
}

export default RouterApp;
