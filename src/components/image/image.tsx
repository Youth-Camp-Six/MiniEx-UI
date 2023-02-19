import React, { useState } from 'react';
import { Preview } from './preview';
import { ImageProps } from './type';

export const Image: React.FC<ImageProps> = ({
  src: originSrc,
  fallback,
  previewProps = {},
  ...otherProps
}) => {
  const [src, setSrc] = useState(originSrc);
  const onError = () => setSrc(fallback);
  // set preview props
  previewProps.src ||= src;
  return (
    <Preview {...previewProps}>
      <img src={src} onError={onError} {...otherProps} />
    </Preview>
  );
};
