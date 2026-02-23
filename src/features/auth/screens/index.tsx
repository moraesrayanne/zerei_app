import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import Button from '../../../components/Button';
import TextField from '../../../components/Textfield';
import { useState } from 'react';
import * as S from './styles';
import Link from '../../../components/Link';

const AuthScreen = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = () => {
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
          hasError
        />
        <TextField
          label='Senha'
          placeholder='********'
          value={password}
          onChangeText={setPassword}
          isPassword
        />
        <S.LinkWrapper>
          <Link screen='Login' label='Esqueceu a senha?' />
        </S.LinkWrapper>
        <Button onPress={handlePress}>Entrar</Button>
      </S.Container>
    </TouchableWithoutFeedback>
  );
};

export default AuthScreen;
