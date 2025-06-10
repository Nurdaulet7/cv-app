import React from 'react';

import styles from './SkillItem.module.scss';

interface Props {
	name: string;
	level: number;
}

const SkillItem: React.FC<Props> = ({ name, level }) => {
	return (
		<div className={styles.skill}>
			<div className={styles.skill__bar} style={{ width: `${level}%` }}>
				<span className={styles.skill__label}>{name}</span>
			</div>
		</div>
	);
};

export default SkillItem;
