import Layout from '@/components/Layout/Layout';

import AboutSection from './components/AboutSection/AboutSection';
import EducationSection from './components/EducationSection/EducationSection';
import ExperienceSection from './components/ExperienceSection/ExperienceSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';

const Resume = () => {
	return (
		<Layout>
			<AboutSection />
			<EducationSection />
			<ExperienceSection />
			<PortfolioSection />
		</Layout>
	);
};

export default Resume;
