import React from 'react';
import LargeContent from './LargeContent';
import LargeContentHeader from './LargeContentHeader';

const MainContent = (props) => 
(
	<main className="main-stuff">	
		<LargeContentHeader/>
		{
			props.posts.map((post) => (
			<div>
				<LargeContent
				key={post.post_text}
				post_text={post.post_text}
				post_title={post.post_title}
				/>
			{/*need code to say as long as not last in array display*/}
				<div className="main_content--style-line"></div>
			</div>
			))
		}
	</main>
	
);


export default MainContent;