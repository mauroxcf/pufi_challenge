import React from 'react';

//Assets
import '../../assets/styles/newsletter.scss';
import NewsletterForm from '../form/NewsletterForm';

function Newsletter() {
	return (
		<div className='NewsLetterContainer'>
			<p className='NewsLetterTitle'>NEWSLETTER</p>
			<p className='SuscribeText'>SUSCRIBETE</p>
			<p>Y entérate de las novedades</p>
			<NewsletterForm />
		</div>
	);
}

export default Newsletter;
