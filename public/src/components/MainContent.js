import React from 'react';
import LargeContent from './LargeContent';
import LargeContentHeader from './LargeContentHeader';

const MainContent = (props) => 
(
	<main className="main-stuff">	
		<LargeContentHeader/>
		<LargeContent/>
		<div className="main_content--style-line"></div>
		<LargeContent/>
		<div className="main_content--style-line"></div>
		<LargeContent/>
	</main>
	
);


export default MainContent;