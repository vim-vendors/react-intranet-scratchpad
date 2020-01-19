import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import SideContent from './SideContent';
import Footer from './Footer';


export default class IrwindaleIntranet extends React.Component {
	render(){
		return (
			<div className="site">
				<Header/>		
				<Sidebar/>	
				<MainContent/>
				<SideContent/>
				<Footer/>			
			</div>			
		);
	}
}




