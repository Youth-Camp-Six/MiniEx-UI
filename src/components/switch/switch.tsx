import React, { memo } from 'react';
import classNames from 'classnames';
import { SwitchProps } from './type';

export const Switch: React.FC<SwitchProps> = (props) => {
  const { className, modelvalue, round, request, disabled, loading, ...restProps } = props;

  const classesLabel = `
        ${loading ? 'mi-switch-loading' : ''}
        ${round ? 'mi-switch-round' : ''}
        ${modelvalue ? 'mi-switch-checked' : ''}
        ${request ? 'mi-switch-request' : ''}
        `;
  const classes = classNames('mi-switch-view', className, classesLabel);

  return (
    <div className={classes} {...restProps}>
      <input style={{ display: 'none' }} type='checkbox' disabled={disabled} />
      <div className='mi-switch-dot'></div>
    </div>
  );
};

Switch.defaultProps = {
  modelvalue: true,
  round: true,
  loading: false,
  disabled: false,
};

export default memo(Switch);
