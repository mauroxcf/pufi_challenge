import React from 'react';

//Assets
import '../assets/styles/footer.scss';
import { ReactComponent as PufiLogo } from '../assets/svg/PufiLogo.svg';
import { ReactComponent as QrIcon } from '../assets/svg/QrIcon.svg';
import { ReactComponent as SecurityIcon } from '../assets/svg/SecurityIcon.svg';
import { ReactComponent as FacebookIcon } from '../assets/svg/FacebookIcon.svg';
import { ReactComponent as InstagramIcon } from '../assets/svg/InstagramIcon.svg';
import { ReactComponent as TwitterIcon } from '../assets/svg/TwitterIcon.svg';

function Footer() {
	return (
		<div className='Footer'>
			<div className='FooterContainer'>
				<div className='NavFooter'>
					<div>
						<PufiLogo width='96' height='64' />
					</div>
					<div className='NavFooterColumn'>
						<p>PUFI RAIN</p>
						<p>PUFI PUFF</p>
						<p>PUFI CART</p>
						<p>PUFI NAP</p>
					</div>
					<div className='NavFooterColumn'>
						<p>CONTACTO</p>
						<p>AYUDA</p>
						<p>COMO COMPRAR</p>
						<p>TÉRMINOS Y CONDICIONES</p>
					</div>
					<div className='NavFooterColumn'>
						<p>COMPRA 100% SEGURA</p>
						<div className='NavFooterRowItems'>
							<QrIcon width='32' height='32' />
							<SecurityIcon width='32' height='32' />
							<p>COMPRA CON LA GARANTÍA DE PUFI</p>
						</div>
					</div>
					<div className='NavFooterRowItems'>
						<p>SÍGUENOS EN</p>
						<FacebookIcon width='24' height='24' />
						<TwitterIcon width='24' height='24' />
						<InstagramIcon width='24' height='24' />
					</div>
				</div>
				<div>Footer dos</div>
			</div>
		</div>
	);
}

export default Footer;
