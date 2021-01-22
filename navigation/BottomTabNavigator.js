import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { useColorScheme } from 'react-native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import Colors from '../constants/Colors';
import DetailsScreen from '../screens/DetailsScreen';
import ExploreScreen, { stories } from '../screens/ExploreScreen';
import HomeScreen from '../screens/HomeScreen';
import LocationScreen from '../screens/LocationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import StoryScreen from '../screens/StoryScreen';

export const assets = stories
  .map((story) => [story.avatar, story.source])
  .flat();

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false,
      }}
    >
      <BottomTab.Screen
        name='Home'
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='ios-home' color={color} size={30} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Explore'
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='search' color={color} size={30} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Location'
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='ios-location' color={color} size={30} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Profile'
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='ios-person' color={color} size={30} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const TabOneStack = createStackNavigator();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator screenOptions={{ headerShown: false }}>
      <TabOneStack.Screen name='Home' component={HomeScreen} />
    </TabOneStack.Navigator>
  );
}
const TabTwoStack = createSharedElementStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        cardOverlayEnabled: true,
        cardStyle: { backgroundColor: 'transparent' },
      }}
      mode='modal'
    >
      <TabTwoStack.Screen name='Explore' component={ExploreScreen} />
      <TabTwoStack.Screen
        name='Story'
        component={StoryScreen}
        sharedElementsConfig={(route) => {
          const { id } = route.params.story;
          return [id];
        }}
      />
    </TabTwoStack.Navigator>
  );
}
const TabThreeStack = createSharedElementStackNavigator();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator screenOptions={{ headerShown: false }}>
      <TabThreeStack.Screen name='Location' component={LocationScreen} />
      <TabThreeStack.Screen
        name='Details'
        component={DetailsScreen}
        sharedElementsConfig={(route) => {
          const { item } = route.params;
          return [
            {
              id: `item.${item.id}.image_url`,
              animation: 'move',
              resize: 'clip',
            },
            {
              id: `item.${item.id}.title`,
              animation: 'fade',
              resize: 'clip',
            },
            {
              id: `item.${item.id}.description`,
              animation: 'fade',
              resize: 'clip',
            },
            {
              id: `item.${item.id}.iconName`,
              animation: 'move',
              resize: 'clip',
            },
          ];
        }}
        options={{
          headerBackTitle: false,
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress,
              },
            };
          },
        }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen name='Profile' component={ProfileScreen} />
    </TabFourStack.Navigator>
  );
}
