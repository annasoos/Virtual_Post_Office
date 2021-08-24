import React, { useState } from "react";
import styled from "styled-components";
import ListItem from './ListItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Search() {

  const [state, setState] = useState([]);

  const clickEvent = async (e) => {

    e.preventDefault();

    const inputNum = document.getElementById("searchInput");
    const url = 'http://localhost:8080/api/mails/' + inputNum.value;
    console.log(url)

    // FETCH

    try {
      let response = await axios.get(url);
      if (response.status === 200) {
        setState(response.data)
      }
    } 
    catch (error) {
      if (error.response.status === 404) {
        toast.error("No mail found with the given reference number!", { position: toast.POSITION.BOTTOM_CENTER })
      } else {
        console.log("Error: ", error)
      }
    }

  };

  return (
    <>
      <ToastContainer />

      <Container>

        <h2>Type in a reference number:</h2>

        <input name="reference" type="text" id="searchInput" pattern="[0-9]{1,}" autocomplete="off" placeholder="Reference Number" />

        <button id="send" type="submit" onClick={clickEvent}>Search</button>

        <ListItem data={state} />

      </Container>
    </>
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
    
`


export default Search;