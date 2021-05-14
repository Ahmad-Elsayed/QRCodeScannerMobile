import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, QRScanner, Counter } from 'containers';
import { mainRoutes } from 'src/constants/routeNames';
const Stack = createStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={mainRoutes.home}
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name={mainRoutes.counter}
          component={Counter}
          options={{ title: 'Counter' }}
        />
        <Stack.Screen
          name={mainRoutes.qrCodeScanner}
          component={QRScanner}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
