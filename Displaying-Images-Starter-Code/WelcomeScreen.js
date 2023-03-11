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
          style={{
            width: 100,
            height: 100,
            margin: 20,
            resizeMode: "contain",
            borderRadius: 20,
          }}
          source={require("./img/ATATURK.png")}
          accessible={true}
          accessibilityLabel={"ATATURK Logo"}
        />
        <Text style={styles.headerText}>Mustafa Kemal ATATURK</Text>
      </View>
      <Text style={styles.regularText}>
        {
          "Mustafa Kemal Atatürk, or Mustafa Kemal Pasha until 1921, and Ghazi Mustafa Kemal from 1921 until 1934 ( c. 1881 – 10 November 1938) was a Turkish field marshal, revolutionary statesman, author, and the founding father of the Republic of Turkey, serving as its first president from 1923 until his death in 1938."
        }
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
    left : -40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    top : -30,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
});
