import { IconType } from 'react-icons';
import { BiSolidMessageRoundedDetail, BiSolidNavigation } from 'react-icons/bi';
import { BsBriefcaseFill } from 'react-icons/bs';
import { FaGem, FaGraduationCap, FaPencilAlt, FaUser } from 'react-icons/fa';

import { useActiveSection } from '@/hooks/useActiveSection';
import { clsx } from 'clsx';

import styles from './Navigation.module.scss';

interface NavigationItem {
	label: string;
	href: string;
	icon: IconType;
}

const NAVIGATION_ITEMS: NavigationItem[] = [
	{ label: 'About me', href: '#about', icon: FaUser },
	{ label: 'Education', href: '#education', icon: FaGraduationCap },
	{ label: 'Experience', href: '#experience', icon: FaPencilAlt },
	{ label: 'Skills', href: '#skills', icon: FaGem },
	{ label: 'Portfolio', href: '#portfolio', icon: BsBriefcaseFill },
	{ label: 'Contacts', href: '#contacts', icon: BiSolidNavigation },
	{ label: 'Feedbacks', href: '#feedbacks', icon: BiSolidMessageRoundedDetail },
];

const Navigation: React.FC = () => {
	const activeId = useActiveSection();

	return (
		<nav className={styles.navigation}>
			<ul className={styles.navigation__list}>
				{NAVIGATION_ITEMS.map(({ label, href, icon: Icon }) => (
					<li key={href} className={styles.navigation__item}>
						<a
							href={href}
							className={clsx(
								styles.navigation__link,
								activeId === href && styles['navigation__link--active']
							)}
						>
							<Icon className={styles.navigation__icon} size={20} />
							<span className={styles.navigation__label}>{label}</span>
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
