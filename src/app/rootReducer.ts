import educationReducer from '@/features/education/educationSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	education: educationReducer,
});
export default rootReducer;
