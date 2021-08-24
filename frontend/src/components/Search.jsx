import React, { useState } from "react";
import styled from "styled-components";
import ListItem from './ListItem';

function Search() {

  const [state, setState] = useState([]);

  function clickEvent(e) {

    e.preventDefault();
  
    const inputNum = document.getElementById("searchInput");
    const url = 'http://localhost:8080/api/mails/' + inputNum.value;
    console.log(url)
    
    // FETCH
  
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if(response.status === 404) {
          document.getElementById("errorText").innerHTML = "No mail found with the given reference number";
          setState([])
        } else {
          document.getElementById("errorText").innerHTML = ""
        }
        return response.json()
      })
      .then(data => setState(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  };


  return (
    <Container>

      <h2>Type in a reference number:</h2>

      <input name="reference" type="text" id="searchInput" pattern="[0-9]{1,}" autocomplete="off" placeholder="Reference Number" />

      <button id="send" type="submit" onClick={clickEvent}>Search</button>

      <div id="errorText"></div>

      <ListItem data={state}/>

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 600px;
  position: absolute;
  top: 20%;
  left: 50%;
  padding-bottom: 100px;
  transform: translateX(-50%);

    & h2 {
    font-size: 30px;
    font-weight: 500;
    color: rgb(2, 60, 70);
    text-align: center;
    margin-bottom: 60px;
    };

    & input {
      width: 80%;
      padding: 0.5em;
      border-radius: 5px;
      border: 1px solid rgb(2, 78, 91);

      text-align: center;
      font-size: 22px;
      color: rgb(2, 78, 91);

      &:focus, &:active {
        border: 1px solid white;
      }

      &::placeholder {
        text-align: center;
        color: rgb(2, 78, 91);
        font-size: 22px;
      }
    };
  
    & button {
      width: 30%;
      padding: 0.5em;
      margin: 60px 0;

      text-align: center;
      font-size: 22px;

      border-radius: 5px;
      border: 1px solid white;
      color: white;
      background-color: rgb(2, 78, 91);

      &:active{
        border: 1px solid rgb(2, 78, 91);;
        color: rgb(2, 78, 91);
        background-color: transparent;
      }
    };

  & #errorText {
    font-size: 20px;
    color: red;
    text-align: center;
  }
    
`


export default Search;