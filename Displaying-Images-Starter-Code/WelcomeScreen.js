import * as React from 'react';
import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ScrollView indicatorStyle="white" style={styles.container}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Image
         style = {{
          width: 100,
          height: 100,
          margin : 20,
          borderRadius : 20,
         }}
         source={require("./img/logo.png")}
         accessible={true}
         accessibilityLabel={"Little Lemon App Logo"}
          />
        <Text style={styles.headerText}>Little Lemon</Text>
      </View>
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    left : -35,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
});
