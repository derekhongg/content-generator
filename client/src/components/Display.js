import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Button, Nav } from 'react-bootstrap'

class Display extends Component {
    render() {


        const { header, title, text, theLink } = this.props;


        return (
            <div>
                <Card>
                    <Card.Header>{header}</Card.Header>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {text}
                        </Card.Text>
                        <Nav.Link href={theLink}>
                            <Button variant='primary' size='lg'>Get Started</Button>
                        </Nav.Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Display