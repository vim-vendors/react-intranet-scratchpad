import React from 'react';

import magGlass from "../images/interface/png/zoom-in.png";

const MainHeader = (props) => 
(
		<header className="main-header">	

			<img src="" id="logo"/>
			<h1>Home</h1>
			<nav className="menu">
				<div>
					<div>
						<ul>
							<li><a href="#"><img src={magGlass} alt="Search"/></a></li>
							<li><a href="#"><img src={magGlass} alt="Search"/></a></li>
							<li><a href="#"><img src={magGlass} alt="Search"/></a></li>
						</ul>
					</div>
				</div>

			</nav>		
		</header>
);


export default MainHeader;