import { useEffect, useState } from 'react';
import styles from './queue-list.module.css';
import { Button, Card, Form } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

/* eslint-disable-next-line */
export interface QueueListProps {
  files: (File | null)[];
}

export function QueueList(props: QueueListProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fileList, setFileList] = useState<(File | null)[]>(props.files || []);

  useEffect(() => {
    setFileList(props.files || []);
  }, [props.files]);

  const handleOnSubmit = () => {
    setIsLoading(true);
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return; // dropped outside the list
    const items = Array.from(fileList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setFileList(items);
  };
  return (
    <div>
      <h2>Conversion Queue:</h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="fileListDroppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {fileList.length > 0 ? (
                <div>
                  {fileList.map((file, index) => (
                    <Draggable
                      key={index}
                      draggableId={String(index)}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <Card
                            style={{ marginBottom: '20px' }}
                            {...provided.dragHandleProps}
                          >
                            {/* <Card.Img
                              variant="top"
                              src={URL.createObjectURL(file!)}
                            /> */}
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
                      )}
                    </Draggable>
                  ))}
                </div>
              ) : (
                <p>No files currently in queue.</p>
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className={styles.actions}>
        {isLoading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        <Button disabled={isLoading} onClick={handleOnSubmit} variant="success">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default QueueList;
