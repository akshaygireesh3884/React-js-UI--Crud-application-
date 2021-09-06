import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Table from './Table';
import AddForm from "./AddForm";
import './NavBar.css';
import EditForm from "./EditForm";

const NavBar = () =>{
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/employee">Add Employee</Link>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route exact path ="/"><Table/></Route>
                <Route path ="/employee"><AddForm/></Route>
                <Route  path="/edit/:id"><EditForm/></Route>
            </Switch>
        </Router>
    )
}

export default NavBar;
