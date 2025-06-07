import Layout from '@/components/Layout/Layout';

import styles from './Resume.module.scss';

const Resume = () => {
	return (
		<Layout>
			<section id='about' className={styles.section}>
				<h2>About</h2>
				<p>Информация обо мне.</p>
			</section>

			<section id='education' className={styles.section}>
				<h2>Education</h2>
				<p>Это главный экран.</p>
			</section>

			<section id='experience' className={styles.section}>
				<h2>Experience</h2>
				<p>Опыт, навыки и образование.</p>
			</section>
		</Layout>
	);
};

export default Resume;
