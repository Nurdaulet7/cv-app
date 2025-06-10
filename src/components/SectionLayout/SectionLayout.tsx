import React, { ReactNode } from 'react';

import { clsx } from 'clsx';

import styles from './SectionLayout.module.scss';

interface Props {
	id: string;
	title: string;
	children: ReactNode;
	className?: string;
}

const SectionLayout: React.FC<Props> = ({
	id,
	title,
	children,
	className = '',
}) => {
	return (
		<section id={id} className={clsx(styles.section, className)}>
			<h2 className={styles.section__title}>{title}</h2>
			<div className={styles.section__content}>{children}</div>
		</section>
	);
};

export default SectionLayout;
