import React from "react";
import HornedBeast from "./HornedBeast";
import data from './data.json'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
    render() {
        return (
             <Row xs={1} md={3} className="g-4">

                {
                    data.map((item,idx) =>


                     
                     <Col key={idx}>
                        <HornedBeast imgUrl={item.image_url} title={item.title} description={item.description} />
                        </Col>
                    
                        )
                }
                </Row>
        )
    }
}

export default Main;

