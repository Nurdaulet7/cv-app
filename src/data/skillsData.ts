export interface Skill {
	name: string;
	range: number; // from 0 to 100
}

export const skills: Skill[] = [
	{ name: 'React', range: 90 },
	{ name: 'TypeScript', range: 85 },
	{ name: 'HTML/CSS', range: 95 },
	{ name: 'SCSS', range: 90 },
	{ name: 'Git', range: 80 },
];
