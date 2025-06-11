import { STATUS } from '@/constants/status';

export interface EducationItem {
	date: string;
	title: string;
	description: string;
}

export interface EducationState {
	items: EducationItem[];
	status: STATUS;
	error: string | null;
}
