import React from 'react';

import styles from './Expertise.module.scss';

interface ExperienceInfo {
	company: string;
	job: string;
	description: string;
}

interface ExperienceItem {
	date: string;
	info: ExperienceInfo;
}

interface ExperienceProps {
	data: ExperienceItem[];
}

const Expertise: React.FC<ExperienceProps> = ({ data }) => {
	return (
		<div className={styles.expertise}>
			{data.map(({ date, info }, index) => (
				<article key={index} className={styles.expertise__item}>
					<div className={styles['expertise__item-left']}>
						<h3 className={styles.expertise__title}>{info.company}</h3>
						<p>{date}</p>
					</div>
					<div className={styles['expertise__item-right']}>
						<h3 className={styles.expertise__title}>{info.job}</h3>
						<p>{info.description}</p>
					</div>
				</article>
			))}
		</div>
	);
};

export default Expertise;
