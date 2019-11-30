import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Footer from './Footer';


export default class IrwindaleIntranet extends React.Component {
	render(){
		return (
			<div className="site">
				<Header/>
				
				<Sidebar/>	
				<MainContent/>
				<Footer/>			
			</div>			
		);
	}
}




