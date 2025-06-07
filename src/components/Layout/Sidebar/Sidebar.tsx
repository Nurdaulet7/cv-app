import React from 'react';

import avatar from '@/assets/images/avatar_medium.png';
import Button from '@/components/Button/Button';
import PhotoBox from '@/components/PhotoBox/PhotoBox';
import SidebarNavigation from '@/components/SidebarNavigation/SidebarNavigation';
import clsx from 'clsx';
import { ChevronLeft } from 'lucide-react';

import styles from './Sidebar.module.scss';

interface SidebarProps {
	collapsed: boolean;
	onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggle }) => {
	return (
		<nav
			className={clsx(
				styles.sidebar,
				collapsed && styles['sidebar--collapsed']
			)}
		>
			<button
				className={styles.sidebar__toggle}
				onClick={onToggle}
				aria-label='Toggle sidebar'
			>
				{collapsed ? '☰' : '✖'}
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
				<SidebarNavigation />

				<Button text='Go back' icon={<ChevronLeft />} />
			</div>
		</nav>
	);
};

export default Sidebar;
