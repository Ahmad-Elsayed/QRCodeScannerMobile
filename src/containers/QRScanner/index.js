import React, { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { WebView } from 'react-native-webview';
import { useDispatch } from 'react-redux';
import { incrementCounter } from 'src/store/actions/counter';
import styles from './styles';
import { isURL } from 'src/utilities';
import { Alert } from 'react-native';

const QRScanner = () => {
  const [webUrl, setWebUrl] = useState('');
  const dispatch = useDispatch();
  const scannerRef = useRef();
  const { goBack } = useNavigation();

  const onQRCodeReadSuccess = e => {
    if (isURL(e.data)) {
      setWebUrl(e.data);
    } else {
      Alert.alert('Error', 'Not a valid URL', [
        { text: 'Try Again', onPress: () => scannerRef.current.reactivate() },
        {
          text: 'cancel',
          onPress: () => {
            goBack();
          },
          style: 'destructive',
        },
      ]);
    }
  };

  const onMessageReceived = message => {
    const counterAddition = incrementCounter(
      parseInt(message.nativeEvent.data, 10),
    );

    dispatch(counterAddition);
    goBack();
  };

  return webUrl ? (
    <WebView source={{ uri: webUrl }} onMessage={onMessageReceived} />
  ) : (
    <QRCodeScanner
      onRead={onQRCodeReadSuccess}
      cameraStyle={styles.cameraStyle}
      ref={node => {
        scannerRef.current = node;
      }}
    />
  );
};

export default QRScanner;
