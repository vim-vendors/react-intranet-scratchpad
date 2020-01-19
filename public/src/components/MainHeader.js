import React from 'react';

import magGlass from "../images/interface/png/zoom-in.png";
import gears from "../images/interface/png/settings.png";
import ticket from "../images/interface/png/document.png";

const MainHeader = (props) => 
(
		<header className="main-header">	
			<hgroup className="main-header__group">
				<img src="" id="logo"/>
				<h1>Home</h1>
				<nav className="menu">
					<div>
						<div>
							<ul>
								<li><a href="#"><img src={magGlass} alt="Content Search Icon"/></a></li>
								<li><a href="#"><img src={gears} alt="Settings Icon"/></a></li>
								<li><a href="#"><img src={ticket} alt="Ticket Icon"/></a></li>
							</ul>
						</div>
					</div>
				</nav>	
			</hgroup>
			<div className="main-header__h-line"></div>
		</header>
);


export default MainHeader;