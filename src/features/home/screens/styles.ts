import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Platform } from 'react-native';

export const SafeArea = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: { paddingBottom: 20 },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 20px 0px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: ${Platform.OS === 'ios' ? '60px' : '30px'};
`;

export const ProfileInfo = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const Avatar = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

export const HeaderText = styled.View`
  justify-content: center;
`;

export const Greeting = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.mutedText};
`;

export const UserName = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.lg}px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
`;

export const IconButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.card};
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

export const Section = styled.View`
  margin-top: 24px;
`;

export const SectionHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 20px;
  margin-bottom: 16px;
`;

export const SectionTitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.xl}px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
`;

export const SeeAll = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

export const HorizontalList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 20, gap: 16 },
})``;

// Game Card
export const GameCard = styled.TouchableOpacity`
  width: 140px;
  gap: 8px;
`;

export const GameCover = styled.Image`
  width: 100%;
  height: 180px;
  border-radius: 12px;
`;

export const GameInfo = styled.View`
  padding: 0 4px;
`;

export const GameTitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.md}px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4px;
`;

export const GameStatus = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const StatusDot = styled.View<{ color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ color }) => color};
`;

export const GameTime = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.xs}px;
  color: ${({ theme }) => theme.colors.mutedText};
`;

// Friend Update Card
export const FriendsList = styled.View`
  padding: 0 20px;
  gap: 20px;
`;

export const FriendCard = styled.View`
  background-color: ${({ theme }) => theme.colors.card};
  padding: 16px;
  border-radius: 16px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

export const FriendHeader = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

export const FriendAvatarContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.accent};
  align-items: center;
  justify-content: center;
`;

export const FriendInitials = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.md}px;
`;

export const FriendInfo = styled.View`
  flex: 1;
`;

export const FriendActionText = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.md}px;
  color: ${({ theme }) => theme.colors.text};
  flex-direction: row;
  flex-wrap: wrap;
`;

export const FriendName = styled.Text`
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

export const ActionType = styled.Text`
  color: ${({ theme }) => theme.colors.mutedText};
`;

export const TimeAgo = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.xs}px;
  color: ${({ theme }) => theme.colors.mutedText};
  margin-top: 2px;
`;

export const FriendContent = styled.Text`
  margin: 10px 0px;
`;

export const InnerGameCard = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 12px;
  border-radius: 12px;
  gap: 12px;
  margin-bottom: 16px;
`;

export const InnerGameCover = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 8px;
`;

export const InnerGameInfo = styled.View`
  flex: 1;
  gap: 4px;
`;

export const InnerGameTitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.sm}px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
`;

export const InnerGameAction = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const InnerGameActionText = styled.Text<{ color: string }>`
  font-size: ${({ theme }) => theme.typography.fontSize.xs}px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ color }) => color};
`;

export const PostActions = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;

export const ActionButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const ActionButtonText = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.mutedText};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;
