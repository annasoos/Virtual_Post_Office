import React from "react";
import styled from "styled-components";

function Search() {

  function clickEvent(e) {

    e.preventDefault();
  
    const inputNum = document.getElementbyId("inputField").value
    
    // FETCH
  
    fetch('http://localhost:8080/api/mails', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => { console.log(data)
        //data.filter(mail => mail.reference === inputNum)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


  return (
    <Container>

      <h2>Type in a reference number:</h2>

      <input name="reference" id="inputField" pattern="[0-9]" autocomplete="off" placeholder="Reference Number" />

      <button id="send" type="submit" onClick={clickEvent}>Search</button>

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 600px;
  height: 200px;

  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);


    & h2 {
    font-size: 30px;
    color: #fca311;
    text-align: center;
    margin-bottom: 60px;
    };

    & input {
      width: 70%;
      padding: 0.5em;
      border-radius: 5px;
      text-align: center;
      font-size: 16px;
      border: 1px solid grey;

      &:hover, &:focus, &:active {
        font-size: 16px;
        text-align: center;
        border: 1px solid grey;
        outline: none
      }

      &::placeholder {
        text-align: center;
        font-size: 16px;
        font-family: 'Montserrat'
      }
    };
  
    & button {
      width: 30%;
      padding: 0.5em;
      margin-top: 25px;
      border-radius: 5px;
      text-align: center;
      font-size: 16px;
      border: 1px solid grey;
      background-color: white;

      &:active{
        border: 1px solid darkgrey;
      }
    };
    
`


export default Search;