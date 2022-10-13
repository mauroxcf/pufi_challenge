import React from 'react';

//Assets
import '../assets/styles/footer.scss';
import { ReactComponent as PufiLogo } from '../assets/svg/PufiLogo.svg';
import { ReactComponent as QrIcon } from '../assets/svg/QrIcon.svg';
import { ReactComponent as SecurityIcon } from '../assets/svg/SecurityIcon.svg';
import { ReactComponent as FacebookIcon } from '../assets/svg/FacebookIcon.svg';
import { ReactComponent as InstagramIcon } from '../assets/svg/InstagramIcon.svg';
import { ReactComponent as TwitterIcon } from '../assets/svg/TwitterIcon.svg';
import { ReactComponent as StarIcon } from '../assets/svg/StarIcon.svg';

function Footer({ footerData }) {
	return (
		<div className='Footer'>
			<div className='FooterContainer'>
				<div className='NavFooter'>
					<div>
						<PufiLogo width='96' height='64' />
					</div>
					<div className='NavFooterColumn'>
						{footerData[0].map((navItem) => (
							<p key={navItem.id}>{navItem.label}</p>
						))}
					</div>
					<div className='NavFooterColumn'>
						{footerData[1].map((navItem) => (
							<p key={navItem.id}>{navItem.label}</p>
						))}
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
				<div className='NavFooterSecond'>
					<p>PUFI Copyright 2017 - Todos los derechos reservados</p>
					<div className='BrandWithIcon'>
						<StarIcon width='24' height='24' />
						<p>BRANDLIVE</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
