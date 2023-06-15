import { useEffect, useState } from 'react';
import styles from './queue-list.module.css';
import { Button, Card, Form } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

/* eslint-disable-next-line */
export interface QueueListProps {
  files: (File | null)[];
}

export function QueueList(props: QueueListProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOnSubmit = () => {
    setIsLoading(true);
  };

  return (
    <div>
      <h2>Conversion Queue:</h2>
      {props.files.length > 0 ? (
        <div>
          <div className={styles.cardContainer}>
            {props.files.map((file, index) => (
              <div key={index}>
                <Card style={{ marginBottom: '20px' }}>
                  <Card.Img variant="top" src={URL.createObjectURL(file!)} />
                  <Card.Body>
                    <Card.Title>{file?.name}</Card.Title>
                    <Form.Select
                      aria-label="Default select example"
                      className={styles.select}
                    >
                      <option>Select file extension</option>
                      <option value="1">fix</option>
                      <option value="2">svg</option>
                      <option value="3">icv</option>
                    </Form.Select>
                    {/* <div className={styles.actions}>
                      <Button disabled={isLoading} variant="danger">
                        Remove
                      </Button>
                    </div> */}
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
          <div className={styles.actions}>
            {isLoading && (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
            <Button
              disabled={isLoading}
              onClick={handleOnSubmit}
              variant="success"
            >
              Submit
            </Button>
          </div>
        </div>
      ) : (
        <>
          <p>No files currently in queue.</p>
        </>
      )}
    </div>
  );
}

export default QueueList;
