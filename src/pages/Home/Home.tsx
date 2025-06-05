import avatar from '@/assets/images/avatar_large.png';
import PhotoBox from '@/components/PhotoBox/PhotoBox';

import styles from './Home.module.scss';

const Home = () => {
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

				<a href='/resume' className={styles['home__button']}>
					View Resume
				</a>
			</section>
		</main>
	);
};

export default Home;
