import { PropsWithChildren } from 'react';

export type PortalProps = PropsWithChildren<{
  getContainer?: HTMLElement | (() => HTMLElement);
}>;
