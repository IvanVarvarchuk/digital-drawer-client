import styles from './search-filter.module.css';

/* eslint-disable-next-line */
export interface SearchFilterProps {}

export function SearchFilter(props: SearchFilterProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SearchFilter!</h1>
    </div>
  );
}

export default SearchFilter;
