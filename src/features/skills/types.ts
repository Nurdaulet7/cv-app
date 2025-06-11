import { STATUS } from '@/constants/status';

export interface SkillItem {
	name: string;
	range: number;
}

export interface SkillsState {
	items: SkillItem[];
	status: STATUS;
	error: null | string;
}
