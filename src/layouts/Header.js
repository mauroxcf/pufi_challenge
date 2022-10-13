import React, { useState } from 'react';
import PropTypes from 'prop-types';

//Assets
import '../assets/styles/header.scss';
import { ReactComponent as PufiLogo } from '../assets/svg/PufiLogo.svg';
import { ReactComponent as UpDownArrow } from '../assets/svg/UpDownArrow.svg';

//UI
import NavbarItem from '../components/ui/NavbarItem';

function Header({ headerData }) {
	const [rotateArrow, setRotateArrow] = useState(false);
	return (
		<div className='Header'>
			<PufiLogo width='96' height='64' />
			<nav className='NavHeader'>
				{headerData.map((navItem) => (
					<NavbarItem
						key={navItem.id}
						label={navItem.label}
						icon={navItem.icon}
					/>
				))}
			</nav>
			<nav className='NavHeaderSecond'>
				<div
					className='NavItemArrow'
					onClick={() => setRotateArrow(!rotateArrow)}
				>
					<p className='NavItemArrowText'>MI CUENTA</p>
					<UpDownArrow
						width='16'
						height='16'
						className={rotateArrow ? 'UpArrow' : ''}
					/>
				</div>
				<p className='NavItemArrowText'>MI COMPRA</p>
			</nav>
		</div>
	);
}

Header.propTypes = {
	/* array of objects with all the labels and icons of the navbar */
	headerData: PropTypes.array,
};

export default Header;
