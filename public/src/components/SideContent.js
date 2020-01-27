import React from 'react';

import GraphBox from './GraphBox';
import PollBox from './PollBox';
import WeatherBox from './WeatherBox';
import DirectoryBox from './DirectoryBox';

const SideContent = (props) => 
(
	<div>
		<GraphBox/>
		<PollBox/>
		<WeatherBox/>
		<DirectoryBox/>
	</div>

	
);


export default SideContent;