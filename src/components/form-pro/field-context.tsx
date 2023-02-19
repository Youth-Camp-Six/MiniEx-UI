/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

interface IContext {
  getFieldValue: (key: string) => any;
  setFieldsValue: (newStore: any) => void;
  registerFieldEntities: (...entity: any) => void;
  labelwidth?: string;
  direction?: 'x' | 'y';
  labelalign?: 'start' | 'end';
}

const FieldContext = React.createContext<IContext>({
  getFieldValue: () => {},
  setFieldsValue: () => {},
  registerFieldEntities: () => {},
});

export default FieldContext;
