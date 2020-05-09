import React from 'react';
import { withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
const axios = require('axios').default;

class TaskCreate extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            categories: [],
            title: '', 
            description: '', 
            category: ''
        }

    }

    componentDidMount() {
        fetch("http://localhost:8080/categories/showCategories")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        categories: result
                    })
                })
    }

    onChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    onChangeDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }
    onChangeCategory = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    OnSubmitData = () => {
        const { history } = this.props;

        let categoryId;
        console.log(this.state.title);
        console.log(this.state.description);
        console.log(this.state.category);

        this.state.categories.map((category) =>{
             if(category.category_name  == this.state.category){
                 console.log(category.category_name);
                 console.log(category.category_id);
                 categoryId = category.category_id;
            }  
        })

        let data = {}
        data.title = this.state.title;
        data.description = this.state.description;
        data.categoryId = categoryId;
        data.createdDate = Date.now();

        console.log(data);

        axios.post('http://localhost:8080/createTask', data)
          .then(function (response) {
            console.log(response);

            
            if(history) history.push('/taskList/');
          })
          .catch(function (error) {
            console.log(error);
            alert("Sorry SOmething went wrong");
          });

        //Tilbage knap
    }

    render() {
        const { history } = this.props;

        return (
            <div>
                <div>Create Task</div>

                <Form>
                    <Form.Group controlId="formGroupTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" value={this.state.title} onChange={this.onChangeTitle} placeholder="Title" />
                    </Form.Group>

                    <Form.Group controlId="formGroupDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={this.state.description} onChange={this.onChangeDescription} placeholder="Description" />
                    </Form.Group>

                    <Form.Group controlId="formGridState">
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" value={this.state.category} onChange={this.onChangeCategory}>
                        {
                                this.state.categories.map((category, i) => {
                                    // console.log(category);
                                    return <option key={i} value={category.category_name}>{category.category_name}</option>;
                                })
                            }

                        </Form.Control>
                    </Form.Group>
                   
                </Form>



                <button type="button" onClick={this.OnSubmitData}>Create</button>   
                <button onClick={() => history.goBack()}>Back</button>
            </div>
        )
    }

}

// export default TaskDetail;
export default withRouter(TaskCreate);