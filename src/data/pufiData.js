import { ReactComponent as PufiPuff } from '../assets/svg/PufiPuff.svg';
import { ReactComponent as PufiRain } from '../assets/svg/PufiRain.svg';
import { ReactComponent as PufiCart } from '../assets/svg/PufiCart.svg';
import { ReactComponent as PufiNap } from '../assets/svg/PufiPuff.svg';

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

export { headerNavbarItems, footerNavbarColumnItems };
