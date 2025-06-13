import React from 'react';

import Button from '@/components/Button/Button';
import { selectSkills } from '@/features/skills/selectors';
import { addSkill } from '@/features/skills/thunk';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import FormikInput from './FormikInput/FormikInput';

import styles from './SkillsForms.module.scss';

interface FormValues {
	name: string;
	range: number;
}

const SkillsForm: React.FC = () => {
	const dispatch = useAppDispatch();
	const existingSkills = useAppSelector(selectSkills);

	const initialValues: FormValues = {
		name: '',
		range: 10,
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
			.min(10, 'Minimum range is 10')
			.max(100, 'Maximum range is 100'),
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
				<Form className={styles.form__body}>
					<FormikInput
						name='name'
						label='Skill name:'
						placeholder='Enter skill name'
					/>

					<FormikInput
						name='range'
						label='Skill range:'
						type='number'
						placeholder='Enter skill range'
					/>

					<Button
						text='Add skill'
						type='submit'
						className={styles.form__button}
					/>
				</Form>
				{/* {({ errors, touched }) => (
					<Form className={styles.form__body}>
						<div className={styles.form__field}>
							<label htmlFor='name'>Skill name:</label>
							<Field
								id='name'
								name='name'
								placeholder='Enter skill name'
								className={`${styles.form__input} ${
									touched.name && errors.name
										? styles['form__input--error']
										: ''
								}`}
							/>
							<ErrorMessage
								name='name'
								component='div'
								className={styles.form__error}
							/>
						</div>

						<div className={styles.form__field}>
							<label htmlFor='range'>Skill range:</label>
							<Field
								id='range'
								name='range'
								type='number'
								placeholder='Enter skill range'
								className={`${styles.form__input} ${
									touched.range && errors.range
										? styles['form__input--error']
										: ''
								}`}
							/>
							<ErrorMessage
								name='range'
								component='div'
								className={styles.form__error}
							/>
						</div>

						<Button
							text='Add skill'
							type='submit'
							className={styles.form__button}
						/>
					</Form>
				)} */}
			</Formik>
		</div>
	);
};

export default SkillsForm;
