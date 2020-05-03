import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    // <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#Task">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><NavLink to={"/taskList"} activeStyle={{ color: "red" }} >Task</NavLink></Nav.Link>
            <Nav.Link><NavLink to={"categoryList"} activeStyle={{ color: "red" }} >Category</NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    // </Router>
  );
}

export default Header;