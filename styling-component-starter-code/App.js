import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './WelcomeScreen';

export default function App() {
  return (
    <>
      <View style={[styles.background, {flex : 1}]}>
        <LittleLemonHeader />
        <WelcomeScreen />
      </View>
      <View style={styles.background}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#333333",
  },
});