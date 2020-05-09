import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { withRouter } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge'


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

    componentDidMount() {
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
        if (history) history.push('/taskDetail/' + task.task_id);

    }

    render() {
        const { history } = this.props;

        return (
            <ListGroup>
                {this.state.tasks.map((task, i) => {
                    return (
                        <ListGroup.Item style={{textAlign: 'left'}} class="primary-btn col-xs-11 text-left" key={i} action onClick={() => this.taskSelected(task)} >
                            <div>{task.task_title}</div>
                            <div>
                                <Badge pill variant="secondary">
                                    {task.category_name}
                                </Badge>{' '}
                            </div>
                        </ListGroup.Item>
                    )




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