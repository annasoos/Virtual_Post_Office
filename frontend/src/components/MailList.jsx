import React, {useState, useEffect } from "react";
import ListItem from './ListItem';
import styled from "styled-components";

function MailList() {

  const [state, setState] = useState([]);

  const getData = () => {
  
    fetch('http://localhost:8080/api/mails')
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setState(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  } 

  useEffect(() => { getData() }, [state.length])

  return (
    <Container>
      <h2>Please find all the mails below:</h2>
      <ListItem data={state}/>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);

  width: 500px;
  padding-bottom: 100px;

    & h2 {
    font-size: 30px;
    color: #fca311;
    text-align: center;
    margin-bottom: 60px;
    };
`

export default MailList;