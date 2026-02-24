import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../../../supabase';
import TabBar from '../../../components/TabBar';
import * as S from './styles';
import { useTheme } from 'styled-components/native';

const MOCK_GAMES = [
  {
    id: '1',
    title: 'Zelda TOTK',
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg/250px-The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg',
    hours: 138,
    statusColor: '#ef4343',
  },
  {
    id: '2',
    title: 'Red Dead Redemption 2',
    cover:
      'https://m.media-amazon.com/images/I/711O-kna6qL._AC_UF1000,1000_QL80_.jpg',
    hours: 245,
    statusColor: '#ef4343',
  },
  {
    id: '3',
    title: 'Apex Legends',
    cover:
      'https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=400&auto=format&fit=crop',
    hours: 157,
    statusColor: '#ef4343',
  },
];

const MOCK_FRIENDS = [
  {
    id: '1',
    name: 'Lucas Silva',
    initials: 'LS',
    actionText: 'zerou',
    game: 'Elden Ring',
    time: '2h atrás',
    content:
      'Finalmente zerei Elden Ring! Que jogo incrível, a DLC é absurda 🔥',
    gameCover:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/0/0d/Elden_Ring_capa.jpg/330px-Elden_Ring_capa.jpg',
    gameActionText: 'zerou',
    gameActionColor: '#22c55e',
    likes: 24,
    comments: 2,
  },
  {
    id: '2',
    name: 'Marina Costa',
    initials: 'MC',
    actionText: 'iniciou',
    game: 'God of War',
    time: '5h atrás',
    content: 'Começando a jornada nórdica hoje! Me desejem sorte 🪓',
    gameCover:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/a/a5/God_of_War_Ragnar%C3%B6k_capa.jpg/330px-God_of_War_Ragnar%C3%B6k_capa.jpg',
    gameActionText: 'jogando',
    gameActionColor: '#3b82f6',
    likes: 12,
    comments: 0,
  },
];

const HomeScreen = () => {
  const theme = useTheme();

  // Opcional: Pegar os dados do usuário do Supabase
  const { data: userProfile } = useQuery({
    queryKey: ['userProfile'],
    queryFn: async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      return user;
    },
  });

  const userName = userProfile?.email?.split('@')[0] || 'Gamer';

  return (
    <S.SafeArea>
      <S.Header>
        <S.ProfileInfo>
          <S.Avatar
            source={{
              uri: 'https://img.freepik.com/fotos-gratis/um-gatinho-adoravel-a-caminhar_658552-2.jpg?semt=ais_hybrid&w=740&q=80',
            }}
          />
          <S.HeaderText>
            <S.Greeting>Bem-vindo(a) de volta,</S.Greeting>
            <S.UserName>{userName}</S.UserName>
          </S.HeaderText>
        </S.ProfileInfo>
        <S.IconButton>
          <Ionicons
            name='notifications-outline'
            size={20}
            color={theme.colors.text}
          />
        </S.IconButton>
      </S.Header>

      <S.ScrollContainer>
        {/* Jogos em Andamento Section */}
        <S.Section>
          <S.SectionHeader>
            <S.SectionTitle>Jogos recentes</S.SectionTitle>
            <Ionicons
              name='chevron-forward'
              size={20}
              color={theme.colors.text}
            />
          </S.SectionHeader>

          <S.HorizontalList>
            {MOCK_GAMES.map((game) => (
              <S.GameCard key={game.id} activeOpacity={0.8}>
                <S.GameCover source={{ uri: game.cover }} />
                <S.GameInfo>
                  <S.GameTitle numberOfLines={1}>{game.title}</S.GameTitle>
                  <S.GameStatus>
                    <S.GameTime>{game.hours}h jogadas</S.GameTime>
                  </S.GameStatus>
                </S.GameInfo>
              </S.GameCard>
            ))}
          </S.HorizontalList>
        </S.Section>

        {/* Atualizações de Amigos Section */}
        <S.Section>
          <S.SectionHeader>
            <S.SectionTitle>Atualização dos amigos</S.SectionTitle>
            <Ionicons
              name='chevron-forward'
              size={20}
              color={theme.colors.text}
            />
          </S.SectionHeader>
          <S.FriendsList>
            {MOCK_FRIENDS.map((friend) => (
              <S.FriendCard key={friend.id}>
                <S.FriendHeader>
                  <S.FriendAvatarContainer>
                    <S.FriendInitials>{friend.initials}</S.FriendInitials>
                  </S.FriendAvatarContainer>
                  <S.FriendInfo>
                    <S.FriendActionText>
                      <S.FriendName>{friend.name}</S.FriendName>{' '}
                      <S.ActionType>{friend.actionText}</S.ActionType>{' '}
                      <S.FriendName>{friend.game}</S.FriendName>
                    </S.FriendActionText>
                    <S.TimeAgo>{friend.time}</S.TimeAgo>
                  </S.FriendInfo>
                </S.FriendHeader>

                {friend.content && (
                  <S.FriendContent>{friend.content}</S.FriendContent>
                )}

                <S.InnerGameCard>
                  <S.InnerGameCover source={{ uri: friend.gameCover }} />
                  <S.InnerGameInfo>
                    <S.InnerGameTitle>{friend.game}</S.InnerGameTitle>
                    <S.InnerGameAction>
                      <Ionicons
                        name='trophy-outline'
                        size={14}
                        color={friend.gameActionColor}
                      />
                      <S.InnerGameActionText color={friend.gameActionColor}>
                        {friend.gameActionText}
                      </S.InnerGameActionText>
                    </S.InnerGameAction>
                  </S.InnerGameInfo>
                </S.InnerGameCard>

                <S.PostActions>
                  <S.ActionButton>
                    <Ionicons
                      name='heart-outline'
                      size={22}
                      color={theme.colors.mutedText}
                    />
                    <S.ActionButtonText>{friend.likes}</S.ActionButtonText>
                  </S.ActionButton>
                  <S.ActionButton>
                    <Ionicons
                      name='chatbubble-outline'
                      size={20}
                      color={theme.colors.mutedText}
                    />
                    <S.ActionButtonText>{friend.comments}</S.ActionButtonText>
                  </S.ActionButton>
                </S.PostActions>
              </S.FriendCard>
            ))}
          </S.FriendsList>
        </S.Section>
      </S.ScrollContainer>
    </S.SafeArea>
  );
};

export default HomeScreen;
