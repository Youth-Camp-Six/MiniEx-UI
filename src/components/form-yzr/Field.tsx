import React from 'react';
import FieldContext from './FieldContext';

export default function Field(props: any) {
  const { children, name } = props;

  const { getFieldValue, setFieldsValue, registerFieldEntities } = React.useContext(FieldContext);

  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

  React.useLayoutEffect(() => {
    const unregister = registerFieldEntities({
      props,
      onStoreChange: forceUpdate,
    });
    return unregister;
  }, []);

  const getControlled = () => {
    return {
      value: getFieldValue(name),
      onChange: (e: any) => {
        // console.log(e);
        const newValue = e;
        // set state
        setFieldsValue({ [name]: newValue });
      },
    };
  };

  const returnChildNode = React.cloneElement(children, getControlled());
  return returnChildNode;
}
