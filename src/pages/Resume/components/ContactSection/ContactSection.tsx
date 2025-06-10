import React from 'react';

import SectionLayout from '@/components/SectionLayout/SectionLayout';

import ContactItem from './ContactItem';
import { contacts } from './contactData';

import styles from './ContactSection.module.scss';

const ContactSection = () => {
	return (
		<SectionLayout id='contacts' title='Contacts'>
			<ul className={styles.contacts}>
				{contacts.map((contact) => (
					<li className={styles.contacts__item}>
						<ContactItem key={contact.value} {...contact} />
					</li>
				))}
			</ul>
		</SectionLayout>
	);
};

export default ContactSection;
