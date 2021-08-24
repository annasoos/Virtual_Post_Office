import React from "react";
import styled from "styled-components";

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

    & h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-family: 'Special Elite', cursive;
    font-size: 40px;
    color: rgb(2, 60, 70);
    text-align: center;
    }

`

export default HomePage;