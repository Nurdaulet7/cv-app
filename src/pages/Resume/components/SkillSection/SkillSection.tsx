import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import EmptyState from '@/components/EmptyState/EmptyState';
import SectionLayout from '@/components/SectionLayout/SectionLayout';
import StatusBlock from '@/components/Status/StatusBlock';
import { selectIsAdmin } from '@/features/auth/selectors';
import {
	selectSkills,
	selectSkillsError,
	selectSkillsStatus,
} from '@/features/skills/selectors';
import { fetchSkills } from '@/features/skills/thunk';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';

import SkillForm from './SkillForm/SkillsForm';
import SkillItem from './SkillItem/SkillItem';
import SkillScale from './SkillScale/SkillScale';

const SkillSection: React.FC = () => {
	const skills = useAppSelector(selectSkills);
	const status = useAppSelector(selectSkillsStatus);
	const error = useAppSelector(selectSkillsError);
	const isAdmin = useSelector(selectIsAdmin);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchSkills());
	}, [dispatch]);

	return (
		<SectionLayout id='skills' title='Skills'>
			<StatusBlock status={status} error={error}>
				{isAdmin && <SkillForm />}
				{skills.length === 0 ? (
					<EmptyState message='No skills found.' />
				) : (
					<>
						{skills.map((skill) => (
							<SkillItem
								key={skill.name}
								name={skill.name}
								level={skill.range}
							/>
						))}
						<SkillScale />
					</>
				)}
			</StatusBlock>
		</SectionLayout>
	);
};

export default SkillSection;
