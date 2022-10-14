import React from 'react';
import PropTypes from 'prop-types';

//Assets
import '../../assets/styles/carousel.scss';

//UI
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CarouselWithImgAndText({ carouselData }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: true,
	};
	return (
		<div className='CarouselContainer'>
			<Slider {...settings}>
				{carouselData.map((carouselItem) => (
					<div className='CarouselSingleImg' key={carouselItem.id}>
						<img src={carouselItem.src} alt={carouselItem.alt} />
						<div className='CarouselInsideContent'>
							<p>{carouselItem.label}</p>
							<button>SHOP</button>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}

CarouselWithImgAndText.propTypes = {
	/* array of objects with all labels and images to show in the carousel */
	carouselData: PropTypes.array,
};

export default CarouselWithImgAndText;
