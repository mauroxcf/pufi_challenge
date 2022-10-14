//ASSETS
import { ReactComponent as PufiPuff } from '../assets/svg/PufiPuff.svg';
import { ReactComponent as PufiRain } from '../assets/svg/PufiRain.svg';
import { ReactComponent as PufiCart } from '../assets/svg/PufiCart.svg';
import { ReactComponent as PufiNap } from '../assets/svg/PufiPuff.svg';
import beachOne from '../assets/img/beachOne.jpg';
import beachTwo from '../assets/img/beachTwo.jpg';
import beachThree from '../assets/img/beachThree.jpg';
import PufiCartProduct from '../assets/img/PufiCartProduct.jpg';
import PufiNapProduct from '../assets/img/PufiNapProduct.jpg';
import PufiPuffProduct from '../assets/img/PufiPuffProduct.jpg';
import PufiRainProduct from '../assets/img/PufiRainProduct.jpg';
import PufiCartSmall from '../assets/img/PufiCartSmall.jpeg';
import PufiNapSmall from '../assets/img/PufiNapSmall.jpg';
import PufiPuffSmall from '../assets/img/PufiPuffSmall.jpg';
import PufiRainSmall from '../assets/img/PufiRainSmall.jpg';

const headerNavbarItems = [
	{ label: 'PUFI PUFF', icon: <PufiPuff />, id: 'PUFF' },
	{ label: 'PUFI RAIN', icon: <PufiRain />, id: 'RAIN' },
	{ label: 'PUFI CART', icon: <PufiCart />, id: 'CART' },
	{ label: 'PUFI NAP', icon: <PufiNap />, id: 'NAP' },
];

const footerNavbarColumnItems = [
	[
		{ label: 'PUFI PUFF', id: 'PUFF' },
		{ label: 'PUFI RAIN', id: 'RAIN' },
		{ label: 'PUFI CART', id: 'CART' },
		{ label: 'PUFI NAP', id: 'NAP' },
	],
	[
		{ label: 'CONTACTO', id: 'CONTACTO' },
		{ label: 'AYUDA', id: 'AYUDA' },
		{ label: 'COMO COMPRAR', id: 'COMPRAR' },
		{ label: 'TÉRMINOS Y CONDICIONES', id: 'TÉRMINOS' },
	],
];

const ImagesAndTextCarousel = [
	{
		alt: 'beachOne',
		src: beachOne,
		label: 'ESTAR CÓMODO, NUNCA FUE TAN FÁCIL',
		id: 'One',
	},
	{
		alt: 'beachTwo',
		src: beachTwo,
		label: 'PUEDES LLEVARLO A CUALQUIER LUGAR',
		id: 'Two',
	},
	{
		alt: 'beachThree',
		src: beachThree,
		label: 'SIMPLE DE LLEVAR',
		id: 'Three',
	},
];

const productDetailsWithImage = [
	{
		reverse: false,
		id: 'RainProduct',
		image: PufiRainProduct,
		alt: 'PufiRainProduct',
		smallImage: PufiRainSmall,
		smallAlt: 'PufiRainSmall',
		title: 'PUFI RAIN',
		description: 'Un hermoso paraguas para usar',
	},
	{
		reverse: true,
		id: 'NapProduct',
		image: PufiNapProduct,
		alt: 'PufiNapProduct',
		smallImage: PufiNapSmall,
		smallAlt: 'PufiCartSmall',
		title: 'PUFI NAP',
		description: 'almohada cómoda para dormir',
	},
	{
		reverse: false,
		id: 'CartProduct',
		image: PufiCartProduct,
		alt: 'PufiCartProduct',
		smallImage: PufiCartSmall,
		smallAlt: 'PufiCartSmall',
		title: 'PUFI CART',
		description: 'Una bolsa para hacer compras',
	},
	{
		reverse: true,
		id: 'PuffProduct',
		image: PufiPuffProduct,
		alt: 'PufiPuffProduct',
		smallImage: PufiPuffSmall,
		smallAlt: 'PufiPuffSmall',
		title: 'PUFI PUFF',
		description: 'Puf muy sencillo para llevar a todos lados y estar cómodo',
	},
];

const instagramPictures = [
	{ alt: 'inst1', src: PufiCartProduct, id: 'inst1' },
	{ alt: 'inst2', src: PufiNapProduct, id: 'inst2' },
	{ alt: 'inst3', src: PufiPuffProduct, id: 'inst3' },
	{ alt: 'inst4', src: PufiRainProduct, id: 'inst4' },
	{ alt: 'inst5', src: PufiCartProduct, id: 'inst5' },
	{ alt: 'inst6', src: PufiNapProduct, id: 'inst6' },
];

export {
	headerNavbarItems,
	footerNavbarColumnItems,
	ImagesAndTextCarousel,
	productDetailsWithImage,
	instagramPictures,
};
