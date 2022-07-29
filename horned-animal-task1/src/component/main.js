import React from "react";
import HornedBeast from "./HornedBeast";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Form from 'react-bootstrap/Form';

class Main extends React.Component {


    
    render() {
        console.log(this.props.allBeast)
        return (
            <>
             <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
          <Form.Select id="disabledSelect" onChange={(e)=> this.props.filterBeastByHornNumber(e)}>
            <option value='1'>One </option>
            <option value='2'>Tow </option>
            <option value='3'>Three </option>
            <option value=''>All </option>
            <option value='100'>Amazing! </option>

          </Form.Select>
        </Form.Group>
            
            <Row xs={1} md={3} className="g-4">

                {

                 this.props.allBeast.map((item,idx) =>
                 <Col key={idx} >
                    <HornedBeast imgUrl={item.image_url} title={item.title} description={item.description} displayModal={this.props.displayModal} data={item}/>
                 </Col>

                ) 
            }
            </Row>
            </> 
        )   
    }
}

export default Main;

