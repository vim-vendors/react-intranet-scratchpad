import React from 'react';
import LargeContent from './LargeContent';

const MainContent = (props) => 
(
	<main className="main-stuff">	
		<LargeContent/>
		<div className="main_content--style-line"></div>
		<LargeContent/>
		<div className="main_content--style-line"></div>
		<LargeContent/>
	</main>
	
);


export default MainContent;