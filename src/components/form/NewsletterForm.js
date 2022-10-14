import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//Assets
import '../../assets/styles/newsletter.scss';

function NewsletterForm() {
	const formValidationSchema = Yup.object().shape({
		email: Yup.string()
			.email('email invalido')
			.min(2, 'Muy corto!')
			.max(50, 'Muy largo!')
			.required('Requerido'),
	});
	return (
		<div>
			<Formik
				initialValues={{ email: '' }}
				validationSchema={formValidationSchema}
				onSubmit={(values, actions) => {
					if (values) alert(`Email ${values.email} enviado!`);
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<Field
							type='email'
							name='email'
							placeholder='Ingresa tu email'
							className='FormBar'
						/>
						<ErrorMessage
							name='email'
							component='div'
							className='ErrorTextForm'
						/>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default NewsletterForm;
