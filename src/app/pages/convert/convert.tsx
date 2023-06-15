import { useState } from 'react';
import {
  Container,
  Row,
  Col,
  FormControl,
  Button,
  ListGroup,
  ProgressBar,
} from 'react-bootstrap';
import styles from './convert.module.css';
import QueueList from 'src/app/components/queue-list/queue-list';
import CloseButton from 'react-bootstrap/CloseButton';

// export interface ConvertProps {}

export function Convert() {
  const [file, setFile] = useState<File | null>(null);
  const [queue, setQueue] = useState<(File | null)[]>([]);
  const [progress, setProgress] = useState(0);

  const handleDropFile = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    let files = [];

    if (event.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (let i = 0; i < event.dataTransfer.items.length; i++) {
        if (event.dataTransfer.items[i].kind === 'file') {
          const file = event.dataTransfer.items[i].getAsFile();
          setFile(file);
          files.push(file);
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (let i = 0; i < event.dataTransfer.files.length; i++) {
        const file = event.dataTransfer.files[i];
        setFile(file);
        files.push(file);
      }
    }
    setQueue([...queue, ...files]);
  };

  const handleSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('event.dataTransfer.items.length');
    const files = event.target.files;
    if (files && files.length > 0) {
      setQueue([...queue, ...Array.from(files)]);
      setFile(files[0]);
    }
  };

  const handleConvert = () => {
    // Logic to add file to conversion queue and initiate conversion
    const filename = file ? file.name : 'Untitled';
    // setQueue([...queue, filename]);
    setFile(null);
  };

  const handleCancelConversion = (index: number) => {
    // Logic to cancel conversion at specified index in queue
    // const newQueue = [...queue];
    // newQueue.splice(index, 1);
    // setQueue(newQueue);
  };

  return (
    <Container>
      <h1>Upload your files to convert them!</h1>

      <Row className="my-5">
        <Col className="border rounded p-3" sm={6}>
          <div
            onDrop={handleDropFile}
            onDragOver={(event) => event.preventDefault()}
            className={`${styles['dropzone']} text-center`}
          >
            <p>Drag and drop a file here, or click to select a file.</p>
            <FormControl type="file" multiple onChange={handleSelectFile} />
          </div>

          {file && (
            <>
              <p className="my-3">Selected files:</p>
              {queue.map((file, index) => (
                <ListGroup key={index}>
                  <ListGroup.Item>
                    <div className={styles.actions}>
                      <span>{file?.name}</span>
                      <CloseButton
                        onClick={() => {
                          queue.length === 1
                            ? setQueue([])
                            : setQueue(
                                queue.filter((f) => f?.name === file?.name)
                              );
                        }}
                      />
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              ))}
              <Button onClick={handleConvert}>Convert</Button>
            </>
          )}
        </Col>

        <Col className="border rounded p-3" sm={6}>
          {/* <h2>Conversion Queue:</h2>
          {queue.length > 0 ? (
            <ListGroup>
              {queue.map((filename, index) => (
                <ListGroup.Item key={`queue-item-${index}`} className="d-flex justify-content-between align-items-center">
                  {filename}
                  <Button size="sm" variant="danger" onClick={() => handleCancelConversion(index)}>Cancel</Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <p>No files currently in queue.</p>
          )} */}
          <QueueList files={queue}></QueueList>
        </Col>
      </Row>

      {progress > 0 && progress < 100 && (
        <div className="mt-5">
          <h2>Conversion Progress:</h2>
          <ProgressBar now={progress} label={`${progress}%`} />
        </div>
      )}

      <Row className="my-5">
        <h2>Conversion Results:</h2>
        {/* Logic to display links to converted files */}
      </Row>
    </Container>
  );
}

export default Convert;
