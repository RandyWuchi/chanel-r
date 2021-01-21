import React from 'react';
import { StatusBar, View } from 'react-native';
import Navigation from './navigation';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Navigation />
      <StatusBar hidden />
    </View>
  );
}
