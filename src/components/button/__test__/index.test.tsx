/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button, ButtonProps } from '..';

const defaultProps = {
  onClick: jest.fn(),
};
const testProps: ButtonProps = {
  btnType: 'primary',
  size: 'lg',
  className: 'test',
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe('test button comonent', () => {
  // 快照测试
  it('button snapshot test', () => {
    const wrapper = render(
      <div>
        <Button btnType='default'>default按钮</Button>
        <Button btnType='primary'>primary按钮</Button>
        <Button btnType='danger'>danger按钮</Button>
        <Button btnType='link'>link按钮</Button>
        <Button size='lg'>lg按钮</Button>
        <Button size='sm'>sm按钮</Button>
        <Button disabled>禁用按钮</Button>
      </div>
    );
    expect(wrapper.container.firstChild).toMatchSnapshot();
  });

  it('default button', () => {
    const wrapper = render(<Button {...defaultProps}>nice</Button>);
    const element = wrapper.getByText('nice') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it('different props', () => {
    const wrapper = render(<Button {...testProps}>nice</Button>);
    const element = wrapper.getByText('nice');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn-primary btn-lg test');
  });

  it('disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>);
    const element = wrapper.getByText('Nice') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
