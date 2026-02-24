import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes from './src/navigation';
import { PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <ThemeProvider theme={theme}>
            <AuthRoutes />
          </ThemeProvider>
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}
