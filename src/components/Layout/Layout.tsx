import React, { useState } from 'react';

import { clsx } from 'clsx';

import BackToTop from '../BackToTop/BackToTop';
import ToggleAdmin from '../ToggleAdmin/ToggleAdmin';
import Sidebar from './Sidebar/Sidebar';

import styles from './Layout.module.scss';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<div className={styles.layout}>
			<aside
				className={
					collapsed
						? styles['layout__sidebar--collapsed']
						: styles.layout__sidebar
				}
			>
				<Sidebar
					isCollapsed={collapsed}
					onToggle={() => setCollapsed(!collapsed)}
				/>
			</aside>

			<main className={clsx(styles.layout__main)}>
				{children}
				<BackToTop />
				<ToggleAdmin />
			</main>
		</div>
	);
};

export default Layout;
