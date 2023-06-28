import { Card, Button, Row } from 'react-bootstrap';
import { Form } from 'react-router-dom';
import styles from './file-card.module.css';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import row from 'antd/es/row';
import React from 'react';

/* eslint-disable-next-line */
export interface FileCardProps {
  name: string;
  link: string;
}

export function FileCard({ name, link }: FileCardProps) {
  const ancorRef = React.useRef<HTMLAnchorElement>(null);
  function downloadFunc() {
    const anchor = document.createElement('a');
    anchor.setAttribute('href', link);
    anchor.setAttribute('download', '');
    document.body.appendChild(anchor);
    anchor.click();
    anchor.parentNode?.removeChild(anchor);
  }
  const handleClick = () => {
    ancorRef.current?.click();
  };
  return (
    <Card className={styles.card}>
        <Card.Body className={styles.cardBody}>
          <p className='px-2'>{name}</p>
          <Button size='sm' onClick={downloadFunc} variant="primary">
            <FontAwesomeIcon icon={faDownload} />
          </Button>
        </Card.Body>
    </Card>
  );
}

export default FileCard;
