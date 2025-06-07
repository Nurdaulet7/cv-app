import Layout from '@/components/Layout/Layout';

import AboutSection from './components/AboutSection/AboutSection';
import EducationSection from './components/EducationSection/EducationSection';
import ExperienceSection from './components/ExperienceSection/ExperienceSection';

import styles from './Resume.module.scss';

const Resume = () => {
	return (
		<Layout>
			<AboutSection />
			<EducationSection />
			<ExperienceSection />
		</Layout>
	);
};

export default Resume;
