import React from 'react';
import Slider from './Slider'

export default function Gallery() {
  return (
    <div><div style={{display:'flex', justifyContent : 'space-around',alignItems:'center'}}>
    <Slider genre='Drama'/>
     <Slider genre='Romance'/>
     <Slider genre='Action'/>
     
    </div>
    <div style={{display:'flex', justifyContent : 'space-around',alignItems:'center'}}>
    <Slider genre='Horror'/>
     <Slider genre='History'/>
     <Slider genre='Crime'/>
     
    </div>
    <div style={{display:'flex', justifyContent : 'space-around',alignItems:'center'}}>
    <Slider genre='Thriller'/>
    <Slider genre='Science-Fiction'/>
    <Slider genre='Anime'/>
    </div></div>
  )
}
