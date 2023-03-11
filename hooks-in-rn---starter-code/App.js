import * as React from 'react';
import { View, StyleSheet, useColorScheme, Text } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './WelcomeScreen';

export default function App() {

  const colorScheme = useColorScheme();

  return (
    <>
      <View
        style={
          colorScheme === "light"
            ? { flex: 1, backgroundColor: "#EDEFEE" }
            : { flex: 1, backgroundColor: "#333333" }
        }
      >
        <LittleLemonHeader />
        <WelcomeScreen />
      </View>
      <View
        style={
          colorScheme === "light"
            ? { backgroundColor: "#EDEFEE" }
            : { backgroundColor: "#333333" }
        }
      >
        <LittleLemonFooter />
      </View>
    </>
  );
}
