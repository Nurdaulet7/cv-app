import { STATUS } from '@/constants/status';
import { createSlice } from '@reduxjs/toolkit';

import { SkillsState } from './types';

import { addSkill, fetchSkills } from './thunk';

const initialState: SkillsState = {
	items: [],
	status: STATUS.IDLE,
	error: null,
};

// Slice
const skillsSlice = createSlice({
	name: 'skills',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSkills.pending, (state) => {
				state.status = STATUS.LOADING;
				state.error = null;
			})
			.addCase(fetchSkills.fulfilled, (state, action) => {
				state.status = STATUS.SUCCEEDED;
				state.items = action.payload;
			})
			.addCase(fetchSkills.rejected, (state, action) => {
				state.status = STATUS.FAILED;
				state.error = action.payload || 'Unknown error';
			})
			.addCase(addSkill.fulfilled, (state, action) => {
				state.items.push(action.payload);
			});
	},
});

export default skillsSlice.reducer;
