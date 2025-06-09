import React from 'react';

import Portfolio from '@/components/Portfolio/Portfolio';
import SectionLayout from '@/components/SectionLayout/SectionLayout';

const PortfolioSection: React.FC = () => {
	return (
		<SectionLayout id='portfolio' title='Portfolio'>
			<Portfolio />
		</SectionLayout>
	);
};

export default PortfolioSection;
