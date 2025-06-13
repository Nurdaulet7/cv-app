import { createSlice } from '@reduxjs/toolkit';

import { AuthState } from './types';

const initialState: AuthState = {
	isAdmin: true,
	userId: 'user1',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		toggleAdmin(state) {
			state.isAdmin = !state.isAdmin;
		},
	},
});

export const { toggleAdmin } = authSlice.actions;
export default authSlice.reducer;
