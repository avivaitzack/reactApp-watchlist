import React, { useEffect, useState  } from "react";
import  { useNavigate  } from "react-router-dom";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button';

export default function Slider(prpos) {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows`).then((res) => {
      const data = res.data.filter((show) => show.genres.includes(`${prpos.genre}`));
      setShows(data);
    });
  });

  
  function handleClick() {
    navigate(`/genre/${prpos.genre}`)
  }

  return (
    <div style={{ height: "500px", width: "250px",margin:'60px'}}>
      <Carousel>
        {shows.map((show) => (
          <Carousel.Item  key={show.id}>
            <img
              className="d-block w-100"
              src={show.image.medium}
              alt=''
            />
             <Carousel.Caption>
        </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Button style={{width: "250px",}} onClick={handleClick}  variant="primary">{prpos.genre}</Button>
    </div>
  );
}
