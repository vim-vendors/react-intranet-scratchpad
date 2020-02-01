import React from 'react';

import placeholder from "../images/interface/png/placeholder.png";


const WeatherBox = (props) => 
(
	<div>
	
		<aside className="side_content">
			<header>
				<h1>Local Weather</h1>
			</header>
			
			<a href="#"><img src={placeholder} alt="Placeholder"/></a>
		</aside>	
	</div>

	
);


export default WeatherBox;