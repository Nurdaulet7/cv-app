export interface Skill {
	name: string;
	level: number; // from 0 to 100
}

export const skills: Skill[] = [
	{ name: 'React', level: 90 },
	{ name: 'TypeScript', level: 85 },
	{ name: 'HTML/CSS', level: 95 },
	{ name: 'SCSS', level: 90 },
	{ name: 'Git', level: 80 },
];
