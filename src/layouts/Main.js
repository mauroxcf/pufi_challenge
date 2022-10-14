import React from 'react';

//Assets
import '../assets/styles/main.scss';

//UI
import CarouselWithImgAndText from '../components/ui/CarouselWithImgAndText';

function Main({ carouselData }) {
	return (
		<div className='MainContent'>
			<CarouselWithImgAndText carouselData={carouselData} />
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}

export default Main;
