import SectionLayout from '@/components/SectionLayout/SectionLayout';
import Timeline from '@/components/Timline/Timeline';

const educationData = [
	{
		date: '2020',
		title: 'High School Diploma',
		text: 'Graduated from School-Lyceum №15, Kyzylorda.',
	},
	{
		date: '2021',
		title: 'Lorem ipsum dolor sit.',
		text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nobis eius, consequuntur, perspiciatis odit magnam voluptatibus aliquam earum vitae adipisci quisquam laudantium architecto ipsum iure id obcaecati quas ea nihil, quae quaerat. Qui est nobis voluptatum error quod at, voluptates assumenda neque sint ut ab porro iste dolores id facere sequi doloribus illum quam. Doloremque, veniam. Perferendis sapiente aut officiis dolor distinctio id nesciunt atque veritatis culpa, assumenda repellat commodi?',
	},
	{
		date: '2022',
		title: 'Lorem ipsum dolor sit amet consectetur.',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, repellendus excepturi, deleniti accusantium iste mollitia quae alias ipsa numquam eius doloribus iure tempora quo eveniet possimus labore voluptates a quod.',
	},
	{
		date: '2023',
		title: 'Lorem, ipsum dolor.',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rem repellendus, odit excepturi obcaecati iure sapiente pariatur laboriosam error beatae. Harum unde error debitis officia illum quo est molestiae nam cupiditate dignissimos sequi esse, nisi incidunt perferendis distinctio dolorum corrupti?',
	},
	{
		date: '2024',
		title: 'Bachelor of Computer Science',
		text: 'Graduated from Suleyman Demirel University (SDU), Faculty of Engineering and Natural Sciences. Specialty: Computer Science. Almaty.',
	},
	{
		date: '2025',
		title: 'Front-end Development with AI Tools',
		text: 'EPAM & Astana Hub',
	},
];

const EducationSection = () => {
	return (
		<SectionLayout id='education' title='Education'>
			<Timeline data={educationData} />
		</SectionLayout>
	);
};

export default EducationSection;
