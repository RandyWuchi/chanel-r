import React from 'react';
import { Alert, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const { height, width } = Dimensions.get('window');
export const MIN_HEIGHT = 128;
export const MAX_HEIGHT = height / 2;

const Item = ({ title, subTitle, picture, y, index }) => {
  const style = useAnimatedStyle(() => {
    return {
      height: interpolate(
        y.value,
        [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT],
        [MIN_HEIGHT, MAX_HEIGHT],
        Extrapolate.CLAMP
      ),
    };
  });

  const titleStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      y.value,
      [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT],
      [0, 1],
      Extrapolate.CLAMP
    );
    return {
      opacity,
    };
  });

  return (
    <TouchableWithoutFeedback onPress={() => Alert.alert('Pressed')}>
      <Animated.View style={[styles.container, style]}>
        <Image style={styles.picture} source={picture} />
        <View style={styles.titleContainer}>
          <Text style={styles.subTitle}>{subTitle.toUpperCase()}</Text>
          <View style={styles.mainTitle}>
            <Animated.View style={titleStyle}>
              <Text style={styles.title}>{title.toUpperCase()}</Text>
            </Animated.View>
          </View>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    width,
    height: MIN_HEIGHT,
    justifyContent: 'flex-end',
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '500',
  },
  titleContainer: {
    maxHeight: MAX_HEIGHT * 0.61,
    justifyContent: 'center',
    flex: 1,
  },
  mainTitle: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    padding: 32,
    transform: [{ translateY: 64 }],
  },
  subTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
