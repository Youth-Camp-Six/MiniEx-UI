import React, { forwardRef, useRef, useContext, useMemo, memo } from 'react';
import RcInput from 'rc-input';
import { MiIcon } from '../icon/icon';
import type { InputProps as RcInputProps, InputRef } from 'rc-input';
import { composeRef } from 'rc-util/lib/ref';
import type { BaseInputProps } from 'rc-input/lib/interface';
import type { FC, PropsWithChildren, ReactNode } from 'react';
// import { group } from 'console';
import classNames from 'classnames';
export type SizeType = 'small' | 'middle' | 'large' | undefined;

export interface SpaceCompactItemContextType {
  compactSize?: SizeType;
  compactDirection?: 'horizontal' | 'vertical';
  isFirstItem?: boolean;
  isLastItem?: boolean;
}
export const SpaceCompactItemContext = React.createContext<SpaceCompactItemContextType | null>(
  null
);

// eslint-disable-next-line @typescript-eslint/ban-types
export const NoCompactStyle: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <SpaceCompactItemContext.Provider value={null}>{children}</SpaceCompactItemContext.Provider>
);

const ValidateStatuses = ['success', 'warning', 'error', 'validating', ''] as const;
export type ValidateStatus = (typeof ValidateStatuses)[number];

export interface FormItemStatusContextProps {
  isFormItemInput?: boolean;
  status?: ValidateStatus;
  hasFeedback?: boolean;
  feedbackIcon?: ReactNode;
}

export const FormItemInputContext = React.createContext<FormItemStatusContextProps>({});

export type NoFormStyleProps = PropsWithChildren<{
  status?: boolean;
  override?: boolean;
}>;

export const NoFormStyle: FC<NoFormStyleProps> = ({ children, status, override }) => {
  const formItemInputContext = useContext(FormItemInputContext);

  const newFormItemInputContext = useMemo(() => {
    const newContext = { ...formItemInputContext };
    if (override) {
      delete newContext.isFormItemInput;
    }
    if (status) {
      delete newContext.status;
      delete newContext.hasFeedback;
      delete newContext.feedbackIcon;
    }
    return newContext;
  }, [status, override, formItemInputContext]);

  return (
    <FormItemInputContext.Provider value={newFormItemInputContext}>
      {children}
    </FormItemInputContext.Provider>
  );
};
// 'wrapperClassName' |
export type { InputRef };
export interface InputProps
  extends Omit<RcInputProps, 'groupClassName' | 'inputClassName' | 'affixWrapperClassName'> {
  bordered?: boolean;
  [key: `data-${string}`]: string | undefined;
}

const InputBase = forwardRef<InputRef, InputProps>((props, ref) => {
  const {
    // prefixCls: customizePrefixCls,
    // bordered = true,
    // disabled: customDisabled,
    // onBlur,
    // onFocus,
    // suffix,
    // addonBefore,
    allowClear,
    addonAfter,
    className,
    // onChange,
    ...rest
  } = props;
  const inputRef = useRef<InputRef>(null);

  // Allow clear
  let mergedAllowClear: BaseInputProps['allowClear'];
  if (typeof allowClear === 'object' && allowClear?.clearIcon) {
    mergedAllowClear = allowClear;
  } else if (allowClear) {
    mergedAllowClear = {
      clearIcon: (
        <span className='mi-input-test'>
          <MiIcon.XCircle size='16' />
        </span>
      ),
    };
  } else {
    mergedAllowClear = false;
  }
  const classes = {
    wrapper: '',
    group: '',
    affixWrapper: '',
    input: classNames('mi-input-base', className),
  };

  return (
    <RcInput
      classes={classes}
      ref={composeRef(ref, inputRef)}
      // addonBefore={addonBefore}
      addonAfter={addonAfter}
      // addonAfter={
      //   addonAfter && (
      //     <NoCompactStyle>
      //       <NoFormStyle override status>
      //         {addonAfter}
      //       </NoFormStyle>
      //     </NoCompactStyle>
      //   )
      // }
      {...rest}
      allowClear={mergedAllowClear}
    />
  );
});
InputBase.displayName = 'InputBase';
export default memo(InputBase);
