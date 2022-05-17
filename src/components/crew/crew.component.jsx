import { useState, useEffect } from 'react';
import SectionTitle from '../texts.components/title.component/sectionTitle.component';
import crewData from './crewData.json';
import { NavLink } from 'react-router-dom';
import Paragraph from '../texts.components/paragraphs.component/paragraph.component';
import './crew.styles.scss';
import NameTitle from '../texts.components/title.component/nameTitle.component';
const Crew = (props) => {
	const [person, setPerson] = useState('commander');
	const [crewPerson, setcrewPerson] = useState({});

	function searchingPerson(value) {
		if (value.title === person) {
			return value;
		}
	}
	const newPerson = crewData.filter(searchingPerson);
	useEffect(() => {
		setcrewPerson(newPerson[0]);
		setPerson(props.person);
	}, [newPerson, props.person]);

	const { title, name, paragraph } = crewPerson;
	return (
		<div className='crewContainer commonSectionContainer'>
			<SectionTitle
				className='crewSectionTitle'
				span={'02'}
				content={'Meet your crew'}
			/>
			{/* {console.log(crewPerson.title)} */}
			<img
				className='personImage'
				src={`/images/crewImages/crewPersons/image-${person.replace(
					' ',
					''
				)}.png`}
				alt={crewPerson.title}
			/>
			<div className='line'></div>
			<div className='contentConatainer'>
				<div className='crewLinkContainer'>
					<NavLink className='crew-link' to={'/crew/commander'}></NavLink>
					<NavLink
						className='crew-link'
						to={'/crew/missionspecialist'}
					></NavLink>
					<NavLink className='crew-link' to={'/crew/pilot'}></NavLink>
					<NavLink className='crew-link' to={'/crew/flightengineer'}></NavLink>
				</div>
				<h1 className='crewTitle'>{title}</h1>
				<NameTitle text={name} />
				{/* <h2 className='crewName'>{name}</h2> */}
				<Paragraph paragraph={paragraph} className='crewParagraph' />
			</div>
		</div>
	);
};

export default Crew;
