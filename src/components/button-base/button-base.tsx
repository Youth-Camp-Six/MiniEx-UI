import classNames from 'classnames';
import React, { memo } from 'react';
import { MiIcon } from '../icon/icon';
export type DisabledType = boolean | undefined;
const DisabledContext = React.createContext<DisabledType>(false);
export type BaseButtonProps = {
  className?: string;
  icon?: React.ReactNode;
  loading?: boolean | { delay?: number };
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  enterButton?: string;
};
// const ButtonBase = React.forwardRef<HTMLDivElement, BaseButtonProps>((props, ref) => {
const ButtonBase = React.forwardRef<HTMLDivElement, BaseButtonProps>((props) => {
  // const { loading = false, icon, disabled: customDisabled, className, enterButton, ...rest } = props;
  const {
    loading = false,
    icon,
    disabled: customDisabled,
    className,
    enterButton,
    // ...rest
  } = props;
  type Loading = number | boolean;

  const [innerLoading] = React.useState<Loading>(!!loading);
  // const [innerLoading, setLoading] = React.useState<Loading>(!!loading);
  const disabled = React.useContext(DisabledContext);
  const mergedDisabled = customDisabled ?? disabled;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    const { onClick } = props;
    // FIXME: https://github.com/ant-design/ant-design/issues/30207
    if (innerLoading || mergedDisabled) {
      e.preventDefault();
      return;
    }
    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
  };
  const classes = classNames(className, 'mi-button-base');
  const classesSpan = classNames('mi-button-base-span');
  let buttonNode;
  if (icon) {
    buttonNode = (
      <button className={classes} onClick={handleClick}>
        {icon}
      </button>
    );
  } else if (enterButton) {
    buttonNode = (
      <button className={classes} onClick={handleClick}>
        <span className={classesSpan}>{enterButton}</span>
      </button>
    );
  } else {
    buttonNode = (
      <button className={classes} onClick={handleClick}>
        <MiIcon.Search size='16'></MiIcon.Search>
      </button>
    );
  }

  return buttonNode;
});
ButtonBase.displayName = 'ButtonBase';
export default memo(ButtonBase);
