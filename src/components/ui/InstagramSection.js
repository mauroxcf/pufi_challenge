import React from 'react';

//Assets
import '../../assets/styles/instagramsection.scss';

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

export default InstagramSection;
