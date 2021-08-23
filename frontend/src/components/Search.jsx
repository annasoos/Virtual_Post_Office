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
    color: #fca311;
    text-align: center;
    margin-bottom: 60px;
    };

    & input {
      width: 80%;
      padding: 0.5em;
      border-radius: 5px;
      text-align: center;
      font-size: 22px;
      border: 1px solid grey;

      &:hover, &:focus, &:active {
        font-size: 22px;
        text-align: center;
        border: 1px solid grey;
        outline: none
      }

      &::placeholder {
        text-align: center;
        font-size: 22px;
        font-family: 'Special Elite', cursive;
      }
    };
  
    & button {
      width: 30%;
      padding: 0.5em;
      margin: 25px 0 60px 0;
      border-radius: 5px;
      text-align: center;
      font-size: 22px;
      font-weight: bold;
      border: 1px solid #fca311;
      color:  #fca311;

      &:active{
        border: 1px solid #14213d;;
        color: #14213d;
      }
    };

  & #errorText {
    font-size: 20px;
    color: red;
    text-align: center;
  }
    
`


export default Search;