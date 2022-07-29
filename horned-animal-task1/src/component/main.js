import React from "react";
import HornedBeast from "./HornedBeast";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
    render() {
        console.log(this.props.allBeast)
        return (

            <Row xs={1} md={3} className="g-4">

                {

                 this.props.allBeast.map((item,idx) =>
                 <Col key={idx} >
                    <HornedBeast imgUrl={item.image_url} title={item.title} description={item.description} displayModal={this.props.displayModal} data={item}/>
                 </Col>

                )
                
            }
            </Row>
        )   
    }
}

export default Main;

