import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <div> Express Post Office - 2021 </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
	align-items: center;

  position: fixed;
  bottom: 0;
  width: 100%;
  height: 90px;

  background-color: #14213d;
  box-shadow: 0 -5px 5px #071022;
  font-size: 14px;
  color: #fca311;
`

export default Footer;