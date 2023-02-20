import React, { memo,useEffect } from 'react';
import classNames from 'classnames';
import { SwitchProps } from './type';

export const Switch: React.FC<SwitchProps> = (props) => {
  const { className, modelValue, round, request, disabled, loading,change, ...restProps } = props;

  const [_modelValue, set_modelValue] = React.useState(false);
  const [_loading, set_loading] = React.useState(false);
  const checkRef = React.createRef();
  const classesLabel = `
        ${loading ? 'mi-switch-loading' : ''}
        ${round ? 'mi-switch-round' : ''}
        ${_modelValue ? 'mi-switch-checked' : ''}
        ${request ? 'mi-switch-request' : ''}
        `;
  const classes = classNames('mi-switch-view', className, classesLabel);

  useEffect(
    () => {     
      set_modelValue(modelValue as boolean);
      set_loading(loading as boolean);
    }, []);
const handleClick = async (e: any) => {
    if (disabled || _loading || loading) return;
    // emit('click', e);
    if (typeof request === 'function') {
        if (_loading) {
            return;
      }
      set_loading(true)
        const isSuccess = await request(!_modelValue);
        if (isSuccess as any) {
          set_modelValue(!_modelValue)
          set_loading(false)
        }
        set_loading(false)
    } else {
      set_modelValue(!_modelValue)
  }
  set_modelValue(!_modelValue);
  (change as any)();
    // emit('update:modelValue', v.value);
    // emit('change', v.value);
};
  return (
    <div className={classes} {...restProps} onClick={handleClick}>
      <input style={{ opacity: 0 }} type='checkbox'   disabled={disabled} checked={_modelValue===true}  onChange={()=>{}}/>
      <div className='mi-switch-dot'></div>
    </div>
  );
};

Switch.defaultProps = {
  modelValue: true,
  round: true,
  loading: false,
  disabled: false,
};

export default memo(Switch);
