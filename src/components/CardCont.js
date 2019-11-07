import React, { useState, useEffect } from "react";
import axios from "axios";
import NewCard from "./NewCard";
import styled from "styled-components";

export default function CardCont() {
  const [astronomySubject, setAstronomySubject] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=OzNGKiMuJkWpDBCAnJBHes0Wa16NJ5YD4SlcO0DP"
      )
      .then(response => {
        setAstronomySubject(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  const NewContDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 50px 150px;
    border: 1px solid grey;
    border-radius: 10px;
    background-color: white;
  `;

  const DropShadowDiv = styled.div`
    filter: drop-shadow(-20px 10px 10px darkgrey);
  `;
  return (
    <DropShadowDiv>
      <NewContDiv>
        <NewCard
          key={astronomySubject}
          title={astronomySubject.title}
          description={astronomySubject.explanation}
          imgUrl={astronomySubject.url}
          date={astronomySubject.date}
        />
      </NewContDiv>
    </DropShadowDiv>
  );
}
