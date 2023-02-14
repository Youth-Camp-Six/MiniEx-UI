/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

interface IContext {
  getFieldValue: (...args: any) => any;
  setFieldsValue: (...args: any) => any;
  registerFieldEntities: (...args: any) => any;
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
