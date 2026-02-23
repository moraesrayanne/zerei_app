import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';

export const Container = styled.View`
  width: 100%;
`;

export const Label = styled.Text<{ error?: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSize.md}px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme, error }) =>
    error ? theme.colors.destructive : theme.colors.secondaryText};

  margin-bottom: 4px;
`;

export const Input = styled(TextInput).attrs(({ theme, error }) => ({
  mode: 'outlined',
  outlineColor: theme.colors.input,
  activeOutlineColor: theme.colors.focusRing,
  selectionColor: theme.colors.focusRing,
  underlineColor: 'transparent',
  placeholderTextColor: theme.colors.mutedText,
  outlineStyle: {
    borderRadius: theme.radius.md,
  },
}))`
  background-color: ${({ theme }) => theme.colors.card};
  font-size: ${({ theme }) => theme.typography.fontSize.md}px;
  height: 48px;
`;

export const InputWrapper = styled.View`
  gap: ${({ theme }) => theme.spacing.sm}px;
`;
