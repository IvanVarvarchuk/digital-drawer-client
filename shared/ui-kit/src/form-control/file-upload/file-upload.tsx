import styles from './file-upload.module.css';

/* eslint-disable-next-line */
export interface FileUploadProps {}

export function FileUpload(props: FileUploadProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FileUpload!</h1>
    </div>
  );
}

export default FileUpload;
