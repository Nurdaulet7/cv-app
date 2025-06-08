import React from 'react';

import SectionLayout from '@/components/SectionLayout/SectionLayout';
import Timeline from '@/components/Timline/Timeline';

import styles from './EducationSection.module.scss';

const educationData = [
	{
		date: '2020',
		title: 'High School Diploma',
		text: 'Graduated from School-Lyceum №15, Kyzylorda.',
	},
	{
		date: '2024',
		title: 'Bachelor of Computer Science',
		text: 'Graduated from Suleyman Demirel University (SDU), Faculty of Engineering and Natural Sciences. Specialty: Computer Science. Almaty.',
	},
	{
		date: '2025',
		title: 'Front-end Development with AI Tools',
		text: 'EPAM & Astana Hub',
	},
];

const EducationSection = () => {
	return (
		<SectionLayout id='education' title='Education'>
			<Timeline data={educationData} />
		</SectionLayout>
	);
};

export default EducationSection;
