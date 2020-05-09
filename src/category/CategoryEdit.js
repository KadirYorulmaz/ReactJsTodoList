import React from 'react';
import { withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
const axios = require('axios').default;


class CategoryEdit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            category_name: '',
            category_id: '',
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("stateFromProps");
        console.log("nextProps:", nextProps.location.state.category.category_id);
        console.log("prevState:", prevState.category_id);
        if (nextProps.location.state.category.category_id !== prevState.category_id) {
            console.log(nextProps.location.state.category.category_id);
            return {
                category_name: nextProps.location.state.category.category_name,
                category_id: nextProps.location.state.category.category_id
            };
        }
        else return null;
    }

    onChangeCategory = (event) => {
        this.setState({
            category_name: event.target.value
        })
    }

    OnSubmitData = (category_name, category_id) => {
        console.log(category_name);
        console.log(category_id);
        const { history } = this.props;

        let data = {}
        data.name = category_name;

        console.log(data);

        axios.put('http://localhost:8080/categories/editCategory/' + category_id, data)
            .then(function (response) {
                console.log(response);


                if (history) history.push('/categoryList/');
            })
            .catch(function (error) {
                console.log(error);
                alert("Sorry SOmething went wrong");
            });

        //     //Tilbage knap
    }

    OnDeleteCategory = (category_id) => {
        const { history } = this.props;
        console.log(category_id);

        axios.delete('http://localhost:8080/categories/deleteCategory/' + category_id)
        .then(function (response) {
            console.log(response);


            if (history) history.push('/categoryList/');
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
                <div>Edit Category</div>
                <Form>
                    <Form.Group controlId="formGroupTitle">
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" value={this.state.category_name} onChange={this.onChangeCategory} placeholder="Category" />
                    </Form.Group>
                </Form>
                <button type="button" onClick={() => this.OnDeleteCategory(this.state.category_id)} >Delete</button>
                <button type="button" onClick={() => this.OnSubmitData(this.state.category_name, this.state.category_id)}>Save</button>
                <button type="button" onClick={() => history.goBack()}>Back</button>
            </div>
        )
    }
}

// export default TaskEdit;
export default withRouter(CategoryEdit);