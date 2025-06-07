import styles from './SidebarNavigation.module.scss';

const SidebarNavigation = () => {
	return (
		<ul className={styles.navigation}>
			<li>Home</li>
			<li>Resume</li>
			<li>Projects</li>
		</ul>
	);
};

export default SidebarNavigation;
