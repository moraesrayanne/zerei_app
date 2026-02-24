import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../features/home/screens';
import TabBar from '../components/TabBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='TabRoutes' component={TabRoutes} />
    </Stack.Navigator>
  );
};

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state }) => {
        const routeName = state.routes[state.index].name;
        return <TabBar currentTab={routeName as any} />;
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default AppRoutes;
