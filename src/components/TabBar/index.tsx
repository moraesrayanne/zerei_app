import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from 'styled-components/native';
import * as S from './styles';
import { signOut } from '../../api/auth';
import { useMutation } from '@tanstack/react-query';

export type TabRoute = 'Home' | 'Buscar' | 'Amigos' | 'Logout';

interface TabBarProps {
  currentTab: TabRoute;
}

const TabBar: React.FC<TabBarProps> = ({ currentTab }) => {
  const navigation = useNavigation<any>();
  const theme = useTheme();

  const { mutate } = useMutation({
    mutationFn: signOut,
  });

  const handlePress = (tab: TabRoute) => {
    if (tab === currentTab) return;

    if (tab === 'Home') navigation.navigate('Home');
    if (tab === 'Buscar') navigation.navigate('Buscar');
    if (tab === 'Amigos') navigation.navigate('Amigos');
    if (tab === 'Logout') mutate();
  };

  const tabs: {
    name: TabRoute;
    iconActive: keyof typeof Ionicons.glyphMap;
    iconInactive: keyof typeof Ionicons.glyphMap;
  }[] = [
    { name: 'Home', iconActive: 'home', iconInactive: 'home-outline' },
    { name: 'Buscar', iconActive: 'search', iconInactive: 'search-outline' },
    { name: 'Amigos', iconActive: 'people', iconInactive: 'people-outline' },
    { name: 'Logout', iconActive: 'log-out', iconInactive: 'log-out-outline' },
  ];

  return (
    <S.Container>
      {tabs.map((tab) => {
        const isActive = currentTab === tab.name;
        const color = isActive ? theme.colors.primary : theme.colors.mutedText;

        return (
          <S.TabItem
            key={tab.name}
            onPress={() => handlePress(tab.name)}
            activeOpacity={0.7}
          >
            <Ionicons
              name={isActive ? tab.iconActive : tab.iconInactive}
              size={24}
              color={color}
            />
            <S.TabLabel $isActive={isActive}>{tab.name}</S.TabLabel>
          </S.TabItem>
        );
      })}
    </S.Container>
  );
};

export default TabBar;
