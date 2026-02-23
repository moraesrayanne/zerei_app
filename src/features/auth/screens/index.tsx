import { Text } from 'react-native';
import styled from 'styled-components/native';
import Button from '../../../components/Button';

const Container = styled.View`
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
  padding: 20px;
`;

const AuthScreen = () => {
  const handlePress = () => {
    console.log('apertei');
  };

  return (
    <Container>
      <Text>Button</Text>
      <Button onPress={handlePress}>Entrar</Button>
    </Container>
  );
};

export default AuthScreen;
