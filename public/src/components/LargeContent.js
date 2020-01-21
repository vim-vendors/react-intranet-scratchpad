import React from 'react';
import placeholder from "../images/interface/png/placeholder.png";

const LargeContent = (props) => 
(
	<section className="large-content">
		<header className="large-content__header">
			<hgroup>
				{/*<li><a href="#"><img src={} alt=""/></a></li>*/}
				<li>h link</li>
				<h1>Company News</h1>
				<li>h link</li>
			</hgroup>
			<nav className="navbar">
				<ul>
					<li>n link</li>
					<li>n link</li>
				</ul>
			</nav>
		</header>
		<main className="main_content">
			<article>
				<h1>Your Intranet Is Only As Good As Your Hispter Filler</h1>
				<p>Lorem ipsum dolor amet prism yuccie pabst occupy laborum semiotics cillum mlkshk culpa coloring book bitters butcher. Velit vexillologist kogi kale chips, godard veniam artisan. Knausgaard taxidermy lomo laborum squid messenger bag meh tote bag cillum chartreuse. Occaecat qui distillery incididunt copper mug quis beard. Non master cleanse craft beer street art readymade. Artisan godard dolore dreamcatcher laboris semiotics duis eiusmod salvia laborum kinfolk shabby chic ramps. Laboris paleo gastropub consectetur echo park.</p>
				<p>Organic skateboard vaporware lo-fi swag, typewriter occupy ut fanny pack. DIY selvage waistcoat, beard shaman artisan hammock pabst reprehenderit four dollar toast banh mi tacos salvia letterpress. Thundercats umami typewriter, cold-pressed tilde gentrify organic pabst chillwave cupidatat minim marfa chambray helvetica. Hashtag brunch palo santo kombucha gochujang meh, dreamcatcher pok pok YOLO lorem fam.</p>
				<p>Roof party snackwave tousled, pok pok chicharrones typewriter tilde tofu green juice bitters iPhone cornhole. Pinterest pabst gentrify skateboard messenger bag celiac. Letterpress lo-fi man bun mustache narwhal. Plaid vaporware la croix health goth, schlitz taiyaki lumbersexual. Chillwave ethical trust fund asymmetrical food truck, brooklyn iPhone unicorn jean shorts chia roof party scenester vinyl squid umami.</p>
			</article>
		</main>
		<footer>
			<nav className="navbar">
				<ul>
					<li>f link</li>
					<li>f link</li>
					<li>f link</li>
				</ul>
			</nav>
		</footer>
	</section>
);

export default LargeContent;