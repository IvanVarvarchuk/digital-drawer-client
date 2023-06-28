import { Card, Button, Row } from 'react-bootstrap';
import { Form } from 'react-router-dom';
import styles from './file-card.module.css';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import * as Types from '../../../api/axios-client';
import { useDownloadQuery } from '../../../api/axios-client/Query';

/* eslint-disable-next-line */
export interface FileCardProps {
  id: string;
  name: string;
}

export function FileCard({ id, name }: FileCardProps) {
  const { data, refetch } = useDownloadQuery(id, {
    refetchOnWindowFocus: false,
    enabled: false,
  });
  function downloadFunc() {
    refetch();
  }

  useEffect(() => {
    if (data !== undefined && data !== null) {
      const anchor = document.createElement('a');
      const link = URL.createObjectURL(data?.data ?? new Blob());

      anchor.setAttribute('href', link);
      anchor.setAttribute('download', '');
      document.body.appendChild(anchor);
      anchor.click();
      anchor.parentNode?.removeChild(anchor);
      URL.revokeObjectURL(link);
    }
  }, [data]);
  return (
    <Card className={styles.card}>
      <Card.Body className={styles.cardBody}>
        <p className="px-2">{name}</p>
        <Button size="sm" onClick={downloadFunc} variant="primary">
          <FontAwesomeIcon icon={faDownload} />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default FileCard;
