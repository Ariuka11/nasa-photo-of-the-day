import React from 'react'

function Title({nasaTitle, nasaInfo, nasaDate }){
    return <div>
                <h1>{nasaTitle}</h1>
                <p>{nasaInfo}</p>
                <h3>{nasaDate}</h3>
           </div>
    
}

export default Title;