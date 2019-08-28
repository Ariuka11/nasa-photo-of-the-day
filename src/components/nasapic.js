import React, { } from 'react'

function NasaPic({nasaImg}){
    if (!nasaImg) 
    return <h3>Loading....</h3>
    else 
    return <div>
        <img src = {nasaImg} alt = 'Nasa Pic' />
    </div>
}

export default NasaPic