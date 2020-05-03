import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './navigation/Header';
import TaskList from './task/TaskList';
import CategoryList from './category/CategoryList';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import TaskDetail from './task/TaskDetail';

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
              <Route path={"/categoryList"} ><CategoryList/></Route>
              <Route path={"/taskDetail"} ><TaskDetail/></Route>
              </Switch>
            </Col>
            <Col>
              <Route path={"/taskList"}><button>Create Task</button></Route>
              <Route path={"/categoryList"}><button>Create Category</button></Route>
            </Col>
          </Row>
        </Container>
      </Router>


    </div>
  );
}

export default App;
