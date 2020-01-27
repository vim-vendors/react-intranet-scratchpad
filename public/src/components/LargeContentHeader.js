import React from 'react';

import newsIcon from "../images/interface/png/browser.png";
import cancel from "../images/interface/png/cancel.png";
import ideas from "../images/interface/png/light-bulb-1.png"; 

const LargeContentHeader = (props) => 
(
	<header className="large-content__header">
		<hgroup>
			<li><a href="#"><img src={newsIcon} alt="News Icon"/></a></li>
			<h1>City News</h1>
			<li><a href="#" className="large-content__header-add">Add</a></li>
		</hgroup>
		<nav className="large-content__navbar">
			<ul>
				<li><a href="#"><img src={cancel} alt=""/></a></li>
				<li><a href="#"><img src={ideas} alt=""/></a></li>
			</ul>
		</nav>
	</header>
);

export default LargeContentHeader;