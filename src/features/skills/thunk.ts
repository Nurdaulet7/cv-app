import { SkillsApi } from '@/services/skillsApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { SkillItem } from './types';

export const fetchSkills = createAsyncThunk<
	SkillItem[],
	void,
	{ rejectValue: string }
>('skills/fetchSkills', async (_, thunkAPI) => {
	try {
		return await SkillsApi.getAll();
	} catch (error) {
		return thunkAPI.rejectWithValue('Failed to load skills');
	}
});

export const addSkill = createAsyncThunk<
	SkillItem,
	SkillItem,
	{ rejectValue: string }
>('skills/createSkill', async (payload, thunkAPI) => {
	try {
		const newSkill = await SkillsApi.add(payload);
		return newSkill;
	} catch (error) {
		return thunkAPI.rejectWithValue('Failed to add skill');
	}
});
