import React from 'react';
import PropTypes from 'prop-types';

//Assets
import '../../assets/styles/productAndDescription.scss';
import { ReactComponent as Arrow } from '../../assets/svg/Arrow.svg';

function ProductAndDescription({ productDetails }) {
	return (
		<div
			className={`ProductDescriptionContainer ${
				productDetails.reverse ? 'ReverseContainer' : ''
			}`}
		>
			<img src={productDetails.image} alt={productDetails.alt} />
			<div className='ProductDescription'>
				<img src={productDetails.smallImage} alt={productDetails.smallAlt} />
				<p className='ProductTitle'>{productDetails.title}</p>
				<hr />
				<p className='ProductText'>{productDetails.description}</p>
				<div className='SeeMoreContainer'>
					<Arrow width='16' height='16' />
					<p>VER MAS</p>
				</div>
			</div>
		</div>
	);
}

ProductAndDescription.propTypes = {
	/* contents the id, images, title and small description */
	productDetails: PropTypes.object,
};

export default ProductAndDescription;
