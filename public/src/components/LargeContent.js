import React from 'react';

import newsIcon from "../images/interface/png/browser.png";
import placeholder from "../images/interface/png/placeholder.png";

//need text parsing method for option text

const LargeContent = (props) => 
(
	<section className="large-content">
		<main className="main_content">
			<article>
				<h1>{props.post_title}</h1>
				<p>{props.post_text}</p>
			</article>		
		</main>
		<footer>
			<nav className="large-content__navbar">
				<ul>
					<li><a href="#"><img src={newsIcon} alt="News Icon"/></a></li>
					<li><a href="#"><img src={placeholder} alt="Placeholder"/></a></li>
					<li><a href="#"><img src={placeholder} alt="Placeholder"/></a></li>
				</ul>
			</nav>
		</footer>
	</section>
);

export default LargeContent;