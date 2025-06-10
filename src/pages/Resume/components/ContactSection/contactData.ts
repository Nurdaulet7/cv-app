// contactData.ts
import { IconType } from 'react-icons';
import { FaEnvelope, FaFacebook, FaPhone, FaTelegram } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

export interface ContactItem {
	type: 'phone' | 'email' | 'telegram' | 'whatsapp' | 'facebook';
	label?: string;
	value: string;
	href: string;
	icon: IconType;
}

export const contacts: ContactItem[] = [
	{
		type: 'phone',
		value: '+1 234 567 890',
		href: 'tel:+1234567890',
		icon: FaPhone,
	},
	{
		type: 'email',
		value: 'hello@example.com',
		href: 'mailto:hello@example.com',
		icon: FaEnvelope,
	},
	{
		type: 'telegram',
		label: 'Telegram',
		value: '@yourusername',
		href: 'https://t.me/yourusername',
		icon: FaTelegram,
	},
	{
		type: 'whatsapp',
		label: 'WhatsApp',
		value: '+1 234 567 890',
		href: 'https://wa.me/1234567890',
		icon: IoLogoWhatsapp,
	},
	{
		type: 'facebook',
		label: 'Facebook',
		value: 'facebook.com/yourprofile',
		href: 'https://facebook.com/yourprofile',
		icon: FaFacebook,
	},
];
