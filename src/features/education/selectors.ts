import { RootState } from '@/app/store';

export const selectEducations = (state: RootState) => state.education.items;
export const selectEducationStatus = (state: RootState) =>
	state.education.status;
export const selectEducationError = (state: RootState) => state.education.error;
