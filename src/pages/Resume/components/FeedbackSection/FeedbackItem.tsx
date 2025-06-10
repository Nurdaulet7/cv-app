import React from 'react';

import { FeedbackEntry } from '@/types/feedback';

import styles from './Feedback.module.scss';

const FeedbackItem: React.FC<FeedbackEntry> = ({ feedback, reporter }) => {
	return (
		<article className={styles.feedback__item}>
			<p className={styles.feedback__text}>{feedback}</p>
			<footer className={styles.feedback__footer}>
				<img
					src={reporter.photoUrl}
					alt={reporter.name}
					className={styles.feedback__avatar}
				/>
				<div className={styles.feedback__info}>
					<span className={styles.feedback__name}>{reporter.name}, </span>
					<a
						href={reporter.citeUrl}
						target='_blank'
						rel='noopener noreferrer'
						className={styles.feedback__link}
					>
						{new URL(reporter.citeUrl).hostname}
					</a>
				</div>
			</footer>
		</article>
	);
};

export default FeedbackItem;
