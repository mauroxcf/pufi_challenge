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

export { headerNavbarItems };
