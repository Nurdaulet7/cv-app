import { FiUserCheck } from 'react-icons/fi';
import { FiUserX } from 'react-icons/fi';

import { toggleAdmin } from '@/features/auth/authSlice';
import { selectIsAdmin } from '@/features/auth/selectors';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';

import styles from './ToggleAdmin.module.scss';

const ToggleAdmin = () => {
	const dispatch = useAppDispatch();
	const isAdmin = useAppSelector(selectIsAdmin);
	return (
		<button
			className={styles.toggleButton}
			onClick={() => dispatch(toggleAdmin())}
		>
			{isAdmin ? <FiUserCheck /> : <FiUserX />}
		</button>
	);
};

export default ToggleAdmin;
