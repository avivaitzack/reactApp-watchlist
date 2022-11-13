import React from 'react';
import Slider from './Slider'
import '../App.css'

export default function Gallery() {
  return (
    <div className='flexCenter'>
    <Slider genre='Drama'/>
     <Slider genre='Romance'/>
     <Slider genre='Action'/>
     
   
    <Slider genre='Horror'/>
     <Slider genre='History'/>
     <Slider genre='Crime'/>
     
    <Slider genre='Thriller'/>
    <Slider genre='Science-Fiction'/>
    <Slider genre='Anime'/>
    <Slider genre='Adventure'/>
    </div>
  )
}
