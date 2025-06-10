import SectionLayout from '@/components/SectionLayout/SectionLayout';

import SkillItem from './SkillItem/SkillItem';
import SkillScale from './SkillScale/SkillScale';
import { skills } from './skillsData';

import styles from './SkillSection.module.scss';

const SkillSection: React.FC = () => {
	return (
		<SectionLayout id='skills' title='Skills'>
			<div className={styles.skills}>
				{skills.map((skill) => (
					<SkillItem key={skill.name} name={skill.name} level={skill.level} />
				))}
			</div>
			<SkillScale />
		</SectionLayout>
	);
};

export default SkillSection;
