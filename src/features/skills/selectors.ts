import { RootState } from '@/store/store';

export const selectSkills = (state: RootState) => state.skills.items;
export const selectSkillsStatus = (state: RootState) => state.skills.status;
export const selectSkillsError = (state: RootState) => state.skills.error;
