import { Video } from 'expo-av';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const { height } = Dimensions.get('window');

const StoryScreen = ({ route, navigation }) => {
  const { story } = route.params;
  return (
    <View style={{ flex: 1 }}>
      {!story.video && <Image source={story.source} style={[styles.image]} />}
      {story.video && (
        <Video
          source={story.video}
          rate={1.0}
          resizeMode='cover'
          isMuted={false}
          shouldPlay
          isLooping
          style={styles.video}
        />
      )}
    </View>
  );
};

export default StoryScreen;

const styles = StyleSheet.create({
  image: {
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
  video: {
    ...StyleSheet.absoluteFillObject,
  },
});
