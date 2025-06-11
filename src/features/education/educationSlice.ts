import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface EducationItem {
	date: string;
	title: string;
	description: string;
}

interface EducationState {
	items: EducationItem[];
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
}

const initialState: EducationState = {
	items: [],
	status: 'idle',
	error: null,
};

export const fetchEducations = createAsyncThunk(
	'education/fetchEducations',
	async () => {
		const res = await fetch('/api/educations');
		if (!res.ok) throw new Error('Failed to fetch educations');
		const data = await res.json();
		return data as EducationItem[];
	}
);

// Slice
const educationSlice = createSlice({
	name: 'education',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchEducations.pending, (state) => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(fetchEducations.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.items = action.payload;
			})
			.addCase(fetchEducations.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message || 'Unknown error';
			});
	},
});

export default educationSlice.reducer;
