import React from 'react';
import folderIcon from "../images/interface/png/folder.png";
import newsIcon from "../images/interface/png/browser.png";
import checkIcon from "../images/interface/png/compass.png";
import calendarIcon from "../images/interface/png/right-alignment.png";
import linkIcon from "../images/interface/png/link.png";

const HomeBox = (props) => 
(
	<section className="small_content">
		<header>
			<h2>Home</h2>
			<input id="tab" className="small_content__link-content--accordion" type="checkbox" name="tab"/>
		</header>
		<ul className="small_content__link-content">
			<li><img src={folderIcon} alt="Folder Icon"/><a href="#">Shared Documents</a></li>
			<li><img src={newsIcon} alt="News Icon"/><a href="#">City News</a></li>
			<li><img src={checkIcon} alt="Check Icon"/><a href="#">City Projects</a></li>
			<li><img src={calendarIcon} alt="Calendar Icon"/><a href="#">Events Calendar</a></li>
			<li><img src={linkIcon} alt="Link Icon"/><a href="#">Useful Links</a></li>
		</ul>
	</section>
);


export default HomeBox;