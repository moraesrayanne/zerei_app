import React from 'react';
import { View, Text } from 'react-native';
import Button from '../../../components/Button';
import { useMutation } from '@tanstack/react-query';
import { signOut } from '../../../api/auth';

const HomeScreen = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: signOut,
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 20, color: '#FFF' }}>
        Bem-vindo ao Zerei!
      </Text>
      <Button loading={isPending} onPress={mutate}>
        Sair
      </Button>
    </View>
  );
};

export default HomeScreen;
