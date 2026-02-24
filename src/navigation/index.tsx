import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../features/auth/screens';
import AppRoutes from './AppRoutes';
import { useAuth } from '../contexts/AuthContext';
import { View, ActivityIndicator } from 'react-native';

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

const RootNavigator = () => {
  const { session, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#1E1E1E',
        }}
      >
        <ActivityIndicator size='large' color='#FFF' />
      </View>
    );
  }

  return session ? <AppRoutes /> : <AuthRoutes />;
};

export default RootNavigator;
