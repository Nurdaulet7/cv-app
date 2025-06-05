import avatar from '@/assets/images/avatar.png';
import PhotoBox from '@/components/PhotoBox/PhotoBox';

import styles from './Home.module.scss';

const Home = () => {
	return (
		<div>
			<PhotoBox src={avatar} alt='User avatar' size='large' />
			<PhotoBox src={avatar} alt='User avatar' size='medium' />
			<PhotoBox src={avatar} alt='User avatar' size='small' />
		</div>
	);
};

export default Home;
