import React from "react";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function NewMail() {

  const submitEvent = async (e) => {

    e.preventDefault();

    const inputs = e.target.querySelectorAll(".inputField"), values = {};

    // UPLOADING VALUES OBJECT WITH INPUT FIELD VALUES (a kulcsok az inputuk nevei, a valuek pedig az értékei)

    for (const input of inputs) {
      values[`${input.name}`] = input.value;
    };

    // FETCH

    await axios.post('http://localhost:8080/api/mails', values)
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          console.log("Success")
          toast.success("Mail sent successfully!", { position: toast.POSITION.BOTTOM_CENTER });
        }
      })
      .catch(error => {
        console.log("An error occured: ", error.response)

        if (error.response.status === 400) {
          toast.error("En error occured! Please try again!", { position: toast.POSITION.BOTTOM_CENTER })
        } else if (error.response.status === 409) {
          toast.error("Reference number already exists! Please choose another one!", { position: toast.POSITION.BOTTOM_CENTER })
        }
      });
  };

  return (
    <>
      <ToastContainer />

      <Container id="form" onSubmit={submitEvent}>

        <input name="reference" class="inputField" type="text" pattern="[0-9]{1,}" autocomplete="off" placeholder="Reference Number" />
        <input name="to" class="inputField" type="text" autocomplete="off" placeholder="To" />
        <input name="from" class="inputField" type="text" autocomplete="off" placeholder="From" />
        <textarea name="message" class="inputField" autocomplete="off" placeholder="Message"></textarea>

        <button id="send" type="submit">Send</button>

      </Container>
    </>
  );

}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 500px;
  height: 500px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & input, textarea {
    width: 80%;
    padding: 0.5em;
    margin: 10px 0;
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
  & textarea {
    height: 400px;
  }

  & button {
    width: 30%;
    padding: 0.5em;
    margin: 15px 0;
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
  }
  
`

export default NewMail