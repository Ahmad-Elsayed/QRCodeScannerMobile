/**
 * @format
 */

import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import { Button } from 'components';

it('renders correctly', () => {
  const button = renderer.create(<Button title="test" />).toJSON();
  expect(button).toMatchSnapshot();
});
