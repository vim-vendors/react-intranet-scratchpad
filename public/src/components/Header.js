import React from 'react';
import logo from "../images/seal.png";

const Header = (props) => 
(
		<header className="header">	


{/*		    <input type="checkbox" className="toggler"/>
    		<div className="hamburger"><div></div></div>*/}


			<img src={logo} id="logo"/>
			<h1 className="header__title">{props.title}</h1>
			<nav className="header-menu">
				<div>
					<div>
						<ul>
							<li><a href="#">Help</a></li>
							<li><a href="#">Feedback</a></li>
							<li><a href="#" id="header-menu__last-link">Logout</a></li>
						</ul>
					</div>
				</div>

			</nav>		
		</header>



);


Header.defaultProps = {
	title: 'Irwindale Intranet'
};

export default Header;