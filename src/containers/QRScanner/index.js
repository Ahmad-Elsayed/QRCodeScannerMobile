import React from 'react';
import styles from './styles';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Linking, Alert } from 'react-native';

const QRScanner = () => {
  const onSuccess = e => {
    Linking.openURL(e.data).catch(err => Alert.alert(err));
  };

  return <QRCodeScanner onRead={onSuccess} cameraStyle={styles.cameraStyle} />;
};

export default QRScanner;
