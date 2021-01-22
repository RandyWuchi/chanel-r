import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import StoryThumbnail from '../components/StoryThumbnail';

export const stories = [
  {
    id: '2',
    source:
      'https://images.unsplash.com/photo-1519609616053-af4bfa1f9391?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
    user: 'derek.russel',
    avatar: require('../assets/avatars/derek.russel.png'),
  },
  {
    id: '4',
    source:
      'https://images.unsplash.com/photo-1611003321590-acd65c5fc1e1?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Qm4tRGpyY0Jyd298fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    user: 'jmitch',
    avatar: require('../assets/avatars/jmitch.png'),
  },
  {
    id: '7',
    source:
      'https://images.unsplash.com/photo-1533219057257-4bb9ed5d2cc6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcnR5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    user: 'andrea.schmidt',
    avatar: require('../assets/avatars/andrea.schmidt.png'),
  },
  {
    id: '5',
    source:
      'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    user: 'monicaa',
    avatar: require('../assets/avatars/monicaa.png'),
  },
  {
    id: '3',
    source:
      'https://images.unsplash.com/photo-1550345332-d73a0111ad25?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGF0aGxldGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    user: 'alexandergarcia',
    avatar: require('../assets/avatars/alexandergarcia.png'),
  },
  {
    id: '1',
    source:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBhcnR5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    user: 'andrea.schmidt',
    avatar: require('../assets/avatars/andrea.schmidt.png'),
  },
  {
    id: '6',
    source:
      'https://images.unsplash.com/photo-1539758462369-43adaa19bc1f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    user: 'andrea.schmidt',
    avatar: require('../assets/avatars/andrea.schmidt.png'),
  },
];

const ExploreScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator='false'>
      <View style={styles.container}>
        {stories.map((story) => (
          <StoryThumbnail key={story.id} story={story} />
        ))}
      </View>
    </ScrollView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 7,
  },
});
