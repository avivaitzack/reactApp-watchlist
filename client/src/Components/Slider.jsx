import React, { useEffect, useState, useNavigate  } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button';

export default function Slider(prpos) {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows`).then((res) => {
      const data = res.data.filter((show) => show.genres.includes(`${prpos.genre}`));
      setShows(data);
    });
  });
  return (
    <div style={{ height: "500px", width: "250px", display:'flex', flexDirection:'column'}}>
      <Carousel>
        {shows.map((show) => (
          <Carousel.Item key={show.id}>
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
      <Button  variant="primary">{prpos.genre}</Button>
    </div>
  );
}
