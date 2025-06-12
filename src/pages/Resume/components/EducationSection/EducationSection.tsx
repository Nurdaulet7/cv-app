import { useEffect } from 'react';

import EmptyState from '@/components/EmptyState/EmptyState';
import SectionLayout from '@/components/SectionLayout/SectionLayout';
import StatusBlock from '@/components/Status/StatusBlock';
import Timeline from '@/components/Timline/Timeline';
import {
	selectEducationError,
	selectEducationStatus,
	selectEducations,
} from '@/features/education/selectors';
import { fetchEducations } from '@/features/education/thunk';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';

const EducationSection = () => {
	const dispatch = useAppDispatch();

	const educations = useAppSelector(selectEducations);
	const status = useAppSelector(selectEducationStatus);
	const error = useAppSelector(selectEducationError);

	useEffect(() => {
		dispatch(fetchEducations());
	}, [dispatch]);

	return (
		<SectionLayout id='education' title='Education'>
			<StatusBlock status={status} error={error}>
				{educations.length === 0 ? (
					<EmptyState message='No data found.' />
				) : (
					<Timeline data={educations} />
				)}
			</StatusBlock>
		</SectionLayout>
	);
};

export default EducationSection;
