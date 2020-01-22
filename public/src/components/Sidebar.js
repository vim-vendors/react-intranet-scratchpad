import React from 'react';
import SmallContent from './SmallContent'; 
import HomeBox from './HomeBox'; 
import HRBox from './HRBox'; 
import PublicBox from './PublicBox'; 
import CivilBox from './CivilBox'; 


import userIcon from "../images/interface/png/user-3.png";
import placeholder from "../images/interface/png/placeholder.png";
import supportIcon from "../images/interface/png/speech-bubble-1.png";
import magGlass from "../images/interface/png/zoom-in.png";
import directory from "../images/interface/png/group.png";


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
		<HomeBox/>
		<HRBox/>
		<PublicBox/>
		<CivilBox/>
	</aside>

);


export default Sidebar;