import { useEffect, useState } from 'react';

import { useActiveSection } from '@/hooks/useActiveSection';
import clsx from 'clsx';
import {
	BriefcaseBusiness,
	Gem,
	GraduationCap,
	LucideIcon,
	MessageCircle,
	Navigation as NavigationIcon,
	Pencil,
	User,
} from 'lucide-react';

import styles from './Navigation.module.scss';

interface NavigationItem {
	label: string;
	href: string;
	icon: LucideIcon;
}

const NAVIGATION_ITEMS: NavigationItem[] = [
	{ label: 'About me', href: '#about', icon: User },
	{ label: 'Education', href: '#education', icon: GraduationCap },
	{ label: 'Experience', href: '#experience', icon: Pencil },
	{ label: 'Skills', href: '#skills', icon: Gem },
	{ label: 'Portfolio', href: '#portfolio', icon: BriefcaseBusiness },
	{ label: 'Contacts', href: '#contacts', icon: NavigationIcon },
	{ label: 'Feedbacks', href: '#feedbacks', icon: MessageCircle },
];

const Navigation: React.FC = () => {
	const activeId = useActiveSection();
	console.log(activeId);

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
