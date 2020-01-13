import React from 'react';

import checkIcon from "../images/interface/png/compass.png";
import modulesIcon from "../images/interface/png/computer.png";
import addIcon from "../images/interface/png/upload.png";
import completeIcon from "../images/interface/png/layers.png";

const PublicBox= (props) => 
(
	<section className="small_content">
		<header>
			<h2>Public Works</h2>

		</header>
		<ul>
			<li><img src={checkIcon} alt="User ID"/><a href="#">Ongoing Projects</a></li>
			<li><img src={addIcon} alt="Add Icon"/><a href="#">Add Projects</a></li>
			<li><img src={completeIcon} alt="Complete Icon"/><a href="#">Completed Projects</a></li>
			<li><img src={modulesIcon} alt="Modules Icon"/><a href="#">Modules</a></li>
		</ul>
	</section>
);



export default PublicBox;