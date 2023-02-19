import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { ReactElement } from 'react';
import { createPortal } from 'react-dom';
import type { PreviewProps } from './type';
import './preview.less';

const RootBox: React.FC<PreviewProps & { visible?: boolean }> = ({ src, visible }) => {
  return (
    <div className='mask' style={{ display: visible ? '' : 'none' }}>
      <img src={src} />
    </div>
  );
};

export const Preview: React.FC<PreviewProps> = ({ children, getContainer, src }) => {
  const [visible, setVisible] = useState(false);

  const rootBoxRef = useRef<ReactElement>();

  useEffect(() => {
    // init rootBox
    if (visible && !rootBoxRef.current) {
      rootBoxRef.current = <RootBox src={src} />;
    }
  }, [visible, getContainer, src]);

  const onClick = useCallback(() => setVisible(!visible), [visible]);

  const getPortalContainer = (getContainer: PreviewProps['getContainer']) => {
    if (!getContainer) {
      return document.body;
    } else if (typeof getContainer === 'function') {
      return getContainer();
    } else {
      return getContainer;
    }
  };

  return (
    <div onClick={onClick}>
      {children}
      {createPortal(<RootBox src={src} visible />, getPortalContainer(getContainer))}
    </div>
  );
};
