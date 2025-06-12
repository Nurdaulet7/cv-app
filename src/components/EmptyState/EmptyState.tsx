import styles from './EmptyState.module.scss';

interface EmptyStateProps {
	message: string;
}

const EmptyState = ({ message }: EmptyStateProps) => {
	return <div className={styles.empty}>{message}</div>;
};

export default EmptyState;
