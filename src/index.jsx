import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./style/main.scss"
import {BrowserRouter as Router} from "react-router-dom"
import {AppProvider} from "./Context"

ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <Router>
                <App />
            </Router>
        </AppProvider>
    </React.StrictMode>, document.getElementById("root")
);

if(undefined){
    undefined.accept()
}