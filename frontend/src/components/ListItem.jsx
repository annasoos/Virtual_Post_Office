import React from "react";
import styled from "styled-components";

function ListItem (props) {
  return (
      <Mails>
        {props.data.map((mail, index) => (
          <li key={index}>
					<h3>Ref. Num.: {mail.reference}</h3>
					<div> <strong>To: &nbsp; </strong>{mail.to}</div>
					<div> <strong>From: &nbsp; </strong> {mail.from}</div>
					<div> <strong>Message: &nbsp; </strong> <em> {mail.message} </em> </div>
					<hr />
				</li>
        ))}
      </Mails>
  );
};

const Mails = styled.ul`

	list-style-type:none;

	& li {
		font-size: 20px;
    color: rgb(2, 78, 91);
  };
	
	& h3 {
    font-size: 22px;
    color: rgb(2, 78, 91);
    };
	
	& hr {
		width: 600px;
		margin: 25px 0;
		background-color: white;
		border: 0;
  	height: 0.5px;
	}

	& div {
		margin-top: 15px;
	}

`

export default ListItem;