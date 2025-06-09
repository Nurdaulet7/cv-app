import React from 'react';

import styles from './PortfolioInfo.module.scss';

interface Props {
	title: string;
	text: string;
	url: string;
}

const PortfolioInfo: React.FC<Props> = ({ title, text, url }) => {
	return (
		<article className={styles['portfolio-info']}>
			<div className={styles['portfolio-info__image-wrapper']}>
				<img
					src={url}
					alt={title}
					className={styles['portfolio-info__image']}
				/>

				<div className={styles['portfolio-info__overlay']}>
					<h3 className={styles['portfolio-info__title']}>{title}</h3>
					<p className={styles['portfolio-info__text']}>{text}</p>
					<a
						href={url}
						target='_blank'
						rel='noopener noreferrer'
						className={styles['portfolio-info__link']}
					>
						View resource
					</a>
				</div>
			</div>
		</article>
	);
};

export default PortfolioInfo;
