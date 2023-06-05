import styles from './date-filter.module.css';

/* eslint-disable-next-line */
export interface DateFilterProps {}

export function DateFilter(props: DateFilterProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DateFilter!</h1>
    </div>
  );
}

export default DateFilter;
