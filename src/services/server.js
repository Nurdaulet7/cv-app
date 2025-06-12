import { createServer } from 'miragejs';

export function makeServer() {
	return createServer({
		routes() {
			this.namespace = 'api';

			// education endpoint
			this.get('/educations', () => {
				return [
					{
						date: '2020',
						title: 'High School Diploma',
						description: 'Graduated from School-Lyceum №15, Kyzylorda.',
					},
					{
						date: '2021',
						title: 'Lorem ipsum dolor sit.',
						description:
							'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nobis eius, consequuntur, perspiciatis odit magnam voluptatibus aliquam earum vitae adipisci quisquam laudantium architecto ipsum iure id obcaecati quas ea nihil, quae quaerat. Qui est nobis voluptatum error quod at, voluptates assumenda neque sint ut ab porro iste dolores id facere sequi doloribus illum quam. Doloremque, veniam. Perferendis sapiente aut officiis dolor distinctio id nesciunt atque veritatis culpa, assumenda repellat commodi?',
					},
					{
						date: '2022',
						title: 'Lorem ipsum dolor sit amet consectetur.',
						description:
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, repellendus excepturi, deleniti accusantium iste mollitia quae alias ipsa numquam eius doloribus iure tempora quo eveniet possimus labore voluptates a quod.',
					},
					{
						date: '2023',
						title: 'Lorem, ipsum dolor.',
						description:
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rem repellendus, odit excepturi obcaecati iure sapiente pariatur laboriosam error beatae. Harum unde error debitis officia illum quo est molestiae nam cupiditate dignissimos sequi esse, nisi incidunt perferendis distinctio dolorum corrupti?',
					},
					{
						date: '2024',
						title: 'Bachelor of Computer Science',
						description:
							'Graduated from Suleyman Demirel University (SDU), Faculty of Engineering and Natural Sciences. Specialty: Computer Science. Almaty.',
					},
					{
						date: '2025',
						title: 'Front-end Development with AI Tools',
						description: 'EPAM & Astana Hub',
					},
				];
			});

			// skills endpoints
			this.get('/skills', () => {
				return [
					{ name: 'React', range: 90 },
					{ name: 'TypeScript', range: 85 },
					{ name: 'HTML/CSS', range: 95 },
					{ name: 'SCSS', range: 90 },
					{ name: 'Git', range: 80 },
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
