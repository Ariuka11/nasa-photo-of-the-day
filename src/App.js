import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./App.css";
import Title from './components/title'
import NasaPic from './components/nasapic'

function App() {
 const [nasaImg, setNasaImg] = useState();
 const [nasaTitle, setNasaTitle] = useState();
 const [nasaInfo, setNasaInfo] = useState();
 const [nasaDate, setNasaDate] = useState();

 useEffect(() => {
   axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(res => {
          // console.log(res);
          setNasaImg(res.data.url)
          setNasaTitle(res.data.title)
          setNasaInfo(res.data.explanation)
          setNasaDate(res.data.date)
        })
        .catch(err => {
          console.log(err)
        })
 })
  return (
    <div className="App">
     <Title nasaTitle= {nasaTitle} nasaInfo = {nasaInfo} nasaDate = {nasaDate} />
     <NasaPic nasaImg ={nasaImg} />
    </div>
  );
}

export default App;
