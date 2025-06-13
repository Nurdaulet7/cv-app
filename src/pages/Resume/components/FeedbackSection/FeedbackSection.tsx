import React from 'react';

import SectionLayout from '@/components/SectionLayout/SectionLayout';

import Feedback from './Feedback';

const feedbackData = [
	{
		feedback:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae suscipit laborum nostrum eligendi, vitae excepturi doloremque earum maiores odit amet ut perferendis et! Ex ad saepe, amet sequi nihil, quos quis fugit ratione odit sed repellat cum tenetur quidem? Maiores corporis nam dolorum eum sit. Eaque quidem et consectetur libero?',
		reporter: {
			name: 'John Doe',
			photoUrl:
				'https://t4.ftcdn.net/jpg/09/70/97/69/360_F_970976958_j2GLYIb2PbwVr6e33QRtONEDWymrrHJK.jpg',
			citeUrl: 'https://www.citeexample.com',
		},
	},
	{
		feedback:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eum, ad qui, illo aliquid nisi dicta ex, harum labore provident voluptas accusamus animi consequatur veritatis ab. Odio officia sapiente repellat vero veniam, aliquid rem laboriosam a? Rerum adipisci sint dicta recusandae sed. Consequatur ex cumque minima architecto recusandae delectus aperiam modi consequuntur, laborum iusto cupiditate iure, error optio officiis? Quas excepturi dolorum ratione repudiandae officiis velit nisi unde molestiae accusamus perferendis natus reiciendis asperiores necessitatibus illum voluptas, consequuntur aliquid eum!',
		reporter: {
			name: 'Jane Smith',
			photoUrl:
				'https://t4.ftcdn.net/jpg/09/70/97/69/360_F_970976958_j2GLYIb2PbwVr6e33QRtONEDWymrrHJK.jpg',
			citeUrl: 'https://www.citeexample.com',
		},
	},
	{
		feedback:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae suscipit laborum nostrum eligendi, vitae excepturi doloremque earum maiores odit amet ut perferendis et! Ex ad saepe, amet sequi nihil, quos quis fugit ratione odit sed repellat cum tenetur quidem? Maiores corporis nam dolorum eum sit. Eaque quidem et consectetur libero?',
		reporter: {
			name: 'John Doe',
			photoUrl:
				'https://t4.ftcdn.net/jpg/09/70/97/69/360_F_970976958_j2GLYIb2PbwVr6e33QRtONEDWymrrHJK.jpg',
			citeUrl: 'https://www.citeexample.com',
		},
	},
	{
		feedback:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae suscipit laborum nostrum eligendi, vitae excepturi doloremque earum maiores odit amet ut perferendis et! Ex ad saepe, amet sequi nihil, quos quis fugit ratione odit sed repellat cum tenetur quidem? Maiores corporis nam dolorum eum sit. Eaque quidem et consectetur libero?',
		reporter: {
			name: 'John Doe',
			photoUrl:
				'https://t4.ftcdn.net/jpg/09/70/97/69/360_F_970976958_j2GLYIb2PbwVr6e33QRtONEDWymrrHJK.jpg',
			citeUrl: 'https://www.citeexample.com',
		},
	},
];

const FeedbackSection: React.FC = () => {
	return (
		<SectionLayout id='feedbacks' title='Feedbacks'>
			<Feedback data={feedbackData} />
		</SectionLayout>
	);
};

export default FeedbackSection;
