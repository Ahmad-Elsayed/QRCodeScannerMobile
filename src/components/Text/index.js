import React from 'react';
import { Text as RNText } from 'react-native';
import styles from './styles';

const Text = ({ style, children }) => {
  return <RNText style={[styles.textStyle, style]}>{children}</RNText>;
};

export default Text;
