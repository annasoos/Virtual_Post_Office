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
  height: 70px;

  background-color: rgb(2, 78, 91);
  box-shadow: 0 -5px 5px rgb(2, 60, 70);
  border-radius: 100px 100px 0 0;
  font-size: 14px;
  color: white;
`

export default Footer;