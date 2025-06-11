export class ApiService {
	private static getHeaders(): HeadersInit {
		return {
			'Content-Type': 'application/json',
		};
	}

	static async request<T>(
		endpoint: string,
		method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
		body?: any
	): Promise<T> {
		try {
			const response = await fetch(endpoint, {
				method,
				headers: this.getHeaders(),
				...(body && { body: JSON.stringify(body) }),
			});

			if (!response.ok) {
				const errorText = await response.text().catch(() => 'Unknown error');
				throw new Error(`[${response.status}] ${errorText}`);
			}

			const contentLength = response.headers.get('content-length');
			if (!contentLength || parseInt(contentLength) === 0) {
				return null as T;
			}

			return response.json() as Promise<T>;
		} catch (error) {
			console.error('API Error:', error);
			throw error;
		}
	}
}
