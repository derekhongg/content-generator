import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Display from './Display';

function Home() {
    return (
        <div>
            <Container>
                <h1>Online Artificial Intelligence AI (API) With OpenAI</h1>
                <p>Start by picking any of these use cases below and start generating AI content.</p>
                <br />
                <Row>
                    <Col>
                        <Display
                            header='Product Descriptions'
                            title='Generate Product Descriptions'
                            text='Generate Product Descriptions for any type of products! Simply enter the name of the product, and a description will be formed!'
                            theLink='/product-description' />
                    </Col>

                    <Col>
                        <Display 
                            header='Marketing Emails'
                            title='Cold Email Templates'
                            text='Generate Mass Emails using the template below!'
                            theLink='/cold-emails' />
                    </Col>
                    
                    <Col>
                        <Display 
                            header='Creating Tweets'
                            title='Generate Tweets'
                            text='Generate random tweets using the tool below!'
                            theLink='/tweets' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home