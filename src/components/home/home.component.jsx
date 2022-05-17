import { useState } from 'react';
import { Link } from 'react-router-dom';
import Paragraph from '../texts.components/paragraphs.component/paragraph.component';
import './home.styles.scss';
const Home = () => {
	const [paragraph, setParagraph] = useState(
		'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world	experience!'
	);
	return (
		<div className='home-container commonSectionContainer'>
			<div className='text-container'>
				<span className='home-subtitle'>SO, YOU WANT TO TRAVEL TO</span>
				<h1 className='home-title'>SPACE</h1>
				<Paragraph paragraph={paragraph} />
			</div>
			<Link to='/destination/moon' className='btnExplore'>
				EXPLORE
			</Link>
		</div>
	);
};

export default Home;
