/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Menu, MenuItem } from '..';
import { MenuProps } from '../type';

const menuProps: MenuProps = {
  onSelect: jest.fn(),
  defaultIndex: 0,
  className: 'test',
};

const generateMenu = (props) => (
  <Menu {...props}>
    <MenuItem index={0}>actived item0</MenuItem>
    <MenuItem index={1} disabled>
      disabled item1
    </MenuItem>
    <MenuItem index={2}>item2</MenuItem>
  </Menu>
);

let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;

describe('test menu comonent', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(menuProps));
    menuElement = wrapper.getByTestId('test-menu');
    activeElement = wrapper.getByText('actived item0');
    disabledElement = wrapper.getByText('disabled item1');
  });

  it('menu snapshot test', () => {
    expect(wrapper.container.firstChild).toMatchSnapshot();
  });

  it('default props', () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('menu test');
    expect(menuElement.getElementsByTagName('li').length).toEqual(3);
    expect(activeElement).toHaveClass('menu-item is-active');
    expect(disabledElement).toHaveClass('menu-item is-disabled');
  });

  it('active and right callback', () => {
    const thirdItem = wrapper.getByText('item2');
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass('is-active');
    expect(activeElement).not.toHaveClass('is-active');
    expect(menuProps.onSelect).toHaveBeenCalledWith(2);
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass('is-active');
    expect(menuProps.onSelect).not.toHaveBeenCalledWith(1);
  });
});
