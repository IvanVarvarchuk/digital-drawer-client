import styles from './convert.module.css';

/* eslint-disable-next-line */
export interface ConvertProps {}

export function Convert(props: ConvertProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Convert!</h1>
    </div>
  );
}

export default Convert;
