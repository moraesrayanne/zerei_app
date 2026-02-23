import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

type LinkProps = {
  screen: string;
  params?: object;
  label: string;
};

const Link = ({ screen, params, label }: LinkProps) => {
  const navigation = useNavigation<any>();

  return (
    <S.LinkPressable
      onPress={() => navigation.navigate(screen, params)}
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
    >
      <S.Text>{label}</S.Text>
    </S.LinkPressable>
  );
};

export default Link;
