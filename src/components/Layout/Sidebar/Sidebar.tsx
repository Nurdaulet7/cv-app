import React from 'react';
import { FaChevronLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

import avatar from '@/assets/images/avatar_medium.png';
import Button from '@/components/Button/Button';
import Navigation from '@/components/Navigation/Navigation';
import PhotoBox from '@/components/PhotoBox/PhotoBox';
import { ROUTES } from '@/constants/routes';
import { clsx } from 'clsx';

import styles from './Sidebar.module.scss';

interface SidebarProps {
	isCollapsed: boolean;
	onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggle }) => {
	const navigate = useNavigate();
	const goBack = () => {
		navigate(ROUTES.HOME);
	};

	return (
		<nav
			className={clsx(
				styles.sidebar,
				isCollapsed && styles['sidebar--collapsed']
			)}
		>
			<button
				className={styles.sidebar__toggle}
				onClick={onToggle}
				aria-label='Toggle sidebar'
			>
				{isCollapsed ? '☰' : '✖'}
			</button>

			<div className={styles.sidebar__content}>
				<div className={styles.sidebar__avatar}>
					<PhotoBox
						src={avatar}
						className='sidebar__avatar-img'
						size='medium'
						alt='User avatar'
					/>
					<h3 className={styles['sidebar__avatar-name']}>John Doe</h3>
				</div>
				<Navigation />

				<Button
					text='Go back'
					icon={<FaChevronLeft />}
					type='button'
					onClick={goBack}
				/>
			</div>
		</nav>
	);
};

export default Sidebar;
