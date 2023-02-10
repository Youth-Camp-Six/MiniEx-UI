/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Title } from '..';

// 测试用例编写，此为伪代码
describe('title', () => {
  it('title snapshot test', () => {
    const { container } = render(
      <div>
        <Title size='s'>标题组件 s</Title>
        <Title size='l'>标题组件 l</Title>
        <Title size='m'>标题组件 m</Title>
        <Title size='xl'>标题组件 xl</Title>
        <Title size='xxl'>标题组件 xxl</Title>
      </div>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('test default title', () => {
    const { container } = render(<Title />);
    const fontSize = (container.firstChild as HTMLElement).style?.fontSize;
    expect(fontSize).toBe('16px');
    expect(container.firstChild).toHaveClass('mi-title');
  });

  it('test xxl title font-size', () => {
    const { container } = render(<Title size='xxl' />);
    const fontSize = (container.firstChild as HTMLElement).style?.fontSize;
    expect(fontSize).toBe('32px');
  });
});
