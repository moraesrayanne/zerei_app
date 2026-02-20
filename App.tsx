import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import AuthScreen from './src/navigation/features/auth/screens';
import { theme } from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthScreen />
    </ThemeProvider>
  );
}
