import React from 'react';

import SectionLayout from '@/components/SectionLayout/SectionLayout';

import Expertise from './Expertise/Expertise';

import styles from './ExperienceSection.module.scss';

const experienceData = [
	{
		date: '2013–2014',
		info: {
			company: 'Google',
			job: 'Front-end Developer / PHP Programmer',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringil',
		},
	},
	{
		date: '2012',
		info: {
			company: 'Twitter',
			job: 'Web Developer',
			description:
				'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim',
		},
	},
	{
		date: '2010',
		info: {
			company: 'EPAM',
			job: 'Web Developer',
			description:
				'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim',
		},
	},
	{
		date: '2009',
		info: {
			company: 'Koleso',
			job: 'Full-Stack Developer',
			description:
				'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim',
		},
	},
];

const ExperienceSection = () => {
	return (
		<SectionLayout
			id='experience'
			className={styles['experience-section']}
			title='Experience'
		>
			<Expertise data={experienceData} />
		</SectionLayout>
	);
};

export default ExperienceSection;
