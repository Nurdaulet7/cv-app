import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/Button/Button';
import { clsx } from 'clsx';

import styles from './NotFound.module.scss';

const NotFound: React.FC = () => {
	const navigate = useNavigate();

	const goBackHome = () => {
		navigate('/');
	};

	return (
		<main className={styles['not-found']} aria-labelledby='not-found__title'>
			<section className={clsx(styles['not-found__content'], 'container')}>
				<h1 id='not-found__title' className={styles['not-found__title']}>
					Page not found
				</h1>

				<Button
					text='Back to home'
					aria-label='Back to main page'
					onClick={goBackHome}
					className={styles['not-found__button']}
				/>
			</section>
		</main>
	);
};

export default NotFound;
