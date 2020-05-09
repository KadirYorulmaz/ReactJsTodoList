import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './navigation/Header';
import TaskList from './task/TaskList';
import TaskDetail from './task/TaskDetail';
import TaskCreate from './task/TaskCreate';
import TaskEdit from './task/TaskEdit';
import CategoryList from './category/CategoryList';
import CategoryEdit from './category/CategoryEdit';
import CategoryCreate from './category/CategoryCreate';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  NavLink
} from "react-router-dom";




function App() {
  return (
    <div className="App">
      
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
    

    


      <Router>
        <Header />

        <Container>
          <Row>
            <Col></Col>
            <Col xs={6}>
              <Switch>
              <Route path={"/taskList"}><TaskList /></Route>
              <Route path={"/taskDetail/:id"} ><TaskDetail/></Route>
              <Route path={"/taskCreate"} ><TaskCreate/></Route>
              <Route path={"/taskEdit/:id"} ><TaskEdit/></Route>
              <Route path={"/categoryList"} ><CategoryList/></Route>
              <Route path={"/categoryEdit/"} ><CategoryEdit/></Route>
              <Route path={"/categoryCreate/"} ><CategoryCreate/></Route>
              </Switch>
            </Col>
            <Col>
              <Route path={"/taskList"}><button><NavLink to={"/taskCreate"}>Create Task</NavLink></button></Route>
              <Route path={"/categoryList"}><button><NavLink to={"/categoryCreate"}>Create Category</NavLink></button></Route>
            </Col>
          </Row>
        </Container>
      </Router>


    </div>
  );
}

export default App;
