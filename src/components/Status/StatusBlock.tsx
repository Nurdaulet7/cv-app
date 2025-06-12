import { CgSpinnerTwo } from 'react-icons/cg';

import { STATUS } from '@/constants/status';

import styles from './Status.module.scss';

interface StatusBlockProps {
	status: STATUS;
	error?: string | null;
	children?: React.ReactNode;
}

const StatusBlock = ({ status, error, children }: StatusBlockProps) => {
	if (status === STATUS.LOADING) {
		return (
			<div className={styles.status}>
				<CgSpinnerTwo className={styles.status__spinner} />
			</div>
		);
	}

	if (status === STATUS.FAILED) {
		return (
			<div className={styles.status}>
				{error || 'Something went wrong. Please try again.'}
			</div>
		);
	}

	return <>{children}</>;
};

export default StatusBlock;
