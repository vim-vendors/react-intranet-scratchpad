import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import MainHeader from './MainHeader';
import SideContent from './SideContent';
import Footer from './Footer';


export default class IrwindaleIntranet extends React.Component {
	render(){
		return (
			<div className="site">
				<Header/>		
				<Sidebar/>
				<MainHeader/>	
				<MainContent/>
				<SideContent/>
				<Footer/>			
			</div>			
		);
	}
}




