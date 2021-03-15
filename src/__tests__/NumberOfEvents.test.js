import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });
  test('renders text input label', () => {
    expect(NumberOfEventsWrapper.find('.label-number')).toHaveLength(1);
  });
  test('renders text input', () => {
    expect(NumberOfEventsWrapper.find('.number')).toHaveLength(1);
  });
  test('the default number of shown events is 32', () => {
    expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe('32');
  });
  test('renders text input correctly', () => {
    const numberInput = NumberOfEventsWrapper.state('numberInput');
    expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(numberInput);
  });
  test('changes state when text input changes', () => {
    const eventObject = { target: { value: '8' }};
    NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberInput')).toBe('8');
  });
});