import React from "react"
import ReactDom from "react-dom"
import { BrowserRouter as Router } from 'react-router-dom'
import App from "./Components/App/App"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './index.scss'

ReactDom.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('abhi')
)