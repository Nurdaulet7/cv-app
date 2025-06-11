import { createServer } from 'miragejs';

export function makeServer() {
	return createServer({
		routes() {
			this.namespace = 'api';

			// education endpoint
			this.get('/educations', () => {
				return [
					{
						date: '2018 – 2022',
						title: 'Bachelor in Computer Science',
						description:
							'Studied algorithms, software engineering and frontend development',
					},
					{
						date: '2023 – Present',
						title: 'EPAM Capstone Program',
						description: 'Advanced training in real-world frontend projects',
					},
				];
			});

			// skills endpoints
			this.get('/skills', () => {
				return [
					{ name: 'React', range: 80 },
					{ name: 'TypeScript', range: 70 },
				];
			});

			this.post('/skills', (schema, request) => {
				const attrs = JSON.parse(request.requestBody);
				console.log('Skill received:', attrs);
				return attrs;
			});

			// artificial delay for GET /educations
			this.timing = 3000;
		},
	});
}
