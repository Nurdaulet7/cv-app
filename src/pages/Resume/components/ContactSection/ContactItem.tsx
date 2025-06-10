import React from 'react';
import { IconType } from 'react-icons';

import styles from './ContactSection.module.scss';

interface Props {
	label?: string;
	value: string;
	href: string;
	icon: IconType;
}

const ContactItem: React.FC<Props> = ({ label, value, href, icon: Icon }) => {
	return (
		<a
			className={styles.contact}
			href={href}
			target='_blank'
			rel='noopener noreferrer'
		>
			<div className={styles.contact__icon}>
				<Icon />
			</div>
			<div className={styles.contact__text}>
				{label ? (
					<>
						<span className={styles.contact__label}>{label}</span>
						<br />
						<span className={styles['contact__text-span']}>{value}</span>
					</>
				) : (
					<span className={styles.contact__label}>{value}</span>
				)}
			</div>
		</a>
	);
};

export default ContactItem;
