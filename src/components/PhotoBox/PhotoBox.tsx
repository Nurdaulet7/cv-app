import clsx from 'clsx';

import styles from './PhotoBox.module.scss';

type Size = 'small' | 'medium' | 'large';
interface PhotoBoxProps {
	src: string;
	alt: string;
	size?: Size;
	className?: string;
}

const sizeMap: Record<Size, number> = {
	small: 40,
	medium: 100,
	large: 163,
};

const PhotoBox: React.FC<PhotoBoxProps> = ({
	src,
	alt,
	size = 'medium',
	className = '',
}) => {
	const sizeValue = sizeMap[size];

	return (
		<img
			src={src}
			alt={alt}
			width={sizeValue}
			height={sizeValue}
			className={clsx(styles.photoBox, styles[`photoBox--${size}`], className)}
		/>
	);
};

export default PhotoBox;
