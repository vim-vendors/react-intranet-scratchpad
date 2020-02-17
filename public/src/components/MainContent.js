import React from 'react';
import LargeContent from './LargeContent';
import LargeContentHeader from './LargeContentHeader';

const MainContent = (props) => 
(
	<main className="main-stuff">	
		<LargeContentHeader/>
		{	

			props.posts.map((post, index, arr) => (
			<div>
				<LargeContent
				key={post.post_text}
				post_text={post.post_text}
				post_title={post.post_title}
				/>
			{/*code to prevent grey line from displaying after last post*/}
			{(arr.length - 1 !== index) && <div className="main_content--style-line"></div>}
				
			
			</div>
			))
		}
	</main>
	
);


export default MainContent;