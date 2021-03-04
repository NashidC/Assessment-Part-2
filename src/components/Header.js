import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Dogs from "./Dogs"
import Cats from "./Cats"

function Header() {
  return (
    <Router>
      <div id="nav">
        <h1>Cats & Dogs</h1>

        <li>
          <Link to="/Dogs">I like Dogs 🐕</Link>
        </li>
        <li>
          <Link to="/Cats">I like Cats 🐈</Link>
        </li>

      </div>
      <Switch>
        <Route path="/Dogs">
          <Dogs />
        </Route>
        <Route path="/Cats">
          <Cats />
        </Route>
      </Switch>
    </Router>
  );
}

export default Header;