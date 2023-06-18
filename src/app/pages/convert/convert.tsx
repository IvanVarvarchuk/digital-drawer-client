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
import QueueList from '../../components/queue-list/queue-list';
import CloseButton from 'react-bootstrap/CloseButton';
import useConvertionState, {
  ConvertionContextProvider,
} from './state/use-convertion-state/use-convertion-state';

export default function Convert() {
  return (
    <ConvertionContextProvider>
      <ConvertPageContent />
    </ConvertionContextProvider>
  );
}

export function ConvertPageContent() {
  const { state, dispatch } = useConvertionState();
  const [progress, setProgress] = useState(0);

  const handleDropFile = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files: File[] = [];

    if (event.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (let i = 0; i < event.dataTransfer.items.length; i++) {
        if (event.dataTransfer.items[i].kind === 'file') {
          const file = event.dataTransfer.items[i].getAsFile();
          if (file !== null) {
            dispatch({ type: 'ADD_FILE', payload: file });
            files.push(file);
          }
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (let i = 0; i < event.dataTransfer.files.length; i++) {
        const file = event.dataTransfer.files[i];
        dispatch({ type: 'ADD_FILE', payload: file });
        files.push(file);
      }
    }
  };

  const handleSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      Array.from(files).map((f) => dispatch({ type: 'ADD_FILE', payload: f }));
    }
  };

  const handleConvert = () => {
    // Logic to add file to conversion queue and initiate conversion
    const filename = state.file ? state.file.name : 'Untitled';
    dispatch({ type: 'REMOVE_FILE', payload: 0 });
    setProgress(0);
    setTimeout(() => {
      // Mock conversion progress update
      setProgress(20);
      setTimeout(() => {
        setProgress(40);
        setTimeout(() => {
          setProgress(60);
          setTimeout(() => {
            setProgress(80);
            setTimeout(() => {
              setProgress(100);
              dispatch({ type: 'SET_IS_LOADING', payload: false });
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 1000);
  };

  const convertionEnabled = state.queue?.every((f) => f.targetFormatt);
  return (
    <Container>
      <h4>Upload your files to convert them!</h4>
      <Row className="my-5" gap={3}>
        <Col className="border rounded p-3" sm={6}>
          <div
            onDrop={handleDropFile}
            onDragOver={(event) => event.preventDefault()}
            className={`${styles['dropzone']} text-center`}
          >
            <p>Drag and drop a file here, or click to select a file.</p>
            <FormControl
              type="file"
              accept="image/png, image/jpeg"
              multiple
              placeholder="files"
              onChange={handleSelectFile}
            />
          </div>
          {convertionEnabled && <Button onClick={handleConvert}>Convert</Button>}
        </Col>

        <Col className="border rounded p-3" sm={6}>
          <QueueList handleOnSubmit={handleConvert}></QueueList>
        </Col>
      </Row>

      {progress > 0 && progress < 100 && (
        <div className="mt-5">
          <h4>Conversion Progress:</h4>
          <ProgressBar now={progress} label={`${progress}%`} />
        </div>
      )}

      <Row className="my-5">
        <h4>Conversion Results:</h4>
        {/* Logic to display links to converted files */}
      </Row>
    </Container>
  );
}
