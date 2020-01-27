import React from 'react';

import placeholder from "../images/interface/png/placeholder.png";


const DirectoryBox = (props) => 
(
	<div>
	
		<aside className="side_content">
			<header>
				<h1>Company Directory</h1>
			</header>
			
			<li><a href="#"><img src={placeholder} alt="Placeholder"/></a></li>
		</aside>	
	</div>

	
);


export default DirectoryBox;