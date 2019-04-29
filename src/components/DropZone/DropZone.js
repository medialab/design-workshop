import React from 'react';
import PropTypes from 'prop-types';
import DropzoneComponent from 'react-dropzone';

import BackgroundGenerator from '../BackgroundGenerator';

/**
 * Renders the DropZone component as a pure function
 * @param {object} props - used props (see prop types below)
 * @param {object} context - used context data (see context types below)
 * @return {ReactElement} component - the resulting component
 */
const DropZone = ({
  onDrop,
  children,
  accept,
  maxSize,
  isSize = 'medium' // ['small', 'medium', 'big']
}) => (
  <DropzoneComponent
    className="drop-zone-container"
    activeClassName="active"
    accept={accept}
    maxSize={maxSize}
    onDrop={onDrop}>
    {({getRootProps, getInputProps}) => (
      <section className={`drop-zone is-size-${isSize}`}>
        <div {...getRootProps()}>
          <BackgroundGenerator />
          <input {...getInputProps()} />
          <div className="drop-zone-content-container">
            <div className="drop-zone-content">{children}</div>
          </div>
        </div>
      </section>
  )}
  </DropzoneComponent>
);
/*
const DropZone = ({
  onDrop,
  children,
  accept,
  maxSize
}) => (
  <DropzoneComponent
    className="drop-zone"
    activeClassName="active"
    accept={accept}
    maxSize={maxSize}
    onDrop={onDrop}>
    {({isDragActive, isDragReject}) => (
      <div className={'drop-zone-content ' + (isDragActive ? 'active ' : ' ') + (isDragReject ? 'reject' : '')}>
        <BackgroundGenerator />
        <span className="tech-info">{children}</span>
      </div>
    )}
  </DropzoneComponent>
);
*/

/**
 * Component's properties types
 */
DropZone.propTypes = {
  onDrop: PropTypes.func,
  accept: PropTypes.string,
};

export default DropZone;
