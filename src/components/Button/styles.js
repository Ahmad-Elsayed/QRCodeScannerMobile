import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  containerStyle: {
    backgroundColor: '#45b1e8',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 6,
  },
  textStyle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#fff',
  },
  pressedStyle: {
    opacity: 0.8,
    transform: [{ scale: 0.998 }],
  },
});
