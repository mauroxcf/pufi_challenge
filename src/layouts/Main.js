import React from 'react';
import PropTypes from 'prop-types';

//Assets
import '../assets/styles/main.scss';

//UI
import CarouselWithImgAndText from '../components/ui/CarouselWithImgAndText';
import ProductAndDescription from '../components/ui/ProductAndDescription';
import Newsletter from '../components/ui/Newsletter';

function Main({ carouselData, productDetailsWithImage }) {
	return (
		<div className='MainContent'>
			<CarouselWithImgAndText carouselData={carouselData} />
			{productDetailsWithImage.map((product) => (
				<ProductAndDescription key={product.id} productDetails={product} />
			))}
			<div></div>
			<Newsletter />
		</div>
	);
}

Main.propTypes = {
	/* array of objects with all labels and images to show in the carousel */
	carouselData: PropTypes.array,
	/* contents each product to show with a image, title and description */
	productDetailsWithImage: PropTypes.array,
};

export default Main;
