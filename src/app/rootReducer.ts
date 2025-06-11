import educationReducer from '@/features/education/educationSlice';
import skillsReducer from '@/features/skills/skillsSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	education: educationReducer,
	skills: skillsReducer,
});
export default rootReducer;
