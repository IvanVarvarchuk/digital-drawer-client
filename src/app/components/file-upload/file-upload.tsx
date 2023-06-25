import React, { MouseEventHandler } from 'react';
import styles from './file-upload.module.css';
import { Button, FormControl } from 'react-bootstrap';

export interface IUpploadButtonProps {
  content?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
export const UpploadButton = ({ content, onClick }: IUpploadButtonProps) => {
  return (
    <Button variant="outlined-primaty" onClick={onClick} size="lg">
      {content ?? 'Upload your image files'}
    </Button>
  );
};
/* eslint-disable-next-line */
export interface FileUploadProps {
  content?: string,
  handleFiles: (fileList: FileList) => void
}

export function FileUpload({ content, handleFiles }: FileUploadProps) {
  // drag state
  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef<HTMLInputElement>(null);
  
  // handle drag events
  const handleDrag: React.DragEventHandler<HTMLFormElement|HTMLDivElement> = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  // triggers when file is dropped
  const handleDrop: React.DragEventHandler<HTMLDivElement> = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };
  
  // triggers when file is selected with click
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = function(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };
  
// triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current?.click();
  };
  
  return (

    <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
      <div
            onDrop={handleDrop}
            onDragOver={(event) => event.preventDefault()}
            className={`${styles.dropzone} text-center`}
          >
            <p>Drag and drop a file here, or click to select a file.</p>
            <FormControl
              hidden
              type="file"
              ref={inputRef}
              accept="image/png, image/jpeg"
              multiple
              placeholder="files"
              onChange={handleChange}
            />
            <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? styles.dragActive : "" }>
            <UpploadButton
              onClick={onButtonClick}
              content={content}
            />
           </label>
          </div>
      { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
      
    </form>
  );;
}

export default FileUpload;
