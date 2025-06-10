import React, { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa6';

import clsx from 'clsx';

import styles from './BackToTop.module.scss';

const BackToTop: React.FC = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setVisible(window.scrollY > 300);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<button
			className={clsx(
				styles.backToTop,
				visible && styles['backToTop--visible']
			)}
			onClick={scrollToTop}
			aria-label='Back to top'
		>
			<FaChevronUp />
		</button>
	);
};

export default BackToTop;
