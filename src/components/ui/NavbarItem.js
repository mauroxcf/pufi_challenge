import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/header.scss';

/**
 * It takes in a label and an icon, and returns a div with the icon and label.
 * @returns A React component.
 */
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
