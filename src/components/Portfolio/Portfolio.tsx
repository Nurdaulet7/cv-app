import React, { useMemo, useState } from 'react';

import clsx from 'clsx';

import PortfolioInfo from './PortfolioInfo/PortfolioInfo';
import { PortfolioItem, portfolioItems } from './data';

import styles from './Portfolio.module.scss';

const Portfolio: React.FC = () => {
	const [activeCategory, setActiveCategory] = useState<string>('All');

	const categories = useMemo(() => {
		const unique = Array.from(
			new Set(portfolioItems.map((item) => item.category))
		);
		return ['All', ...unique];
	}, []);

	const filteredItems = useMemo(() => {
		return activeCategory === 'All'
			? portfolioItems
			: portfolioItems.filter((item) => item.category === activeCategory);
	}, [activeCategory]);

	return (
		<div className={styles.portfolio}>
			<nav className={styles.portfolio__tabs} aria-label='Portfolio categories'>
				{categories.map((category) => (
					<button
						key={category}
						type='button'
						className={clsx(
							styles.portfolio__tab,
							activeCategory === category && styles['portfolio__tab--active']
						)}
						onClick={() => setActiveCategory(category)}
						aria-pressed={activeCategory === category}
					>
						{category}
					</button>
				))}
			</nav>

			<div
				className={clsx(styles.portfolio__items, 'grid', 'grid--3')}
				role='list'
			>
				{filteredItems.map((item: PortfolioItem) => (
					<PortfolioInfo
						key={item.id}
						title={item.title}
						text={item.description}
						url={item.url}
					/>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
