import React from 'react';

import styles from './Timeline.module.scss';

interface TimelineItem {
	date: string;
	title: string;
	text: string;
}

interface TimelineProps {
	data: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
	return (
		<ul className={styles.timeline}>
			{data.map(({ date, title, text }) => (
				<li key={title} className={styles.timeline__item}>
					<div className={styles.timeline__left}>
						<span className={styles.timeline__date}>{date}</span>
					</div>

					<article className={styles.timeline__card}>
						<h3 className={styles.timeline__title}>{title}</h3>
						<p className={styles.timeline__text}>{text}</p>
					</article>
				</li>
			))}
		</ul>
	);
};

export default Timeline;
