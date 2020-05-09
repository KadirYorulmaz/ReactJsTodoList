import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    BrowserRouter as
        useParams
} from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TaskEdit from './TaskEdit';
const axios = require('axios').default;

class TaskDetail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            task: []
        }

    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        fetch("http://localhost:8080/" + this.props.match.params.id)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        task: result
                    })
                })
    }

    editClicked = (id) => {
        console.log(id);
        const { history } = this.props;
        if(history) history.push('/taskEdit/'+ id);
        // if(history) history.push('/taskEdit/', this.state.task);
        
    }

    deleteClicked = (id) => {
        // let goBack = false;
        // const { history } = this.props;
        console.log(id);

        axios.delete('http://localhost:8080/deleteTask/'+ id)
        .then(function (response) {
          console.log(response);
            // window.location
        //   goBack = true;
        window.location.href = '/taskList';
        //   if(history) history.push('/');
        })
        .catch(function (error) {
          console.log(error);
          alert("Sorry SOmething went wrong");
        });

       
    }

    render() {
        const { history } = this.props;

        return (
            <div>
                
                
                {/* <TaskEdit taskData={this.state.task}/> */}
                
                {this.state.task.map((task, i) => {
                    return (
                        <Form>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                    Titel
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control plaintext readOnly defaultValue={task.task_title} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                    Description
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control plaintext readOnly defaultValue={task.task_description} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                    Creation Date
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control plaintext readOnly defaultValue={task.task_date} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                    Category
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control plaintext readOnly defaultValue={task.category_name} />
                                </Col>
                            </Form.Group>                        
                            <button onClick={() =>this.editClicked(task.task_id)}>Edit</button>
                            <button onClick={() =>this.deleteClicked(task.task_id)}>Delete</button>
                        </Form>
                         
                    )

                    // return <ListGroup.Item key={i} action onClick={() => this.taskSelected(task)} >{task.task_title}</ListGroup.Item>
                   
                })}
                
               
                <button onClick={() => history.goBack()}>Back</button>
           
            </div>
        )
    }

}

// export default TaskDetail;
export default withRouter(TaskDetail);