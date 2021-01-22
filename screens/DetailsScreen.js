import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import React, { useRef } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SharedElement } from 'react-navigation-shared-element';
import * as Animatable from 'react-native-animatable';

const { height } = Dimensions.get('window');
const ITEM_HEIGHT = height * 0.5;

const DetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const buttonRef = useRef();
  return (
    <View style={styles.container}>
      <SharedElement id={`item.${item.id}.image_url`}>
        <Image
          source={{ uri: item.image_url }}
          resizeMode='cover'
          style={styles.image}
        />
      </SharedElement>
      <Animatable.View
        ref={buttonRef}
        animation='fadeIn'
        duration={600}
        delay={300}
        style={[StyleSheet.absoluteFillObject]}
      >
        <MaterialCommunityIcons
          name='close'
          size={28}
          color='#fff'
          onPress={() => {
            buttonRef.current.fadeOut(100).then(() => {
              navigation.goBack();
            });
          }}
          style={styles.closeIcon}
        />
      </Animatable.View>
      <View
        style={{ flexDirection: 'row', marginTop: 10, paddingHorizontal: 20 }}
      >
        <SharedElement id={`item.${item.id}.iconName`}>
          <SimpleLineIcons size={40} color='white' name={item.iconName} />
        </SharedElement>
        <View style={{ flexDirection: 'column', paddingLeft: 6 }}>
          <SharedElement id={`item.${item.id}.title`}>
            <Text style={styles.title}>{item.title}</Text>
          </SharedElement>
          <SharedElement id={`item.${item.id}.description`}>
            <Text style={styles.description}>{item.description}</Text>
          </SharedElement>
        </View>
      </View>
      <ScrollView
        indicatorStyle='white'
        style={{
          paddingHorizontal: 20,
          backgroundColor: '#0f0f0f',
        }}
        contentContainerStyle={{ paddingVertical: 20 }}
      >
        <Text style={styles.details}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text style={styles.details}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },
  image: {
    width: '100%',
    height: ITEM_HEIGHT,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  closeIcon: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 2,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 28,
  },
  description: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 18,
  },
  details: {
    fontSize: 18,
    color: '#fff',
    lineHeight: 24,
    marginBottom: 4,
  },
});
