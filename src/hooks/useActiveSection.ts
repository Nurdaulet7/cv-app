import { useEffect, useState } from 'react';

export const useActiveSection = (sectionSelector = 'section') => {
	const [activeId, setActiveId] = useState('');

	useEffect(() => {
		const sections = Array.from(
			document.querySelectorAll<HTMLElement>(sectionSelector)
		);

		if (!sections.length) return;

		let observer: IntersectionObserver;

		const handleIntersect = (entries: IntersectionObserverEntry[]) => {
			for (const entry of entries) {
				if (entry.isIntersecting && entry.target.id) {
					setActiveId(`#${entry.target.id}`);
					break;
				}
			}
		};

		observer = new IntersectionObserver(handleIntersect, {
			threshold: 0.3,
			rootMargin: '0px 0px -30% 0px',
		});

		sections.forEach((section) => observer.observe(section));

		// Fallback: scroll-based detection
		const handleScroll = () => {
			let currentId = '';
			const scrollY = window.scrollY;
			const buffer = window.innerHeight * 0.3;

			for (const section of sections) {
				const offsetTop = section.offsetTop;
				const offsetBottom = offsetTop + section.offsetHeight;

				if (scrollY + buffer >= offsetTop && scrollY + buffer < offsetBottom) {
					currentId = `#${section.id}`;
				}
			}

			if (currentId && currentId !== activeId) {
				setActiveId(currentId);
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			sections.forEach((section) => observer.unobserve(section));
			window.removeEventListener('scroll', handleScroll);
		};
	}, [sectionSelector]);

	return activeId;
};
