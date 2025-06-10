import React from 'react';

import { FeedbackEntry } from '@/types/feedback';

import FeedbackItem from './FeedbackItem';

import styles from './Feedback.module.scss';

interface FeedbackProps {
	data: FeedbackEntry[];
}

const Feedback: React.FC<FeedbackProps> = ({ data }) => {
	return (
		<ul className={styles.feedback}>
			{data.map((item, index) => (
				<li key={index}>
					<FeedbackItem {...item} />
				</li>
			))}
		</ul>
	);
};

export default Feedback;
