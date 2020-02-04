import React from 'react';

import calendarIcon from "../images/interface/png/right-alignment.png";
import folderIcon from "../images/interface/png/folder.png";
import photoIcon from "../images/interface/png/picture.png";
import timeIcon from "../images/interface/png/clock-1.png";
import videoIcon from "../images/interface/png/film.png";

const HRBox = (props) => 
(
	<section className="small_content">
		<header>
			<h2>HR</h2>
			<button></button>
		</header>
		<ul className="small_content__link-content">
			<li><img src={calendarIcon} alt="User ID"/><a href="#">HR Calendar</a></li>
			<li><img src={photoIcon} alt="Photo Icon"/><a href="#">Photos Archive</a></li>
			<li><img src={timeIcon} alt="Time Icon"/><a href="#">Time Off Requests</a></li>
			<li><img src={videoIcon} alt="Video Icon"/><a href="#">Training Videos</a></li>
		</ul>
	</section>
);


export default HRBox;