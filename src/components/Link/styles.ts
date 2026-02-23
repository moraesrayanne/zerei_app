import styled from 'styled-components/native';

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

export const LinkPressable = styled.Pressable`
  padding: 8px;
`;
