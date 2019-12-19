import React from "react";
import styled from "styled-components";

const SubjDesc = styled.p`
  padding: 0px 35px 20px 35px;
  line-height: 1.5rem;
`;

const SubjTitle = styled.h2`
  padding: 20px 35px 20px 35px;
  color: darkblue;
`;

const DropShadowImg = styled.img`
  filter: drop-shadow(-20px 10px 10px darkgrey);
  border-radius: 6px;
`;

const DateStyle = styled.h3`
  color: darkblue;
`;

const NewCard = props => {
  return (
    <div>
      <DateStyle>For {props.date}</DateStyle>
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
