import React from 'react'
import {Accordion, Card,Jumbotron,Button } from 'react-bootstrap'

function Title({nasaTitle, nasaInfo }){
    return <div>
            <Jumbotron>
                <h1>Today's NASA picture!</h1>
                <p>
                Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.
                </p> 
                <h2>{nasaTitle}</h2> 
                    <p>
                </p>
            </Jumbotron>    
            <Accordion defaultActiveKey="0">
                <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <Button variant="primary">Learn more</Button>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>{nasaInfo}</Card.Body>
                </Accordion.Collapse>
                </Card>
            </Accordion> 
        </div>    
}

export default Title;
