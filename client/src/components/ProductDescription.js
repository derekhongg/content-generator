import React, { Component } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap';
const { Configuration, OpenAIApi } = require('openai');


class ProductDescription extends Component {
    constructor() {
        super()
        this.state = {
            heading: 'The Response from the AI will be Shown Here',
            response: '.... awaiting response'
        }
    }

    onFormSubmit = e => {
        e.preventDefault();
        const OPENAI_API_KEY = ''
        const formData = new FormData(e.target);
        let formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj.productName)

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + OPENAI_API_KEY
            },
            body: JSON.stringify({
                'model': "text-davinci-001",
                'prompt': `Write me a informative and professional product description for ${formDataObj.productName}`,
                'temperature': 0.8,
                "max_tokens": 256,
                "top_p": 1,
                "frequency_penalty": 0,
                "presence_penalty": 0
            })
        };
        fetch('https://api.openai.com/v1/completions', requestOptions)
            .then((response) => {
                this.setState({
                    heading: `AI Product Description for: ${formDataObj.productName}`,
                    response: `${response.data}`
                })
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        return (
            <div>
                <Container>
                    <h1>Generate Product Descriptions</h1>
                    <h4>Generate Product Descriptions for any type of products, simply enter the name to recieve a response!</h4>
                    <br />
                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>What Product Would you like a description for?</Form.Label>
                            <Form.Control
                                type="text"
                                name="productName"
                                placeholder='Enter Product Name' />
                            <Form.Text className="text-muted">
                                Enter as much information as possible for an accurate description.
                            </Form.Text>
                        </Form.Group>
                        <Button variant='primary' size='lg' type='submit'>
                            Get AI Suggestions
                        </Button>
                    </Form>
                    <Card className='mt-4'>
                        <Card.Body>
                            <Card.Title>
                                <h1>{this.state.heading}</h1>
                            </Card.Title>
                            <Card.Text>
                                <h4>{this.state.response}</h4>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default ProductDescription


