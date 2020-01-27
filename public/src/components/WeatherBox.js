import React from 'react';

import placeholder from "../images/interface/png/placeholder.png";


const WeatherBox = (props) => 
(
	<div>
	
		<aside className="side_content">
			<header>
				<h1>Local Weather</h1>
			</header>
			
			<li><a href="#"><img src={placeholder} alt="Placeholder"/></a></li>
		</aside>	
	</div>

	
);


export default WeatherBox;