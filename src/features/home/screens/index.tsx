import React from 'react';
import { View, Text } from 'react-native';
import Button from '../../../components/Button';
import { useMutation } from '@tanstack/react-query';
import { signOut } from '../../../api/auth';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: signOut,
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 20, color: '#000' }}>
        Bem-vindo ao Zerei!
      </Text>
      <Button loading={isPending} onPress={mutate}>
        Sair
      </Button>
    </SafeAreaView>
  );
};

export default HomeScreen;
