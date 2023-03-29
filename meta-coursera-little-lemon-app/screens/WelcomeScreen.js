import * as React from 'react';
import { View, Image, StyleSheet, Text, Pressable, Dimensions } from 'react-native';

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        style={styles.logo}
        source={require("../assets/little-lemon-logo.png")}
      />
      <Text style={styles.texts}>
        {"Little Lemon, your local Mediterranean Bistro "}
      </Text>
      <Pressable onPress={() => navigation.navigate("Subscribe")}>
        <View style={styles.buttons}>
          <Text style={styles.buttonText}>
            Newsletter
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 150,
    width: 150,
    marginTop: 150,
  },

  texts: {
    marginTop: 80,
    margin: 65,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },

  buttons: {
    margin: 75,
    width: screenWidth * 0.85,
    height: screenHeight / 20,
    backgroundColor: "#40524C",
    borderRadius: 10,
    justifyContent: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default WelcomeScreen;
