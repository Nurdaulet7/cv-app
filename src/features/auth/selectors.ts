import { RootState } from '@/store/store';

export const selectIsAdmin = (state: RootState) => state.auth.isAdmin;
export const selectUserId = (state: RootState) => state.auth.userId;
