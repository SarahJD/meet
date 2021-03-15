import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });
  test('render title/summary of each event', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });
  test('render start time of each event', () => {
    expect(EventWrapper.find('.start')).toHaveLength(1);
  });
  test('render @summary of each event', () => {
    expect(EventWrapper.find('.atsummary')).toHaveLength(1);
  });
  test('render location of each event', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });
  test('render show-details-button of each event', () => {
    expect(EventWrapper.find('.btn-details')).toHaveLength(1);
  });
  test('render details element', () => {
    expect(EventWrapper.find('.details')).toHaveLength(1);
  });
  test('render about-event-header', () => {
    expect(EventWrapper.find('.about-header')).toHaveLength(1);
  });
  test('render link to google-calendar', () => {
    expect(EventWrapper.find('.htmlLink')).toHaveLength(1);
  });
  test('render description for each event', () => {
    expect(EventWrapper.find('.description')).toHaveLength(1);
  });
  test('render hide-details-button of each event', () => {
    expect(EventWrapper.find('.btn-hide-details')).toHaveLength(1);
  });
  test('click on show-details-button expands event details', () => {
    EventWrapper.setState({ showDetails: false});
    EventWrapper.find('.btn-details').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  });
  test('click on hide-details-button collapses event details', () => {
    EventWrapper.find('.btn-hide-details').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(false);
  });
});

