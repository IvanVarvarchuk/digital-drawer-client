import styles from './conversion-history.module.css';

/* eslint-disable-next-line */
export interface ConversionHistoryProps {}

export function ConversionHistory(props: ConversionHistoryProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ConversionHistory!</h1>
    </div>
  );
}

export default ConversionHistory;
