import { ActivityIndicator } from 'react-native-paper';
import * as S from './styles';

type ButtonProps = {
  children: React.ReactNode;
  onPress: VoidFunction;
  disabled?: boolean;
  loading?: boolean;
};

const Button = ({ children, onPress, disabled, loading }: ButtonProps) => {
  return (
    <S.Button
      onPress={onPress}
      style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
      disabled={disabled}
    >
      {loading ? (
        <ActivityIndicator color='white' />
      ) : (
        <S.Title>{children}</S.Title>
      )}
    </S.Button>
  );
};

export default Button;
