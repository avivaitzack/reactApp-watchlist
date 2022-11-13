import React,{useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function ViewMore() {
    let { showname } = useParams();
    const [show , setshow] = useState();

    useEffect(() => {
      axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${showname}`).then((res) => {
        const data = res.data;
        setshow(data);
      });
    },[showname]);
    const htmlString =`${show.summary}`;
    console.log(show);
  return (
    <div style={{padding:'7px', margin:'2px'}}>
<MDBCard style={{backgroundColor:'#0C090A', margin:'20px', width:"700px"}}>
    <MDBCardImage style={{width:'700px', height:'400px'}} src={show.image.medium} position='top' alt='...' />
    <MDBCardBody>
      <MDBCardTitle>{show.name}</MDBCardTitle>
      <MDBCardText>
      {show.genres}
      </MDBCardText>
      <MDBCardText >
      <div dangerouslySetInnerHTML={{__html: htmlString}} />
      </MDBCardText >
      <MDBBtn href='#'>Button</MDBBtn>
    </MDBCardBody>
  </MDBCard> 

    </div>
  )
}
