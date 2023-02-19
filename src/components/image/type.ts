import { ImgHTMLAttributes, PropsWithChildren } from 'react';

export interface ImageProps extends ImgHTMLAttributes<Element> {
  fallback?: string;
  previewProps?: PreviewProps;
}

export type PreviewProps = PropsWithChildren<{
  getContainer?: HTMLElement | (() => HTMLElement);
  src?: string;
}>;
