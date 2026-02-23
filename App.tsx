import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes from './src/navigation';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <AuthRoutes />
        </ThemeProvider>
      </NavigationContainer>
    </PaperProvider>
  );
}
