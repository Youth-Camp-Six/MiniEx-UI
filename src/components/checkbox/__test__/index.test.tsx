// /**
//  * @jest-environment jsdom
//  */

// import React from 'react';
// import { render } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import { CheckboxGroup } from '..';

// const checkBoxDataList = [
//   { label: 'labe-0', value: 0 },
//   { label: 'labe-1', value: 1 },
//   { label: 'labe-2', value: 2 },
// ];

// describe('test CheckboxGroup comonent', () => {
//   it('checkbox snapshot test', () => {
//     const onChange = jest.fn();

//     const wrapper = render(
//       <CheckboxGroup
//         value={[1, 2, 3]}
//         options={checkBoxDataList}
//         onChange={onChange}
//         round
//       ></CheckboxGroup>
//     );

//     expect(wrapper.asFragment()).toMatchSnapshot();
//   });

//   it('renders checkbox options and updates selected value', () => {
//     const onChange = jest.fn();
//     const wrapper = render(
//       <CheckboxGroup
//         value={[0, 2]}
//         options={checkBoxDataList}
//         onChange={onChange}
//         round
//       ></CheckboxGroup>
//     );

//     const labe0 = wrapper.getByText('labe-0');
//     const labe1 = wrapper.getByText('labe-1');
//     const labe2 = wrapper.getByText('labe-2');

//     expect(labe0).toHaveClass('mi-checkbox-checked');
//     expect(labe1).not.toHaveClass('mi-checkbox-checked');
//     expect(labe2).not.toHaveClass('mi-radio-checked');
//     expect(onChange).not.toHaveBeenCalled();

//     option0.click();
//     expect(option0).toHaveClass('mi-radio-checked');
//     expect(option1).not.toHaveClass('mi-radio-checked');
//     expect(option2).not.toHaveClass('mi-radio-checked');
//     expect(onChange).toHaveBeenCalledWith('0');
//   });
// });
