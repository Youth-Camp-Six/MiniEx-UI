import React, { ReactNode } from 'react';
import FieldContext from './FieldContext';
import { FormProps } from './type';
import useForm from './useForm';

export const Form = React.forwardRef<any, FormProps>((props, ref) => {
  const { children, form, onFinish, onFinishFailed } = props;

  const [formInstance] = useForm(form);

  React.useImperativeHandle(ref, () => formInstance);

  formInstance.setCallbacks({
    onFinish,
    onFinishFailed,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formInstance.submit();
      }}
    >
      <FieldContext.Provider value={formInstance}>{children}</FieldContext.Provider>
    </form>
  );
});

Form.displayName = 'Form';

export default Form;
