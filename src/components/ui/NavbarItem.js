import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/header.scss';

function NavbarItem({ label, icon }) {
	return (
		<div className='NavItem'>
			{icon}
			<p>{label}</p>
		</div>
	);
}

NavbarItem.propTypes = {
	/* label below the icon */
	label: PropTypes.string,
	/* icon that represents a section */
	icon: PropTypes.element,
};

export default NavbarItem;
