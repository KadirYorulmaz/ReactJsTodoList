import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { withRouter } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

class CategoryList extends React.Component {

    constructor(props) {
        super(props);

        this.categorySelected = this.categorySelected.bind(this);

        this.state = {
            error: null,
            isLoaded: false,
            categories: [],
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

    categorySelected = (category) => {
        console.log(category);
        const { history } = this.props;
        // if(history) history.push('/categoryEdit/'+ category.category_id);

        if (history) history.push({
            pathname: '/categoryEdit/',
            state: { category: category }
        })
    }

    render() {
        return (
            <ListGroup>
                {this.state.categories.map((category, i) => {
                    return (
                        <ListGroup.Item key={i} action onClick={() => this.categorySelected(category)} >
                            <Link to={
                                {
                                    pathname: "/categoryEdit",
                                    state: { category: this.state.category }
                                }
                            }>
                                {category.category_name}</Link>
                        </ListGroup.Item>
                    )
                })}
            </ListGroup>
        )
    }
}

// export default CategoryList;
export default withRouter(CategoryList);