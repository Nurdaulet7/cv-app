import clsx from 'clsx';

import styles from './PhotoBox.module.scss';

interface PhotoBoxProps {
	src: string;
	alt: string;
	size?: 'small' | 'medium' | 'large';
	className?: string;
}

const PhotoBox = ({ src, alt, size = 'medium', className }: PhotoBoxProps) => {
	return (
		<img
			className={clsx(styles.photo, styles[size], className)}
			src={src}
			alt={alt}
		/>
	);
};

export default PhotoBox;
