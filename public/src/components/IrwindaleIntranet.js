import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import MainHeader from './MainHeader';
import SideContent from './SideContent';
import Footer from './Footer';


export default class IrwindaleIntranet extends React.Component {
	//state
	state = {
		posts: [
				{
					post_text: 'Lorem ipsum dolor amet prism yuccie pabst occupy laborum semiotics cillum mlkshk culpa coloring book bitters butcher. Velit vexillologist kogi kale chips, godard veniam artisan. Knausgaard taxidermy lomo laborum squid messenger bag meh tote bag cillum chartreuse. Occaecat qui distillery incididunt copper mug quis beard. Non master cleanse craft beer street art readymade. Artisan godard dolore dreamcatcher laboris semiotics duis eiusmod salvia laborum kinfolk shabby chic ramps. Laboris paleo gastropub consectetur echo park. Organic skateboard vaporware lo-fi swag, typewriter occupy ut fanny pack. DIY selvage waistcoat, beard shaman artisan hammock pabst reprehenderit four dollar toast banh mi tacos salvia letterpress. Thundercats umami typewriter, cold-pressed tilde gentrify organic pabst chillwave cupidatat minim marfa chambray helvetica. Hashtag brunch palo santo kombucha gochujang meh, dreamcatcher pok pok YOLO lorem fam. Roof party snackwave tousled, pok pok chicharrones typewriter tilde tofu green juice bitters iPhone cornhole. Pinterest pabst gentrify skateboard messenger bag celiac. Letterpress lo-fi man bun mustache narwhal. Plaid vaporware la croix health goth, schlitz taiyaki lumbersexual. Chillwave ethical trust fund asymmetrical food truck, brooklyn iPhone unicorn jean shorts chia roof party scenester vinyl squid umami.',
					post_title: 'Your Intranet Is Only As Good As Your Hipster Filler'
				},
				{
					post_text: 'Slow-carb small batch esse, master cleanse gluten-free cupidatat roof party. Skateboard mlkshk williamsburg blog stumptown hella narwhal dreamcatcher swag kitsch wayfarers. Qui thundercats leggings aliquip taiyaki austin jean shorts copper mug art party. Wolf street art exercitation health goth leggings dolore.Flannel occupy gentrify, irony shaman knausgaard succulents deep v shoreditch sed lomo franzen shabby chic. DIY bicycle rights retro post-ironic. Excepteur lyft quinoa pitchfork put a bird on it, schlitz commodo. In jean shorts vinyl, venmo butcher listicle selvage godard tbh. Single-origin coffee gochujang enamel pin, organic four dollar toast quis try-hard heirloom mustache cornhole nostrud photo booth fam dreamcatcher. DIY VHS enim, photo booth mollit try-hard stumptown velit ethical.Et brunch mixtape do mumblecore consectetur normcore duis man bun pok pok nostrud glossier. Try-hard vaporware tumeric consequat. Officia marfa single-origin coffee, pork belly consequat tbh scenester. Bushwick succulents helvetica blog authentic food truck fashion axe cold-pressed intelligentsia green juice. Cold-pressed XOXO aliquip listicle. Church-key waistcoat brunch pork belly.',
					post_title: 'Hispter Caesar Soze'
				},
				{
					post_text: 'Hell of lyft pug next level, cred hot chicken farm-to-table hammock bicycle rights you probably haven\'t heard of them etsy lo-fi slow-carb. Hell of raclette kogi retro. Air plant ramps plaid pinterest lo-fi shoreditch. Artisan keytar literally, hell of woke chia semiotics quinoa craft beer adaptogen gochujang twee fixie salvia. Subway tile vinyl meditation man bun hoodie hot chicken. Heirloom salvia echo park, fingerstache yr letterpress pour-over retro palo santo pork belly. Polaroid bicycle rights chillwave, listicle keytar pickled adaptogen copper mug woke shoreditch ennui.Chillwave photo booth pabst leggings austin keffiyeh bitters cliche hexagon YOLO wolf +1. Brooklyn pitchfork fam waistcoat raclette hot chicken cornhole tofu listicle chambray ennui try-hard hammock. Bicycle rights blue bottle prism, fingerstache roof party literally thundercats vinyl put a bird on it venmo bitters. Cardigan vinyl enamel pin copper mug cronut.',
					post_title: 'Vidi Vinni Pabst'
				}
			]
	};

	render(){
		return (
			<div className="site">
				<Header/>		
				<Sidebar/>
				<MainHeader/>	
				<MainContent
					posts={this.state.posts}
				/>
				<SideContent/>
				<Footer/>			
			</div>			
		);
	}
}




