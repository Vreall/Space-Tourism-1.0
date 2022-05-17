import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { ReactComponent as Logo } from '../../img/navbar/logo.svg';
import { ReactComponent as Burger } from '../../img/navbar/icon-hamburger.svg';
import { ReactComponent as Close } from '../../img/navbar/icon-close.svg';

import './navigation.styles.scss';
const Navigation = () => {
	const [burgerClicked, setBurgerClicked] = useState(false);
	const [classShow, setClassShow] = useState('hide');
	function handleMenuDrop() {
		if (burgerClicked === false) {
			setClassShow('show');
			setBurgerClicked(true);
		} else {
			setClassShow('hide');
			setBurgerClicked(false);
		}
	}
	function handleChangeUrl() {
		setClassShow('hide');
		setBurgerClicked(false);
	}

	const { pathname } = useLocation();
	const splitLocation = pathname.split('/');
	return (
		<Fragment>
			{console.log('rerender')}
			<div className='navigation'>
				<Link className='logo-container' to='/'>
					<Logo className='logo' />
				</Link>
				<div type='button' onClick={handleMenuDrop} className='burgerMenuBtn'>
					{burgerClicked ? <Close /> : <Burger />}
				</div>
				<div className={`nav-links-container ${classShow}`}>
					<NavLink onClick={handleChangeUrl} className='nav-link' to='/'>
						<span className='menuNumber'>00 </span>HOME
					</NavLink>
					<NavLink
						onClick={handleChangeUrl}
						className={`nav-link ${
							splitLocation[1] === 'destination' ? 'active' : ''
						}`}
						to='/destination/moon'
					>
						<span className='menuNumber'>01 </span>DESTINATION
					</NavLink>
					<NavLink
						onClick={handleChangeUrl}
						className={`nav-link ${
							splitLocation[1] === 'crew' ? 'active' : ''
						}`}
						to='/crew/commander'
					>
						<span className='menuNumber'>02 </span> CREW
					</NavLink>
					<NavLink
						onClick={handleChangeUrl}
						className={`nav-link ${
							splitLocation[1] === 'technology' ? 'active' : ''
						}`}
						to='/technology/launchvehicle'
					>
						<span className='menuNumber'>03 </span> TECHNOLOGY
					</NavLink>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
