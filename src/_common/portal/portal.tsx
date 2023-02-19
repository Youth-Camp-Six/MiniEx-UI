import React from 'react';
import { createPortal } from 'react-dom';
import { PortalProps } from './type';

const getPortalContainer = (getContainer: PortalProps['getContainer']) => {
  if (!getContainer) {
    return document.body;
  } else if (typeof getContainer === 'function') {
    return getContainer();
  } else {
    return getContainer;
  }
};

export const Portal: React.FC<PortalProps> = ({ getContainer, children }) => {
  // const wrapper = (
  //   <div className='wrapper'>
  //     <div className='mask'></div>
  //     {children}
  //   </div>
  // );
  return createPortal(children, getPortalContainer(getContainer));
};
