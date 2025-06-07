import { useCallback, useEffect, useState } from 'react';

export const useActiveSection = (
	sectionSelector = 'section',
	threshold = 0.6
) => {
	const [activeId, setActiveId] = useState<string>('');

	const handleIntersection = useCallback(
		(entries: IntersectionObserverEntry[]) => {
			for (const entry of entries) {
				if (entry.isIntersecting && entry.target.id) {
					setActiveId(`#${entry.target.id}`);
					break;
				}
			}
		},
		[]
	);

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection, {
			threshold,
		});

		const targets = document.querySelectorAll<HTMLElement>(sectionSelector);
		targets.forEach((el) => observer.observe(el));

		return () => {
			targets.forEach((el) => observer.observe(el));
		};
	}, [handleIntersection, sectionSelector, threshold]);

	return activeId;
};
