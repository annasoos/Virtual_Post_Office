import React from "react";
import styled from "styled-components";

function NewMail() {

  function submitEvent(e) {

    e.preventDefault();
  
    const inputs = e.target.querySelectorAll(".inputField"), values = {};
  
    // UPLOADING VALUES OBJECT WITH INPUT FIELD VALUES (a kulcsok az inputuk nevei, a valuek pedig az értékei)
  
    for (const input of inputs) {
      values[`${input.name}`] = input.value;
    };
  
  
    // CREATE FROMDATA TO USE IN FETCH BODY
  
    const formData = new FormData();
  
    formData.append('from', values.from);
    formData.append('to', values.to);
    formData.append('message', values.message);
    formData.append('reference', values.reference);
  
    
    // FETCH
  
    fetch('http://localhost:8080/api/mails', {
      method: 'Post',
      headers: {
          'Content-Type': 'application/json'
      },
      body: formData
    })
      .then(response => response.text())
      .then(data => console.log(data));
  };


  return (
    <Container id="form" onSubmit={submitEvent}>

			<input name="reference" class="inputField" pattern="[0-9]" autocomplete="off" placeholder="Reference Number"/>
			<input name="to" class="inputField" type="text" autocomplete="off" placeholder="To"/>
			<input name="from" class="inputField" type="text" autocomplete="off" placeholder="From"/>
			<textarea name="message" class="inputField" autocomplete="off" placeholder="Message"></textarea>		
			
			<button id="send" type="submit">Send</button>

		</Container>
  );

}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 400px;
  height: 500px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);


    & input, textarea {
      width: 70%;
      padding: 0.5em;
      margin: 10px 0;
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
      margin: 5px 0;
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

export default NewMail;