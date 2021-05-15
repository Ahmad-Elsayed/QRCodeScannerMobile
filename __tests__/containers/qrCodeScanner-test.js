/**
 * @format
 */

import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import QRScanner from 'containers/QRScanner';

it('renders correctly', () => {
  const qrScanner = renderer.create(<QRScanner />).toJSON();
  expect(qrScanner).toMatchSnapshot();
});
