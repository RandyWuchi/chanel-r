import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { useColorScheme } from 'react-native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import Colors from '../constants/Colors';
import ExploreScreen, { stories } from '../screens/ExploreScreen';
import HomeScreen from '../screens/HomeScreen';
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
            <Ionicons name='location' color={color} size={30} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Profile'
        component={TabThreeNavigator}
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
const TabThreeStack = createStackNavigator();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen name='Profile' component={ProfileScreen} />
    </TabThreeStack.Navigator>
  );
}
