import React from "react";
import styled from "styled-components";

function HomePage() {

 return (
    <LandingText>Welcome to the virtual post office!</LandingText>
  );
};

const LandingText = styled.h1`

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  color: #14213d;
  text-align: center;

`

export default HomePage;