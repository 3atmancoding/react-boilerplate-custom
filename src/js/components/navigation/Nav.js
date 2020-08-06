import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Hire from "../pages/Hire";
import Resume from "../pages/Resume";
import Coffee from "../pages/Coffee";
import NotFound from "../pages/NotFound";
import styles from "../pages/stylesheets/Nav.module.css"
class Nav extends Component {
   render() {
      return (
         <>
            <Router>
               <nav>
                  <ul className = {styles.Nav}>
                     <li >
                        <Link to="/">Home</Link>
                     </li>
                     <li>
                        <Link to="/hire">Hire me</Link>
                     </li>
                     <li>
                        <Link to="/resume">Resume</Link>
                     </li>
                     <li >
                        <Link to="/coffee">Buy me a Coffee</Link>
                     </li>
                  </ul>
               </nav>
               <Switch>
                  <Route exact path="/">
                     <Home />
                  </Route>
                  <Route path="/hire">
                     <Hire />
                  </Route>
                  <Route path="/resume">
                     <Resume />
                  </Route>
                  <Route path="/coffee">
                     <Coffee />
                  </Route>
                  <Route >
                     <NotFound />
                  </Route>
               </Switch>
            </Router>
         </>
      );
   }
}

export default Nav;
