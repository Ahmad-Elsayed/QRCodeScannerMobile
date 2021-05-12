import React from 'react';
import Text from '../Text';
import styles from './styles';
import { Pressable } from 'react-native';

const Button = ({ title, onPress, containerStyle }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.containerStyle,
        pressed && styles.pressedStyle,
        containerStyle,
      ]}>
      <Text style={styles.textStyle}>{title}</Text>
    </Pressable>
  );
};

export default Button;
