import { useNavigate } from 'react-router-dom';

import avatar from '@/assets/images/avatar_large.png';
import Button from '@/components/Button/Button';
import PhotoBox from '@/components/PhotoBox/PhotoBox';
import { ROUTES } from '@/constants/routes';

import styles from './Home.module.scss';

const Home = () => {
	const navigate = useNavigate();

	const goToResume = () => {
		navigate(ROUTES.RESUME);
	};

	return (
		<main className={styles.home}>
			<section className={styles['home__intro']}>
				<PhotoBox
					className={styles['home_avatar']}
					src={avatar}
					size='large'
					alt='User avatar'
				/>
				<h1 className={styles['home__name']}>John Doe</h1>

				<p className={styles['home__role']}>Programmer. Creative. Innovator</p>
				<p className={styles['home__desc']}>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
					commodo ligula eget dolor. Aenean massa. Cum sociis natoque
				</p>

				<Button onClick={goToResume} text='Know more' />
			</section>
		</main>
	);
};

export default Home;
