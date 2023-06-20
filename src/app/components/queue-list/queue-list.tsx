import styles from './queue-list.module.css';
import { Button, Card, Form } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import useConvertionState from '../../pages/convert/state/use-convertion-state/use-convertion-state';
import { TargetFileFormat } from '../../pages/convert/state/convertion-reducer/convertion-reducer';
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
    const optionMapping: Record<string, TargetFileFormat> = {
      "0":TargetFileFormat.DXF, 
      "1":TargetFileFormat.IFC, 
      "2":TargetFileFormat.SVG, 
    } 
    dispatch({ type: 'SET_CONVERSION_FORMAT', payload: {
      index,
      format: optionMapping[value]
    } });
  } 

  return (
    <div>
      <h2>Conversion Queue:</h2>
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
                            style={{ marginBottom: '20px' }}
                            {...provided.dragHandleProps}
                          >
                            {/* <Card.Img
                              variant="top"
                              src={URL.createObjectURL(fileItem.file!)}
                            /> */}
                            <Card.Body>
                              <Card.Title>{fileItem.file?.name}</Card.Title>
                              <Form.Select
                                onChange={({target}) => handleSelectionChanged(index, target.value)}
                                aria-label="Default select example"
                                className={styles.select}
                              >
                                <option disabled>Select file extension</option>
                                <option value={TargetFileFormat.DXF}>dxf</option>
                                <option value={TargetFileFormat.IFC}>ifc</option>
                                <option value={TargetFileFormat.SVG}>svg</option>
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
      <div className={styles.actions}>
        {state.isLoading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {state.queue.length > 0 && <Button disabled={state.isLoading} onClick={handleOnSubmit} variant="success">
          Submit
        </Button>}
      </div>
    </div>
  );
}

export default QueueList;
