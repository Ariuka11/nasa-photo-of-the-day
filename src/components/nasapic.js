import React, { } from 'react'
import {Container,Image, Jumbotron,ButtonToolbar, Button,Spinner   } from 'react-bootstrap'

function NasaPic({nasaImg, nasaDate, nasaCopyright}){
    if (!nasaImg) 
    return (
        <ButtonToolbar>
          <Button variant="primary" disabled>
            <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
            />
            <span className="sr-only">Loading...</span>
            </Button>
            <Button variant="primary" disabled>
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            />
            Loading...
          </Button>
        </ButtonToolbar>)
        else 
    return (
        <div> 
         <Image src = {nasaImg} alt = 'Nasa Pic' fluid/>
          <Jumbotron fluid>
            <Container>
                <h3>{nasaDate}</h3>
             <h4>
                Image Credit & Copyright : 
            </h4>
            <h3>{nasaCopyright}</h3>
            </Container>
          </Jumbotron>
        </div>)
    }

export default NasaPic;
