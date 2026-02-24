import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation';
import { PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <ThemeProvider theme={theme}>
              <RootNavigator />
            </ThemeProvider>
          </NavigationContainer>
        </PaperProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
