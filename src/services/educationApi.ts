import { API_ENDPOINTS } from '@/constants/api';

import { EducationItem } from '@/features/education/types';

import { ApiService } from './apiService';

export class EducationApi {
	static getAll(): Promise<EducationItem[]> {
		return ApiService.request<EducationItem[]>(API_ENDPOINTS.EDUCATIONS);
	}
}
