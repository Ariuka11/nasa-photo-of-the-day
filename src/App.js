import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./App.css";
import Title from './components/title'
import NasaPic from './components/nasapic'
import {Navbar,Nav, Form, FormControl, Button } from 'react-bootstrap'



function App() {
 const [nasaImg, setNasaImg] = useState();
 const [nasaTitle, setNasaTitle] = useState();
 const [nasaInfo, setNasaInfo] = useState();
 const [nasaDate, setNasaDate] = useState();
 const [nasaCopyright, setNasaCopyright] = useState();
// const [datas, setDatas] = useState();
 useEffect(() => {
   axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(res => {
          console.log(res);
          // setDatas(res.data)
          setNasaImg(res.data.hdurl)
          setNasaTitle(res.data.title)
          setNasaInfo(res.data.explanation)
          setNasaDate(res.data.date)
          setNasaCopyright(res.data.copyright)
        })
        .catch(err => {
          console.log(err);
        })
 }, [])
  return (
    <div className="App">
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">About</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Feature</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>  
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </div>
      <Title nasaTitle= {nasaTitle} nasaInfo = {nasaInfo}  />
       <NasaPic nasaImg ={nasaImg} nasaDate = {nasaDate} nasaCopyright = {nasaCopyright} />
    </div>
  );
}

export default App;
