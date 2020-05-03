import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { withRouter } from 'react-router-dom';


class TaskList extends React.Component {

    constructor(props) {
        super(props);

        this.taskSelected = this.taskSelected.bind(this);

        this.state = {
            error: null,
            isLoaded: false,
            tasks: []
        }

    }

    componentDidMount(){
        fetch("http://localhost:8080/")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                this.setState({
                    isLoaded: true, 
                    tasks: result
                })
            })
    }

    taskSelected = (task) => {
        const { history } = this.props;
        if(history) history.push('/taskDetail/'+task.task_id);
        
    }

    render() {
        const { history } = this.props;

        return (
            <ListGroup>
                {this.state.tasks.map((task, i) => {
                    return <ListGroup.Item key={i} action onClick={()=> this.taskSelected(task)} >{task.task_title}</ListGroup.Item>
                })}
            </ListGroup>
        )

    }
}

// function task() {

//     componentD

//     return (

//         <ListGroup>
//             <ListGroup.Item>Cras justo odio</ListGroup.Item>
//             <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
//             <ListGroup.Item>Morbi leo risus</ListGroup.Item>
//             <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
//             <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
//         </ListGroup>

//     );
// }

// export default TaskList;
export default withRouter(TaskList);