import React from 'react';
// import SmallContent from './SmallContent'; 
import Collapsible from 'react-collapsible';

// import PublicBox from './PublicBox'; 
// import CivilBox from './CivilBox'; 

//import icons 
import userIcon from "../images/interface/png/user-3.png";
import placeholder from "../images/interface/png/placeholder.png";
import supportIcon from "../images/interface/png/speech-bubble-1.png";
import magGlass from "../images/interface/png/zoom-in.png";
import directory from "../images/interface/png/group.png";
import folderIcon from "../images/interface/png/folder.png";
import newsIcon from "../images/interface/png/browser.png";
import checkIcon from "../images/interface/png/compass.png";
import calendarIcon from "../images/interface/png/right-alignment.png";
import linkIcon from "../images/interface/png/link.png";
import photoIcon from "../images/interface/png/picture.png";
import timeIcon from "../images/interface/png/clock-1.png";
import videoIcon from "../images/interface/png/film.png";
import modulesIcon from "../images/interface/png/computer.png";
import addIcon from "../images/interface/png/upload.png";
import completeIcon from "../images/interface/png/layers.png";

const home_heading = <header><h2>Home</h2></header>;
const hr_heading = <header><h2>HR</h2></header>;
const pw_heading = <header><h2>Public Works</h2></header>;
const ce_heading = <header><h2>Civil Engineering</h2></header>;

const Sidebar = (props) => 
(
	<aside className="sidebar">
		
		<nav>
			<ul>
				<li><a href="#"><img src={userIcon} alt="User ID"/></a></li>
				<li><a href="#"><img src={placeholder} alt="Placeholder"/></a></li>
				<li><a href="#"><img src={directory} alt="User Directory"/></a></li>
				<li><a href="#"><img src={supportIcon} alt="Chat Support"/></a></li>
			</ul>
		</nav>
		<div class="search-container">
		  <form action="">
		    <input type="text" placeholder="Search.." name="search"/>
		    <button type="submit"><img src={magGlass} alt=""/></button>
		  </form>
		</div>
		<section className="small_content">
			<Collapsible trigger={home_heading} open="true">
					<ul className="small_content__link-content">
						<li><img src={folderIcon} alt="Folder Icon"/><a href="#">Shared Documents</a></li>
						<li><img src={newsIcon} alt="News Icon"/><a href="#">City News</a></li>
						<li><img src={checkIcon} alt="Check Icon"/><a href="#">City Projects</a></li>
						<li><img src={calendarIcon} alt="Calendar Icon"/><a href="#">Events Calendar</a></li>
						<li><img src={linkIcon} alt="Link Icon"/><a href="#">Useful Links</a></li>
					</ul>
			</Collapsible>
		</section>
		<section className="small_content">
			<Collapsible trigger={hr_heading} open="true">
				<ul className="small_content__link-content">
					<li><img src={calendarIcon} alt="User ID"/><a href="#">HR Calendar</a></li>
					<li><img src={photoIcon} alt="Photo Icon"/><a href="#">Photos Archive</a></li>
					<li><img src={timeIcon} alt="Time Icon"/><a href="#">Time Off Requests</a></li>
					<li><img src={videoIcon} alt="Video Icon"/><a href="#">Training Videos</a></li>
				</ul>				
			</Collapsible>
		</section>
		<section className="small_content">
			<Collapsible trigger={pw_heading} open="true">
				<ul className="small_content__link-content">
					<li><img src={checkIcon} alt="User ID"/><a href="#">Ongoing Projects</a></li>
					<li><img src={addIcon} alt="Add Icon"/><a href="#">Add Projects</a></li>
					<li><img src={completeIcon} alt="Complete Icon"/><a href="#">Completed Projects</a></li>
					<li><img src={modulesIcon} alt="Modules Icon"/><a href="#">Modules</a></li>
				</ul>				
			</Collapsible>
		</section>
		<section className="small_content">
			<Collapsible trigger={ce_heading} open="true">
				<ul>
					<li><img src={checkIcon} alt="User ID"/><a href="#">Ongoing Projects</a></li>
					<li><img src={addIcon} alt="Folder Icon"/><a href="#">Add Projects</a></li>
					<li><img src={completeIcon} alt="User ID"/><a href="#">Completed Projects</a></li>
					<li><img src={modulesIcon} alt="User ID"/><a href="#">Modules</a></li>
				</ul>
			</Collapsible>			
		</section>
	</aside>

);


export default Sidebar;