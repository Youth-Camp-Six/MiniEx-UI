import React, { memo } from 'react';
import InputBase from '../input-base/input-base';
// import { MiIcon } from '../icon/icon';
import type { InputProps, InputRef } from '../input-base/input-base';
import Button from '../button-base/button-base';
import { composeRef } from 'rc-util/lib/ref';
import classNames from 'classnames';

export interface SearchProps extends InputProps {
  size?: string;
  onSearch?: (
    value: string,
    event?:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => void;
  btnType?: string;
  suffix?: React.ReactNode;
  enterButton?: string;
}

// const suffix = <MiIcon.Search size='16'></MiIcon.Search>;

const InputSearch = React.forwardRef<InputRef, SearchProps>((props, ref) => {
  const {
    onSearch: customOnSearch,
    onChange: customOnChange,
    suffix,
    size,
    btnType,
    enterButton,
    ...restProps
  } = props;

  const inputRef = React.useRef<InputRef>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e && e.target && e.type === 'click' && customOnSearch) {
      customOnSearch((e as React.ChangeEvent<HTMLInputElement>).target.value, e);
    }
    if (customOnChange) {
      customOnChange(e);
    }
  };

  const onSearch = (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>) => {
    if (customOnSearch) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
      customOnSearch(inputRef.current?.input?.value!, e);
    }
  };

  // Button
  const classesbtn = classNames('btn', 'mi-button-base', {
    [`btn-${btnType}`]: btnType,
    [`mi-button-base-${size}`]: size,
  });
  // const searchIcon = typeof enterButton === 'boolean' ? <MiIcon.Search size='16'></MiIcon.Search> : null;
  const searchIcon = suffix;
  const button: React.ReactNode = (
    <Button
      className={classesbtn}
      onClick={onSearch}
      icon={searchIcon}
      enterButton={enterButton}
    ></Button>
  );

  const classInput = `mi-input-search-${size}`;
  const classes = classNames('.mi-input-search', classInput);

  return (
    <InputBase
      ref={composeRef(ref, inputRef)}
      className={classes}
      {...restProps}
      onChange={onChange}
      addonAfter={button}
      // suffix={suffix}
    />
  );
});
InputSearch.displayName = 'InputSearch';
InputSearch.defaultProps = {
  size: 'medium',
  btnType: 'primary',
};
export default memo(InputSearch);
