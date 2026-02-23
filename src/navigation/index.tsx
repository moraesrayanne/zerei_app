import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../features/auth/screens';

const Stack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Login' component={AuthScreen} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
