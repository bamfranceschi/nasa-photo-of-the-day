import React from "react";
import "./App.css";
// import ImageBackground from "./components/ImageBackground";
import CardCont from "./components/CardCont";
import styled from "styled-components";

const Headline = styled.h1`
  color: white;
  padding-top: 30px;
`;

function App() {
  return (
    <div className="App">
      <Headline>NASA Astronomy Pic of the Day</Headline>
      <CardCont />
    </div>
  );
}

export default App;
