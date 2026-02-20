import { Button, Text, View } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
`;

const AuthScreen = () => {
  return (
    <Container>
      <Text>Welcome</Text>

      <Button title='Entrar' />
    </Container>
  );
};

export default AuthScreen;
