import React from 'react';
import LargeContent from './LargeContent';

const MainContent = (props) => 
(
	<main className="main-stuff">
		<header>
			<h2>Main</h2>
			<nav></nav>
		</header>
		
		<LargeContent/>
		<LargeContent/>
		<LargeContent/>
	</main>
	
);


export default MainContent;