/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Container, Row, Col, ButtonToggle } from 'reactstrap';

class Shop extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm="6">
                            <img src="https://www.android.com/static/2016/img/one/devices/nokia-5-3_1x.png"/>
                            <p>Price: 1000/=</p>
                            <ButtonToggle color="warning">Add to Cart</ButtonToggle>
                        </Col>
                        <Col sm="6">
                            <h2>Your Cart</h2><hr/>
                            <h4>Total Item:</h4>
                            <h4>Total Amount: </h4>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Shop