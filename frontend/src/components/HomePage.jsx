import React from "react";
import styled from "styled-components";
import background from "../media/vintage.jpg"

function HomePage() {

  return (
    <Landing>
      <h1>Welcome to the virtual post office!</h1>
    </Landing>
  );
};

const Landing = styled.div`
  height: 100vh;
  width: 100vw;

    &::before{
      content: "";
      height: 100vh;
      width: 100vw;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.7;
      background-image: url(${background});
      background-repeat: no-repeat;
      background-size: cover;
    }

    & h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
    color: #14213d;
    text-align: center;
    }

`

export default HomePage;