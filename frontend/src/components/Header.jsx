import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Header() {
	return (
		<NavBar className="navbar">
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/mail-list">List Mails</NavLink>
				</li>
				<li>
					<NavLink to="/new">New Mail</NavLink>
				</li>
				<li>
					<NavLink to="/search">Search</NavLink>
				</li>
			</ul>
		</NavBar>
	);
}

const NavBar = styled.nav`

  display: flex;
  position: fixed;
  width: 100%;
  height: 70px;

  background-color: rgb(2, 78, 91);
  box-shadow: 0 5px 5px rgb(2, 60, 70);
	border-radius: 0 0 100px 100px;
  z-index: 2;

 & ul {
  width: 100%;
  padding-left: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
	}

 & ul, li {
  font-size: 22px;
  list-style-type: none;
	}

 & ul li a {
  color: white;
	}

 & ul li a:hover {
  color: rgb(5, 190, 220);
	}

`
export default Header;