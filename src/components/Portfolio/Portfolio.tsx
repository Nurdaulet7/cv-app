import React, { useMemo, useState } from 'react';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

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
				<AnimatePresence mode='sync'>
					{filteredItems.map((item: PortfolioItem) => (
						<motion.div
							key={item.id}
							layout
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							transition={{ duration: 0.3 }}
						>
							<PortfolioInfo
								key={item.id}
								title={item.title}
								text={item.description}
								url={item.url}
							/>
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default Portfolio;
