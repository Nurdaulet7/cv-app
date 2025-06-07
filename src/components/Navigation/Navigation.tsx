import { useEffect, useState } from 'react';

import clsx from 'clsx';
import {
	BriefcaseBusiness,
	Gem,
	GraduationCap,
	LucideIcon,
	MessageCircle,
	Pencil,
	User,
	Navigation as navigationIcon,
} from 'lucide-react';

import styles from './Navigation.module.scss';

interface NavItem {
	label: string;
	href: string;
	icon: LucideIcon;
}

const navItems: NavItem[] = [
	{ label: 'About me', href: '#about', icon: User },
	{ label: 'Education', href: '#education', icon: GraduationCap },
	{ label: 'Experience', href: '#experience', icon: Pencil },
	{ label: 'Skills', href: '#skills', icon: Gem },
	{ label: 'Portfolio', href: '#portfolio', icon: BriefcaseBusiness },
	{ label: 'Contacts', href: '#contacts', icon: navigationIcon },
	{ label: 'Feedbacks', href: '#feedbacks', icon: MessageCircle },
];

const Navigation: React.FC = () => {
	const [activeId, setActiveId] = useState<string>('');

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(`#${entry.target.id}`);
					}
				});
			},
			{
				threshold: 0.6,
			}
		);

		const sections = document.querySelectorAll('section');
		sections.forEach((section) => observer.observe(section));

		return () => {
			sections.forEach((section) => observer.unobserve(section));
		};
	}, []);

	return (
		<nav className={styles.navigation}>
			<ul className={styles.navigation__list}>
				{navItems.map(({ label, href, icon: Icon }) => (
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
