import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import Item, { MAX_HEIGHT } from '../components/Item';
import { items } from '../data/Models';

const HomeScreen = () => {
  const y = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { y: value } }) => {
      y.value = value;
    },
  });
  return (
    <Animated.ScrollView
      snapToInterval={MAX_HEIGHT}
      scrollEventThrottle={16}
      onScroll={onScroll}
      decelerationRate='fast'
    >
      <View style={styles.container}>
        {items.map((item, index) => (
          <Item
            key={index}
            subTitle={item.subtitle}
            title={item.title}
            picture={item.picture}
            y={y}
            index={index}
          />
        ))}
      </View>
    </Animated.ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: (items.length + 1) * MAX_HEIGHT,
    backgroundColor: 'black',
  },
});
