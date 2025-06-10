import React from 'react';

import styles from './SkillScale.module.scss';

const levels = ['Beginner', 'Proficient', 'Expert', 'Master'];

const SkillScale: React.FC = () => {
	return (
		<div className={styles.scale}>
			<div className={styles.scale__line}>
				{levels.map((level, index) => (
					<div key={level} className={styles.scale__point}>
						<span className={styles.scale__label}>{level}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default SkillScale;
