import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function ViewMore() {
  let { showname } = useParams();
  const [show, setshow] = useState([]);
  const [showSum, setshowSum] = useState();
  const [Respones, setRespones] = useState([""]);

  useEffect(() => {
    axios.get(
        `https://api.tvmaze.com/singlesearch/shows?q=${showname}&embed=episodes`
      ).then((res) => {
        const data = res.data;
        setshow([data]);
        setshowSum(data.summary);
      });
  }, [showname]);

  useEffect(() => {
    const createFav = () => {
      axios.post("http://localhost:3001/ccreateFav" , {
          // userId: ,
          showId: show.id,
        })
        .then((res) => {
          setRespones(res.data[0]);
          console.log(Respones);
        });
      if (Respones === "Success") {
        alert("favorite created")
      } else {
        alert("something went wrong :(");
      }
    };
  }, [showname, show, Respones])
  

  console.log(show);

  return (
    <div style={{ padding: "7px", margin: "2px" }}>
      {show.map((show) => (
        <MDBCard key={show.id} style={{ backgroundColor: "#0C090A" }}>
          <MDBRow className="g-0">
            <MDBCol md="4">
              <MDBCardImage
                src={show.image.medium}
                alt="..."
                height={500}
                width={400}
              />
            </MDBCol>
            <MDBCol md="8">
              <MDBCardBody>
                <MDBCardTitle>{show.name}</MDBCardTitle>
                <MDBCardText>
                  <small className="text-muted">{show.genres}</small>
                </MDBCardText>
                <MDBCardText
                  dangerouslySetInnerHTML={{ __html: showSum }}
                ></MDBCardText>
                <MDBBtn></MDBBtn>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      ))}
    </div>
  );
}
