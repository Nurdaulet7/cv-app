import React from 'react';

import Button from '@/components/Button/Button';
import { selectSkills } from '@/features/skills/selectors';
import { addSkill } from '@/features/skills/thunk';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import FormikInput from './FormikInput/FormikInput';

import styles from './SkillsForms.module.scss';

const MINIMUM_RANGE = 10;
const MAXIMUM_RANGE = 100;

interface FormValues {
	name: string;
	range: number;
}

const SkillsForm: React.FC = () => {
	const dispatch = useAppDispatch();
	const existingSkills = useAppSelector(selectSkills);

	const initialValues: FormValues = {
		name: '',
		range: MAXIMUM_RANGE,
	};

	const validationSchema = Yup.object().shape({
		name: Yup.string()
			.trim()
			.required('Skill name is required')
			.notOneOf(
				existingSkills.map((s) => s.name),
				'This skill already exists'
			),
		range: Yup.number()
			.required('Range is required')
			.min(MINIMUM_RANGE, `Minimum range is ${MINIMUM_RANGE}`)
			.max(MAXIMUM_RANGE, `Maximum range is ${MAXIMUM_RANGE}`),
	});

	const handleSubmit = async (
		values: FormValues,
		{ resetForm }: { resetForm: () => void }
	) => {
		await dispatch(addSkill(values));
		resetForm();
	};

	return (
		<div className={styles.form}>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ isSubmitting }) => (
					<Form className={styles.form__body}>
						<FormikInput
							name='name'
							label='Skill name:'
							placeholder='Enter skill name'
							disabled={isSubmitting}
						/>

						<FormikInput
							name='range'
							label='Skill range:'
							type='number'
							placeholder='Enter skill range'
							disabled={isSubmitting}
						/>

						<Button
							text={isSubmitting ? 'Adding...' : 'Add skill'}
							type='submit'
							className={styles.form__button}
							disabled={isSubmitting}
						/>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default SkillsForm;
