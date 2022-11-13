import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import '../App.css';

export default function GenreGallery(prpos) {
  let { genre } = useParams();
  const navigate = useNavigate();
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows`).then((res) => {
      const data = res.data.filter((show) =>
        show.genres.includes(`${genre}`)
      );
      setShows(data);

    });
  }, [genre]);
 
  function handleClick(showname) {
    navigate(`/viewmore/${showname}`)
  }

  return (
    <div className="container">
      {shows.map((show) => (
         <Card key={show.id} style={{ width: '14rem', backgroundColor:'#0C090A', margin:'10px'}}>
         <Card.Img variant="top" src={show.image.medium}/>
         <Card.Body>
           <Card.Title style={{display:'flex', justifyContent:'center'}}>{show.name}</Card.Title>
           <Button onClick={()=> handleClick(`${show.name}`)} style={{display:'flex', justifyContent:'center'}} variant="primary">view more</Button>
         </Card.Body>
       </Card>
   ))}
    </div>
  );
}
