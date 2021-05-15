/**
 * @format
 */
import 'react-native';

import React from 'react';

import renderer from 'react-test-renderer';
import Counter from 'containers/Counter';

it('renders correctly', () => {
  const counter = renderer.create(<Counter />).toJSON();
  expect(counter).toMatchSnapshot();
});
