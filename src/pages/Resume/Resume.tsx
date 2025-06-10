import Layout from '@/components/Layout/Layout';

import AboutSection from './components/AboutSection/AboutSection';
import ContactSection from './components/ContactSection/ContactSection';
import EducationSection from './components/EducationSection/EducationSection';
import ExperienceSection from './components/ExperienceSection/ExperienceSection';
import FeedbackSection from './components/FeedbackSection/FeedbackSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import SkillSection from './components/SkillSection/SkillSection';

const Resume = () => {
	return (
		<Layout>
			<AboutSection />
			<EducationSection />
			<ExperienceSection />
			<SkillSection />
			<PortfolioSection />
			<ContactSection />
			<FeedbackSection />
		</Layout>
	);
};

export default Resume;
