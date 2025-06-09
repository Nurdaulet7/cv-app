import courseApp_code from '@/assets/images/courseApp_code.png';
import courseApp_page from '@/assets/images/courseApp_page.png';
import portfolio_code from '@/assets/images/portfolio_code.png';
import portfolio_page from '@/assets/images/portfolio_page.png';
import uikit from '@/assets/images/uikit.png';

export interface PortfolioItem {
	id: number;
	category: string;
	title: string;
	description: string;
	url: string;
}

export const portfolioItems: PortfolioItem[] = [
	{
		id: 1,
		title: 'React App Page',
		category: 'UI',
		description:
			'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis ',
		url: courseApp_page,
	},
	{
		id: 2,
		title: 'React App Code',
		category: 'Code',
		description:
			'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis ',
		url: courseApp_code,
	},
	{
		id: 3,
		title: 'UI Kit',
		category: 'UI',
		description:
			'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis ',
		url: uikit,
	},
	{
		id: 4,
		title: 'Portfolio Website',
		category: 'UI',
		description:
			'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis ',
		url: portfolio_page,
	},
	{
		id: 5,
		title: 'Portfolio code',
		category: 'Code',
		description:
			'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis ',
		url: portfolio_code,
	},
];
