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
  height: 90px;
  background-color: #14213d;
  box-shadow: 0 5px 5px #071022;
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
  font-weight: bold;
  list-style-type: none;
	}

 & ul li a {
  color: #fca311
	}

 & ul li a:hover {
  color: white
	}

`
export default Header;