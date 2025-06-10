import React, { ButtonHTMLAttributes } from 'react';

import { clsx } from 'clsx';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	icon?: React.ReactNode;
	className?: string;
	type?: 'button' | 'submit' | 'reset';
	size?: 'sm' | 'md' | 'lg';
	onClick?: () => void;
	disabled?: boolean;
	form?: string;
}

const Button: React.FC<ButtonProps> = ({
	text,
	icon,
	className = '',
	size = 'md',
	type = 'button',
	onClick,
	disabled = false,
	form,
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={clsx(className, styles.button, styles[`button--${size}`], {
				[styles['button--with-icon']]: !!icon,
			})}
			disabled={disabled}
			form={form}
		>
			{icon}
			<span>{text}</span>
		</button>
	);
};

export default Button;
