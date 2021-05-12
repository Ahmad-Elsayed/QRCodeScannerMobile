import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Button } from 'components';
import { useNavigation } from '@react-navigation/native';
import { mainRoutes } from 'src/constants/routeNames';

const Home = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.containerStyle}>
      <Button
        title="Go To Scanner Screen"
        onPress={() => navigate(mainRoutes.counter)}
      />
    </View>
  );
};

export default Home;
