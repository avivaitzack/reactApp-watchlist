import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { getSearchedData } from "../ClientApi";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function SearchResults() {
    let { searched } = useParams();
    const navigate = useNavigate();
    const [shows, setShows] = useState([]);



    useEffect(() => {
        const getshowsData = async () =>{
          const result = await getSearchedData(searched);
          
          setShows(result.data);
        }
        getshowsData();
      },[searched]);
      function handleClick(showname) {
        navigate(`/viewmore/${showname}`)
      }
  return (
    <div style={{margin:'35px'}} className="flexCenter">
      {shows.map((show) => (
         <Card key={show.show.id} style={{ width: '14rem', backgroundColor:'#0C090A', margin:'15px'}}>
         <Card.Img variant="top" src={show.show.image?show.show.image.medium:null}/>
         <Card.Body>
           <Card.Title >{show.show.name}</Card.Title>
           
         </Card.Body>
         <Button onClick={()=> handleClick(`${show.show.name}`)}  variant="primary">view more</Button>
       </Card>
   ))}
    </div>
  )
}
