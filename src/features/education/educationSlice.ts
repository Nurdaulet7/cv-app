import { STATUS } from '@/constants/status';
import { createSlice } from '@reduxjs/toolkit';

import { EducationState } from './types';

import { fetchEducations } from './thunk';

const initialState: EducationState = {
	items: [],
	status: STATUS.IDLE,
	error: null,
};

// Slice
const educationSlice = createSlice({
	name: 'education',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchEducations.pending, (state) => {
				state.status = STATUS.LOADING;
				state.error = null;
			})
			.addCase(fetchEducations.fulfilled, (state, action) => {
				state.status = STATUS.SUCCEEDED;
				state.items = action.payload;
			})
			.addCase(fetchEducations.rejected, (state, action) => {
				state.status = STATUS.FAILED;
				state.error = action.error.message || 'Unknown error';
			});
	},
});

export default educationSlice.reducer;
