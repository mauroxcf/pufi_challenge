import React from 'react';
import PropTypes from 'prop-types';

//Assets
import '../assets/styles/main.scss';

//UI
import CarouselWithImgAndText from '../components/ui/CarouselWithImgAndText';
import ProductAndDescription from '../components/ui/ProductAndDescription';
import Newsletter from '../components/ui/Newsletter';
import InstagramSection from '../components/ui/InstagramSection';

/**
 * It takes in two props, carouselData and productDetailsWithImage, and returns  a
 * CarouselWithImgAndText component, ProductAndDescription components, and a Newsletter
 * component.
 * @returns The return s three components being rendered. A carousel with images, a few
 * descriptions of the product and a newsletter form
 */
function Main({ carouselData, productDetailsWithImage, instagramPictures }) {
	return (
		<div className='MainContent'>
			<CarouselWithImgAndText carouselData={carouselData} />
			{productDetailsWithImage.map((product) => (
				<ProductAndDescription key={product.id} productDetails={product} />
			))}
			<InstagramSection instagramPictures={instagramPictures} />
			<Newsletter />
		</div>
	);
}

Main.propTypes = {
	/* array of objects with all labels and images to show in the carousel */
	carouselData: PropTypes.array,
	/* contents each product to show with a image, title and description */
	productDetailsWithImage: PropTypes.array,
	/* contents a few images to show */
	instagramPictures: PropTypes.array,
};

export default Main;
