import { API_ENDPOINTS } from '@/constants/api';

import { SkillItem } from '@/features/skills/types';

import { ApiService } from './apiService';

export class SkillsApi {
	static getAll(): Promise<SkillItem[]> {
		return ApiService.request<SkillItem[]>(API_ENDPOINTS.SKILLS.ALL);
	}

	static add(payload: SkillItem): Promise<SkillItem> {
		return ApiService.request<SkillItem>(
			API_ENDPOINTS.SKILLS.ADD,
			'POST',
			payload
		);
	}
}
