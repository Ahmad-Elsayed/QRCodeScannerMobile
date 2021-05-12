import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Text } from 'components';
import { mainRoutes } from 'src/constants/routeNames';
import styles from './styles';
import { useSelector } from 'react-redux';

const QRScanner = () => {
  const { navigate } = useNavigation();
  const { count } = useSelector(state => state.counter);
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.countTextStyle}>{count}</Text>
      <View style={styles.btnContainerStyle}>
        <Button
          title="Back"
          containerStyle={styles.btnStyle}
          onPress={() => {
            navigate(mainRoutes.home);
          }}
        />
        <Button
          title="Scan"
          containerStyle={styles.btnStyle}
          onPress={() => navigate(mainRoutes.qrCodeScanner)}
        />
      </View>
    </View>
  );
};

export default QRScanner;
