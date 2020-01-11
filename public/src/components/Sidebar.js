import React from 'react';
import SmallContent from './SmallContent'; 
import userIcon from "../images/interface/png/user-3.png";
import placeholder from "../images/interface/png/placeholder.png";
import supportIcon from "../images/interface/png/speech-bubble-1.png";
import magGlass from "../images/interface/png/zoom-in.png";

const Sidebar = (props) => 
(
	<aside className="sidebar">
		
		<nav>
			<ul>
				<li>
					<a href="#">
						<img src={userIcon} alt=""/>
					</a>
				</li>
				<li>
					<a href="#">
						<img src={placeholder} alt=""/>
					</a>
				</li>
				<li>
					<a href="#">
						<img src={supportIcon} alt=""/>
					</a>
				</li>
			</ul>
		</nav>
		<div class="search-container">
		  <form action="">
		    <input type="text" placeholder="Search.." name="search"/>
		    <button type="submit"><img src={magGlass} alt=""/></button>
		  </form>
		</div>
		<SmallContent/>
		<SmallContent/>
		<SmallContent/>
		<SmallContent/>
	</aside>

);


export default Sidebar;