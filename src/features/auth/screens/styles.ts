import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';

export const Container = styled.View`
  justify-content: center;
  flex: 1;
  padding: 20px;
  gap: ${({ theme }) => theme.spacing.md}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const LinkWrapper = styled.View`
  align-items: flex-end;
`;

export const LogoContainer = styled.View`
  align-items: center;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.md}px;
  justify-content: center;
`;

export const Logo = styled(Ionicons)`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.xl}px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.md}px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.secondaryText};
  text-align: center;
`;

export const ErrorMessage = styled.Text`
  color: ${({ theme }) => theme.colors.error};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-size: ${({ theme }) => theme.typography.fontSize.sm}px;
  margin-top: -10px;
`;
