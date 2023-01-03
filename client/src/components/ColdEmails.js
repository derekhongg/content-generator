import React from 'react'
import { Component } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

class ColdEmails extends Component {
    constructor() {
        super()
        this.state = {
            heading: 'The Response from the AI will be Shown Here',
            response: '.... awaiting response'
        }
    }

    onFormSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj.emailTopic)

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(process.env.OPENAI_API_KEY)
            },
            body: JSON.stringify({
                'model': "text-davinci-001",
                'prompt': `Write me a detailed paragraph to send out to a customer email list about ${formDataObj.emailTopic}`,
                'temperature': 0.8,
                "max_tokens": 1000,
                "top_p": 1,
                "frequency_penalty": 0,
                "presence_penalty": 0
            })
        };
        console.log(requestOptions.body);

        if (formData === "") {
            return
        } else {
            fetch('https://api.openai.com/v1/completions', requestOptions)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    this.setState({
                        heading: `AI Product Description for: ${formDataObj.emailTopic}`,
                        response: `${data.choices[0].text.replace(/(\r\n|\n|\r)/gm, " ").split(/\s{2,8}/)[1]}`
                    })
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
    render() {
        return (
            <div>
                <Container className="mt-3">
                    <h1>Generate Cold Emails</h1>
                    <h4>Generate Cold Emails for your customers, simply enter a topic to recieve a response!</h4>
                    <br />
                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>What email topic would you like written for you today?</Form.Label>
                            <Form.Control
                                type="text"
                                name="emailTopic"
                                placeholder='Enter Email Topic' />
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

export default ColdEmails;