import styles from './file-card.module.css';

/* eslint-disable-next-line */
export interface FileCardProps {}

export function FileCard(props: FileCardProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FileCard!</h1>
    </div>
  );
}

export default FileCard;
