import React from "react";
import styled from "styled-components";

const SubjDesc = styled.p`
  padding: 0px 35px 20px 35px;
  line-height: 1.5rem;
`;

const SubjTitle = styled.h2`
  padding: 20px 35px 20px 35px;
`;

const DropShadowImg = styled.img`
  filter: drop-shadow(-20px 10px 10px darkgrey);
`;

const NewCard = props => {
  return (
    <div>
      <h3>For {props.date}</h3>
      <DropShadowImg
        width="85%"
        src={props.imgUrl}
        alt="NASA astronomy subject of the day"
      />
      <SubjTitle>{props.title}</SubjTitle>
      <SubjDesc>{props.description} </SubjDesc>
    </div>
  );
};

export default NewCard;
