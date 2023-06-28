import { MouseEventHandler, useRef, useState } from 'react';
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
import FileCard from '../../components/file-card/file-card';
import { files } from '../fakeData';

export default function Convert() {
  return (
    <ConvertionContextProvider>
      <ConvertPageContent />
    </ConvertionContextProvider>
  );
}

const filesToDownload: ConvertionResult[] = files.map(({ fileName, link }) => ({
  name: fileName ?? '',
  link,
}));

interface IUpploadButtonProps {
  content?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
const UpploadButton = ({ content, onClick }: IUpploadButtonProps) => {
  return (
    <Button variant="outlined-primaty" onClick={onClick} size="lg">
      {content ?? 'Upload your image files'}
    </Button>
  );
};

type ConvertionResult = Record<'name' | 'link', string>;
export function ConvertPageContent() {
  const { state, dispatch } = useConvertionState();
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<ConvertionResult[]>([]);
  const checkExtensions = (files: FileList) => {
    const allowedTypes = ['image/png', 'image/jpeg'];
    if (Array.from(files).some((f) => !allowedTypes.includes(f.type))) {
      alert('Only PNG, JPEG, and JPG files are allowed');
      return false;
    }
    return true;
  };
  const checkDataTransferExtensions = (dataTransfer: DataTransferItemList) => {
    const allowedTypes = ['image/png', 'image/jpeg'];
    const files = Array.from(dataTransfer)
      .filter((i) => i.kind === 'file')
      .map((i) => i.getAsFile());
    if (files.some((f) => f && !allowedTypes.includes(f.type))) {
      alert('Only PNG, JPEG, and JPG files are allowed');
      return false;
    }
    return true;
  };

  const handleDropFile = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (
      !checkExtensions(event.dataTransfer.files) ||
      !checkDataTransferExtensions(event.dataTransfer.items)
    ) {
      return;
    }
    if (event.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (let i = 0; i < event.dataTransfer.items.length; i++) {
        if (event.dataTransfer.items[i].kind === 'file') {
          const file = event.dataTransfer.items[i].getAsFile();
          if (file !== null) {
            dispatch({ type: 'ADD_FILE', payload: file });
          }
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (let i = 0; i < event.dataTransfer.files.length; i++) {
        const file = event.dataTransfer.files[i];
        if (file !== null) {
          dispatch({ type: 'ADD_FILE', payload: file });
        }
      }
    }
  };

  const handleSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      Array.from(files).map((f) => dispatch({ type: 'ADD_FILE', payload: f }));
    }
  };

  const updateResults = (i: number) => {
    setResults((prev) => [...prev, filesToDownload[i]]);
    dispatch({ type: 'REMOVE_FILE', payload: 0 });
  };
  const handleConvert = () => {
    // Logic to add file to conversion queue and initiate conversion
    dispatch({ type: 'REMOVE_FILE', payload: 0 });
    setResults([]);
    setProgress(0);
    setTimeout(() => {
      updateResults(0);
      // Mock conversion progress update
      setProgress(25);
      setTimeout(() => {
        updateResults(1);
        setProgress(50);
        setTimeout(() => {
          updateResults(2);
          setProgress(75);
          setTimeout(() => {
            updateResults(3);
            setProgress(100);
          }, 1000);
        }, 800);
      }, 800);
    }, 1000);
  };
  const ref = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    ref.current?.click();
  };
  const convertionEnabled =
    state.queue.length > 0 &&
    state.queue?.every((f) => f.targetFormatt !== undefined);
  return (
    <Container fluid className="d-flex flex-column gap-2 max-vh-90">
      <Row className="row-eq-height min-vh-50">
        <Col sm={6} className="d-flex flex-column justify-content-center">
          <h4>File Upload:</h4>
          <div className="d-flex flex-column align-items-center">
            <div
              onDrop={handleDropFile}
              onDragOver={(event) => event.preventDefault()}
              className={`${styles.dropzone} text-center`}
            >
              <p>Drag and drop a file here, or click to select a file.</p>
              <FormControl
                hidden
                type="file"
                ref={ref}
                accept="image/png, image/jpeg"
                multiple
                placeholder="files"
                onChange={handleSelectFile}
              />
              <UpploadButton
                onClick={handleClick}
                content={
                  state.queue.length
                    ? `Uploaded ${state.queue.length} files`
                    : undefined
                }
              />
            </div>
            {convertionEnabled && (
              <Button
                style={{ width: '200px' }}
                disabled={state.isLoading}
                onClick={handleConvert}
                variant="success"
              >
                Submit
              </Button>
            )}
          </div>
        </Col>
        <Col sm={6} className="max-vh-40">
          {/* Second Column */}
          <QueueList handleOnSubmit={handleConvert}></QueueList>
        </Col>
      </Row>
      <Row className="row-eq-height min-vh-40">
        <Col sm={12} className="d-flex flex-column gap-2">
          <h4>Conversion Results:</h4>
          {/* <Row>
            {progress > 0 && progress < 100 && (
              <div className="mt-5 py-3 px-2 gap-2">
                <h5>Conversion Progress:</h5>
                <ProgressBar now={progress} label={`${progress}%`} />
              </div>
            )}
          </Row> */}
          <div className="d-flex flex-row gap-2">
            {results.map((x) => (
              <FileCard {...x} />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
