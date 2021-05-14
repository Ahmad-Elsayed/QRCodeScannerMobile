import React, { useState } from 'react';
import styles from './styles';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { WebView } from 'react-native-webview';
import { useDispatch } from 'react-redux';
import { incrementCounter } from 'src/store/actions/counter';
import { useNavigation } from '@react-navigation/native';

const QRScanner = () => {
  const [webUrl, setWebUrl] = useState('');
  const dispatch = useDispatch();

  const onSuccess = e => {
    setWebUrl(e.data);
  };
  const { goBack } = useNavigation();
  dispatch(incrementCounter(10));

  return webUrl ? (
    <WebView
      source={{ uri: webUrl }}
      onMessage={message => {
        dispatch(incrementCounter(parseInt(message.nativeEvent.data, 10)));
        goBack();
      }}
    />
  ) : (
    <QRCodeScanner onRead={onSuccess} cameraStyle={styles.cameraStyle} />
  );
};

export default QRScanner;
