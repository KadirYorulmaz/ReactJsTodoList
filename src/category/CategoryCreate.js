import React from 'react';
import { withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
const axios = require('axios').default;

class CategoryCreate extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            categories: [],
            category_name: ''
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

    onChangeCategory = (event) => {
        this.setState({
            category_name: event.target.value
        })
    }

    OnSubmitData = () => {
        const { history } = this.props;

        console.log(this.state.category_name);

        let data = {}
        data.name = this.state.category_name;

        console.log(data);

        axios.post('http://localhost:8080/categories/addCategory', data)
            .then(function (response) {
                console.log(response);


                if (history) history.push('/categoryList/');
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
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" value={this.state.category_name} onChange={this.onChangeCategory} placeholder="Title" />
                    </Form.Group>

                    {/* <Form.Group controlId="formGridState">
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" value={this.state.category_name} onChange={this.onChangeCategory}>
                            {
                                this.state.categories.map((category, i) => {
                                    // console.log(category);
                                    return <option key={i} value={category.category_name}>{category.category_name}</option>;
                                })
                            }

                        </Form.Control>
                    </Form.Group> */}
                </Form>



                <button type="button" onClick={this.OnSubmitData}>Create</button>
                <button onClick={() => history.goBack()}>Back</button>
            </div>
        )
    }

}

// export default TaskDetail;
export default withRouter(CategoryCreate);