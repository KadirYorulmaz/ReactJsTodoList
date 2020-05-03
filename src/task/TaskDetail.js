import React from 'react';
import { withRouter } from 'react-router-dom';

class TaskDetail extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        const { history } = this.props;

        return (
            <div>
                <div>Hello Detail List</div>
                <button onClick={() => history.goBack()}>Back</button>
            </div>
        )
    }

}

// export default TaskDetail;
export default withRouter(TaskDetail);