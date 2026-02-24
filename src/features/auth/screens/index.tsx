import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import Button from '../../../components/Button';
import TextField from '../../../components/Textfield';
import { useState } from 'react';
import * as S from './styles';
import Link from '../../../components/Link';
import { useMutation } from '@tanstack/react-query';
import { signInWithPassword } from '../../../api/auth';

const AuthScreen = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const { mutate, isPending, isError } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signInWithPassword(email, password),
    onError: () => {
      // TODO: handle error
    },
    onSuccess: () => {
      // TODO: handle token storage
      // TODO: navigate to home
    },
  });

  const handleLogin = async () => {
    mutate({ email: login, password });
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <S.Container>
        <S.LogoContainer>
          <S.Logo name='game-controller' size={24} color='white' />
          <S.Title>zerei</S.Title>
        </S.LogoContainer>
        <S.Subtitle>Faça login para continuar</S.Subtitle>
        <TextField
          placeholder='seu@email.com'
          label='Email'
          value={login}
          onChangeText={setLogin}
          keyboardType='email-address'
          hasError={isError}
        />
        <TextField
          label='Senha'
          placeholder='********'
          value={password}
          onChangeText={setPassword}
          isPassword
          hasError={isError}
        />
        <S.LinkWrapper>
          <Link screen='Login' label='Esqueceu a senha?' />
        </S.LinkWrapper>
        <Button loading={isPending} onPress={handleLogin}>
          Entrar
        </Button>
      </S.Container>
    </TouchableWithoutFeedback>
  );
};

export default AuthScreen;
