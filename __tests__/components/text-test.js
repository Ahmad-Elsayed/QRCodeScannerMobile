/**
 * @format
 */

import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import { Text } from 'components';

it('renders correctly', () => {
  const text = renderer.create(<Text>Text</Text>).toJSON();
  expect(text).toMatchSnapshot();
});
