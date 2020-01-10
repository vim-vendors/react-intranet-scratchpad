import React from 'react';
import SmallContent from './SmallContent'; 
const Sidebar = (props) => 
(
	<aside className="sidebar">
		
		<nav>
			<ul>
				<li>
					<a href="#">Lady Pic</a>
				</li>
				<li>
					<a href="#">Star Icon</a>
				</li>
				<li>
					<a href="#">Support Icon</a>
				</li>
			</ul>
		</nav>
		
		<p>Search Bar</p>
		<SmallContent/>
		<SmallContent/>
		<SmallContent/>
		<SmallContent/>
	</aside>

);


export default Sidebar;