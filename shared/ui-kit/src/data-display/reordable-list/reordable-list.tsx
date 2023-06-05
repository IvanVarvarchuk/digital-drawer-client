import styles from './reordable-list.module.css';

/* eslint-disable-next-line */
export interface ReordableListProps {}

export function ReordableList(props: ReordableListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReordableList!</h1>
    </div>
  );
}

export default ReordableList;
