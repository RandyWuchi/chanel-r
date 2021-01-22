import React, { useState } from 'react';
import { Dimensions, Image, Pressable, StyleSheet, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';

const margin = 6;
const borderRadius = 5;
const width = Dimensions.get('window').width / 2 - margin * 2;

const StoryThumbnail = ({ story }) => {
  const navigation = useNavigation();
  const [opacity, setOpacity] = useState(1);
  useFocusEffect(() => {
    if (navigation.isFocused()) {
      setOpacity(1);
    }
  });

  return (
    <Pressable
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
      onPress={() => {
        setOpacity(0);
        navigation.push('Story', { story });
      }}
    >
      <View style={[styles.container, { opacity }]}>
        <SharedElement id={story.id} style={{ flex: 1 }}>
          <Image source={story.source} style={styles.image} />
        </SharedElement>
      </View>
    </Pressable>
  );
};

export default StoryThumbnail;

const styles = StyleSheet.create({
  container: {
    width,
    height: width * 1.7,
    marginTop: 10,
    borderRadius,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    borderRadius,
  },
});
