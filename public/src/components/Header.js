import React from 'react';
// import '../../images/seal.png';

import logo from "../images/seal.png";



const Header = (props) => 
(
		<header className="header">	
			<img src={logo} id="logo"/>	
			<hgroup>
				
				<h1 className="header__title">{props.title}</h1>
				{props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
				<nav>
					<ul>
						<li>
							<a href="#">Help</a>
						</li>
						<li>
							<a href="#">Feedback</a>
						</li>
						<li>
							<a href="#">Logout</a>
						</li>
					</ul>
				</nav>
			</hgroup>		
		</header>
);


Header.defaultProps = {
	title: 'Irwindale Intranet'
};

export default Header;