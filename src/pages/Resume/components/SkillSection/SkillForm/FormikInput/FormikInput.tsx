import { ErrorMessage, Field, useField } from 'formik';

import styles from './FormikInput.module.scss';

interface FormikInputProps {
	label: string;
	name: string;
	type?: string;
	placeholder?: string;
	className?: string;
}

const FormikInput = ({
	label,
	name,
	type = 'text',
	placeholder = '',
	className = '',
}: FormikInputProps) => {
	const [field, meta] = useField(name);

	return (
		<div className={styles.field}>
			<label htmlFor={name}>{label}</label>
			<Field
				{...field}
				id={name}
				name={name}
				type={type}
				placeholder={placeholder}
				className={`${styles.field__input} ${
					meta.touched && meta.error ? styles['field__input--error'] : ''
				} ${className}`}
			/>
			<ErrorMessage
				name={name}
				component='div'
				className={styles.field__error}
			/>
		</div>
	);
};

export default FormikInput;
