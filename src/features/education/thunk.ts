import { EducationApi } from '@/services/educationApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { EducationItem } from './types';

export const fetchEducations = createAsyncThunk<
	EducationItem[],
	void,
	{ rejectValue: string }
>('education/fetchEducations', async (_, thunkAPI) => {
	try {
		return await EducationApi.getAll();
	} catch (error) {
		return thunkAPI.rejectWithValue('Failed to fetch education data');
	}
});
