import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Paragraph from '../texts.components/paragraphs.component/paragraph.component';
import SectionTitle from '../texts.components/title.component/sectionTitle.component';
import './destination.styles.scss';
import destinations from './destinationsData.json';
const Destination = (props) => {
	const [destinationPlanet, setDestinationPlanet] = useState({});
	function searchingPlanet(value) {
		if (value.name === props.planet) {
			return value;
		}
	}

	const newPlanet = destinations.filter(searchingPlanet);

	useEffect(() => {
		setDestinationPlanet(newPlanet[0]);
	}, [newPlanet[0]]);

	const { name, paragraph, avgDistance, estTravelTime } = destinationPlanet;
	return (
		<div className='destination-container'>
			{console.log('render 2 ' + props.planet)}
			<SectionTitle span={'01'} content={'Pick your destination'} />
			<img
				className='destinationImage'
				src={`/images/destinationImages/destinationPlanet/image-${props.planet}.png`}
				alt={props.planet}
			/>
			<div className='contentConatainer'>
				<div className='destinationLinkContainer'>
					<NavLink className='destination-link' to={'/destination/moon'}>
						Moon
					</NavLink>
					<NavLink className='destination-link' to={'/destination/mars'}>
						Mars
					</NavLink>
					<NavLink className='destination-link' to={'/destination/europa'}>
						Europa
					</NavLink>
					<NavLink className='destination-link' to={'/destination/titan'}>
						Titan
					</NavLink>
				</div>
				<h2 className='destination-title'>{name}</h2>
				<Paragraph className='destinationParagraph' paragraph={paragraph} />
				<div className='line' />
				<div className='destinationDistanceContainer'>
					<div className='destinationDistance'>
						<h4>AVG. DISTANCE</h4>
						<p>{avgDistance}</p>
					</div>
					<div className='destinationDistance'>
						<h4>EST. TRAVEL TIME</h4>
						<p>{estTravelTime}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Destination;
