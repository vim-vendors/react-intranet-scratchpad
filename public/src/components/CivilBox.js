import React from 'react';

import checkIcon from "../images/interface/png/compass.png";
import modulesIcon from "../images/interface/png/computer.png";
import addIcon from "../images/interface/png/upload.png";
import completeIcon from "../images/interface/png/layers.png";

const CivilBox = (props) => 
(
	<section className="small_content">
		<header className="small_content__link-content--accordion">
			<h2>Civil Engineering</h2>
			<input id="tab" type="checkbox" name="tab"/>
		</header>
		<div className="small_content__link-content">
			<ul>
				<li><img src={checkIcon} alt="User ID"/><a href="#">Ongoing Projects</a></li>
				<li><img src={addIcon} alt="Folder Icon"/><a href="#">Add Projects</a></li>
				<li><img src={completeIcon} alt="User ID"/><a href="#">Completed Projects</a></li>
				<li><img src={modulesIcon} alt="User ID"/><a href="#">Modules</a></li>
			</ul>			
		</div>
	</section>
);

export default CivilBox;