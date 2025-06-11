import React from 'react';

import styles from './Timeline.module.scss';

interface TimelineItem {
	date: string;
	title: string;
	description: string;
}

interface TimelineProps {
	data: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
	if (!Array.isArray(data)) {
		return null; // или сообщение об ошибке
	}

	return (
		<ul className={styles.timeline}>
			{data.map(({ date, title, description }) => (
				<li key={title} className={styles.timeline__item}>
					<div className={styles.timeline__left}>
						<span className={styles.timeline__date}>{date}</span>
					</div>

					<article className={styles.timeline__card}>
						<h3 className={styles.timeline__title}>{title}</h3>
						<p className={styles.timeline__text}>{description}</p>
					</article>
				</li>
			))}
		</ul>
	);
};

export default Timeline;
