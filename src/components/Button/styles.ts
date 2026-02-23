import { Pressable, Text } from 'react-native';
import styled from 'styled-components/native';

export const Button = styled(Pressable)`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 42;
  border-radius: ${({ theme }) => theme.radius.md}px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text)`
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: ${({ theme }) => theme.typography.fontSize.md}px;
`;
