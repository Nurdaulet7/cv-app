import { useEffect } from 'react';
import { CgSpinnerTwo } from 'react-icons/cg';

import SectionLayout from '@/components/SectionLayout/SectionLayout';
import Timeline from '@/components/Timline/Timeline';
import { STATUS } from '@/constants/status';
import {
	selectEducationError,
	selectEducationStatus,
	selectEducations,
} from '@/features/education/selectors';
import { fetchEducations } from '@/features/education/thunk';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';

import styles from './EducationSection.module.scss';

const EducationSection = () => {
	const dispatch = useAppDispatch();

	const education = useAppSelector(selectEducations);
	const status = useAppSelector(selectEducationStatus);
	const error = useAppSelector(selectEducationError);

	useEffect(() => {
		dispatch(fetchEducations());
	}, [dispatch]);

	return (
		<SectionLayout id='education' title='Education'>
			{status === STATUS.LOADING && (
				<div className={styles.education__loading}>
					<CgSpinnerTwo className={styles.education__spinner} />
				</div>
			)}

			{status === STATUS.FAILED && (
				<div className={styles.education__error}>
					Something went wrong. Please check your connection.
					<br />
					{error}
				</div>
			)}

			{status === STATUS.SUCCEEDED && <Timeline data={education} />}
		</SectionLayout>
	);
};

export default EducationSection;
