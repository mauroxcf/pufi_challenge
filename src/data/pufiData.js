//ASSETS
import { ReactComponent as PufiPuff } from '../assets/svg/PufiPuff.svg';
import { ReactComponent as PufiRain } from '../assets/svg/PufiRain.svg';
import { ReactComponent as PufiCart } from '../assets/svg/PufiCart.svg';
import { ReactComponent as PufiNap } from '../assets/svg/PufiPuff.svg';
import beachOne from '../assets/img/beachOne.jpg';
import beachTwo from '../assets/img/beachTwo.jpg';
import beachThree from '../assets/img/beachThree.jpg';

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

export { headerNavbarItems, footerNavbarColumnItems, ImagesAndTextCarousel };
