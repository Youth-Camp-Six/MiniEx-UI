import React from 'react';

function createFileInput({
  accept,
  capture,
  multiple,
  onChange,
}: {
  accept?: string;
  capture?: string | boolean;
  multiple?: boolean;
  onChange?: (event: Event) => void;
}) {
  const input = document.createElement('input');
  input.style.display = 'none';
  input.type = 'file';
  if (accept) {
    input.setAttribute('accept', accept);
  }
  if (capture) {
    input.setAttribute('capture', capture === true ? 'camera' : capture);
  }
  if (multiple) {
    input.setAttribute('multiple', 'multiple');
  }

  if (onChange) {
    input.onchange = onChange;
  }

  document.body.appendChild(input);
  return input;
}

export interface FileSelectorProps {
  onSelectFile: (files: FileList) => void;
  disabled?: boolean;
  className?: string;
  style?: any;
  accept?: string;
  capture?: string | boolean;
  multiple?: boolean;
  children?: React.ReactNode;
}

/**
 * 通用文件上传
 */
export class Upload extends React.Component<FileSelectorProps> {
  private _input: HTMLInputElement | null = null;

  private _destroyed = false;

  componentWillUnmount() {
    this._destroyed = true;
    this.removeInput();
  }

  openSelectFile = () => {
    const { accept, capture, multiple, disabled } = this.props;

    if (disabled || this._destroyed) return;

    this.removeInput();

    this._input = createFileInput({
      accept,
      capture,
      multiple,
      onChange: this.selectFileHandler,
    });
    this._input.click();
  };

  selectFileHandler = (event: Event | React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const { disabled } = this.props;
    if (disabled || this._destroyed) return;
    let files: FileList | null = null;
    if (
      (event as React.DragEvent<HTMLDivElement>).dataTransfer &&
      (event as React.DragEvent<HTMLDivElement>).dataTransfer.files
    ) {
      files = (event as React.DragEvent<HTMLDivElement>).dataTransfer.files;
    } else if ((event as Event).target && ((event as Event).target as any).files) {
      files = (event.target as any).files;
    }

    if (files && files.length > 0) {
      this.triggerSelect(files);
    }
    this.removeInput();
  };

  preventDefault = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  triggerSelect(files: FileList) {
    const { onSelectFile } = this.props;
    if (onSelectFile) {
      onSelectFile(files);
    }
  }

  removeInput() {
    if (this._input) {
      if (this._input.parentNode) {
        this._input.parentNode.removeChild(this._input);
      }

      this._input = null;
    }
  }

  render() {
    const { className, style, children } = this.props;

    return (
      <div
        className={`upload ${className}`}
        style={style}
        onClick={this.openSelectFile}
        onDrop={this.selectFileHandler}
        onDragEnter={this.preventDefault}
        onDragOver={this.preventDefault}
        onDragLeave={this.preventDefault}
        aria-hidden='true'
      >
        {children}
      </div>
    );
  }
}
