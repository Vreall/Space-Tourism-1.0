import './technology.styles.scss';
import SectionTitle from '../texts.components/title.component/sectionTitle.component';
import Paragraph from '../texts.components/paragraphs.component/paragraph.component';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import technologyDatas from './technologyData.json';
import NameTitle from '../texts.components/title.component/nameTitle.component';

const Technology = (props) => {
	const [titleForImg, setTitleForImg] = useState('launch vehicle');
	const [technologyData, setTechnologyData] = useState({});

	function searchingTechnology(value) {
		if (value.title === titleForImg) {
			return value;
		}
	}
	const technology = technologyDatas.filter(searchingTechnology);

	useEffect(() => {
		setTechnologyData(technology[0]);
		setTitleForImg(props.terminology);
	}, [technology, props.terminology]);

	const { title, paragraph } = technologyData;

	return (
		<div className='technologyContainer commonSectionContainer'>
			<SectionTitle
				className='crewSectionTitle'
				span={'03'}
				content={'SPACE LAUNCH 101'}
			/>
			<picture className='launchvehiclePicture'>
				<source
					media='(min-width: 992px)'
					srcSet={`/images/technologyImages/technologyImage/desktop-image-${titleForImg.replace(
						' ',
						''
					)}.jpg`}
				/>
				<img
					className='launchvehicleImg'
					src={`/images/technologyImages/technologyImage/image-${titleForImg.replace(
						' ',
						''
					)}.jpg`}
					alt={'titleForImg'}
				/>
			</picture>
			<div className='technologyContentContainer'>
				<div className='technologyLinkContainer'>
					<NavLink className='technology-link' to={'/technology/launchvehicle'}>
						1
					</NavLink>
					<NavLink className='technology-link' to={'/technology/spaceport'}>
						2
					</NavLink>
					<NavLink className='technology-link' to={'/technology/spacecapsule'}>
						3
					</NavLink>
				</div>
				<div className='technologyTextsContainer'>
					<h1 className='titleTerminology'>THE TERMINOLOGY…</h1>
					<NameTitle text={title} />
					<Paragraph className='crewParagraph' paragraph={paragraph} />
				</div>
			</div>
		</div>
	);
};

export default Technology;
