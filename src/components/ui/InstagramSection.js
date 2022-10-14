import React from 'react';
import PropTypes from 'prop-types';

//Assets
import '../../assets/styles/instagramsection.scss';

/**
 * It takes an array of objects as a prop, and then maps over that array to create an image tag for
 * each object in the array.
 * @returns An array of objects.
 */
function InstagramSection({ instagramPictures }) {
	return (
		<div className='InstagramContainer'>
			<p className='NewsLetterTitle'>INSTAGRAM</p>
			<p className='SuscribeText'>#ESPUFI</p>
			<div className='InstagramGrid'>
				{instagramPictures.map((item) => (
					<img src={item.src} alt={item.alt} key={item.id} />
				))}
			</div>
		</div>
	);
}

InstagramSection.propTypes = {
	/* contents a few images to show */
	instagramPictures: PropTypes.array,
};

export default InstagramSection;
