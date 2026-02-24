import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.card};
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.border};
  padding-bottom: ${Platform.OS === 'ios' ? '24px' : '12px'};
  padding-top: 12px;
  height: ${Platform.OS === 'ios' ? '90px' : '70px'};
`;

export const TabItem = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const TabLabel = styled.Text<{ $isActive?: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSize.xs}px;
  font-weight: ${({ theme, $isActive }) =>
    $isActive
      ? theme.typography.fontWeight.semibold
      : theme.typography.fontWeight.medium};
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : theme.colors.mutedText};
`;
