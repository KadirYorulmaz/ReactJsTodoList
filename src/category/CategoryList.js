import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'


class CategoryList extends React.Component {

    constructor(props) {
        super(props);

        this.categorySelected = this.categorySelected.bind(this);

        this.state = {
            error: null,
            isLoaded: false,
            categories: []
        }

    }

    componentDidMount(){
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
    }

    render() {
        return (
            <ListGroup>
                {this.state.categories.map((category, i) => {
                    return (
                        <ListGroup.Item key={i} action onClick={()=> this.categorySelected(category)} >{category.category_name}</ListGroup.Item>
                    ) 
                })}
            </ListGroup>
        )

    }
}

export default CategoryList;