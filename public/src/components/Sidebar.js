import React from 'react';
import SmallContent from './SmallContent'; 
const Sidebar = (props) => 
(
	<aside className="sidebar">
		<h3>Sidebar</h3>
		<nav>
			<ul>
				<li>
					<a href="#">Star</a>
				</li>
				<li>
					<a href="#">Peeps</a>
				</li>
				<li>
					<a href="#">Thoughts</a>
				</li>
			</ul>
		</nav>
		
		<SmallContent/>
		<SmallContent/>
		<SmallContent/>
	</aside>

);


export default Sidebar;