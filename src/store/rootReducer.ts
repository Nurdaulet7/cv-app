import authReducer from '@/features/auth/authSlice';
import educationReducer from '@/features/education/educationSlice';
import skillsReducer from '@/features/skills/skillsSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	education: educationReducer,
	skills: skillsReducer,
	auth: authReducer,
});
export default rootReducer;
