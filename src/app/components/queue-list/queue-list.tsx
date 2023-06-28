import styles from './queue-list.module.css';
import { Button, Card, Form } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import useConvertionState from '../../pages/convert/state/use-convertion-state/use-convertion-state';
import * as Types from '../../../api/axios-client';
// import useConvertionState from 'src/app/pages/convert/state/use-convertion-state/use-convertion-state';

/* eslint-disable-next-line */
export interface QueueListProps {
  handleOnSubmit: () => void;
}

export function QueueList({ handleOnSubmit }: QueueListProps) {
  const { state, dispatch } = useConvertionState();

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return; // dropped outside the list
    
    dispatch({ type: "REORDER_FILE", payload: {
      oldIndex: result.source.index,
      newIndex: result.destination.index,
    } })
  };

  const handleSelectionChanged = (index: number, value: string) => {
    const optionMapping: Record<string, Types.TargetFileFormat> = {
      "0":Types.TargetFileFormat._0, 
      "1":Types.TargetFileFormat._1, 
      "2":Types.TargetFileFormat._2, 
    } 
    dispatch({ type: 'SET_CONVERSION_FORMAT', payload: {
      index,
      format: optionMapping[value]
    } });
  } 

  return (
    <div>
      <h4>Conversion Queue:</h4>
      <div className={`${styles.queueListContainer} ${styles.containerScroll} gap-2`}>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="fileListDroppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {state.queue.length > 0 ? (
                <div>
                  {state.queue.map((fileItem, index) => (
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
                            className={styles.fileCard}
                            {...provided.dragHandleProps}
                          >
                            {/* <Card.Img
                              variant="top"
                              style={{
                                maxWidth: '100px',
                                aspectRatio: '1/1'
                              }}
                              src={URL.createObjectURL(fileItem.file!)}
                            /> */}
                            <Card.Body className={styles.fileCardBody}>
                              <Card.Title>{fileItem.file?.name}</Card.Title>
                              <Form.Select
                                onChange={({target}) => handleSelectionChanged(index, target.value)}
                                aria-label="Default select example"
                                className={styles.select}
                              >
                                <option>Select file extension</option>
                                <option defaultChecked value={Types.TargetFileFormat._0}>dxf</option>
                                <option value={Types.TargetFileFormat._1}>ifc</option>
                                <option value={Types.TargetFileFormat._2}>svg</option>
                              </Form.Select>
                              <div className={styles.actions}>
                                <Button disabled={state.isLoading} onClick={() => dispatch({ type: 'REMOVE_FILE',  payload: index})} variant="danger">
                                  Remove
                                </Button>
                              </div>
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
      </div>
      <div className={styles.actions}>
        {state.isLoading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {/* {state.queue.length > 0 && <Button disabled={state.isLoading} onClick={handleOnSubmit} variant="success">
          Submit
        </Button>} */}
      </div>
    </div>
  );
}

export default QueueList;
