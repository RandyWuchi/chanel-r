import { SimpleLineIcons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SharedElement } from 'react-navigation-shared-element';
import { data } from '../data/Models';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;

const LocationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.dateWrapper}>
        <Text style={styles.date}>Saturday 27th January</Text>
        <Text style={styles.day}>Today</Text>
      </View>
      <View style={{ flex: 1, paddingBottom: 20 }}>
        <ScrollView
          indicatorStyle='white'
          contentContainerStyle={{ alignItems: 'center' }}
        >
          {data.map((item) => (
            <View key={item.id}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ marginBottom: 14 }}
                onPress={() => navigation.navigate('Details', { item })}
              >
                <SharedElement id={`item.${item.id}.image_url`}>
                  <Image
                    source={{ uri: item.image_url }}
                    resizeMode='cover'
                    style={styles.image}
                  />
                </SharedElement>
                <View style={styles.infoWrapper}>
                  <View style={{ flexDirection: 'row' }}>
                    <SharedElement id={`item.${item.id}.iconName`}>
                      <SimpleLineIcons
                        size={40}
                        color='white'
                        name={item.iconName}
                      />
                    </SharedElement>
                    <View style={styles.info}>
                      <SharedElement id={`item.${item.id}.tite`}>
                        <Text style={styles.title}>{item.title}</Text>
                      </SharedElement>
                      <SharedElement id={`item.${item.id}.description`}>
                        <Text style={styles.description}>
                          {item.description}
                        </Text>
                      </SharedElement>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },
  dateWrapper: {
    marginTop: 50,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  date: {
    color: '#888',
    textTransform: 'uppercase',
  },
  day: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '600',
  },
  image: {
    borderRadius: 14,
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
  },
  description: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 18,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 28,
  },
  info: {
    flexDirection: 'column',
    paddingLeft: 6,
  },
  infoWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 10,
  },
});
