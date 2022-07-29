import React from "react";

import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            favorite: 0

        }
    }
    favoriteClick = () => {

        this.setState({favorite: this.state.favorite + 1})
        this.props.displayModal (this.props.data);
    }

    render() {
        return (

            <Card style={{ width: '18rem' }}>

                <Card.Img variant="top" src={this.props.imgUrl} alt={this.props.title} onClick={this.favoriteClick}/>
                <Card.Body>

                    <Card.Title>{this.props.title} 🤞 {this.state.favorite}</Card.Title>

                    <Card.Text>{this.props.description} </Card.Text>

                </Card.Body>


            </Card>


        )
    }
}


export default HornedBeast;

