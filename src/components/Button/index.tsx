import * as S from './styles';

type ButtonProps = {
  children: React.ReactNode;
  onPress: VoidFunction;
};

const Button = ({ children, onPress }: ButtonProps) => {
  return (
    <S.Button
      onPress={onPress}
      style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
    >
      <S.Title>{children}</S.Title>
    </S.Button>
  );
};

export default Button;
