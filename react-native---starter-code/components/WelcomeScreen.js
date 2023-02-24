import React from "react";
import { SafeAreaView, Text } from "react-native";

export default function WelcomeScreen() {
    return (
      <SafeAreaView>
        <Text
          style={{
            color: "white",
            fontSize: 30,
            textAlign: "center",
            margin: 30,
          }}
        >
          {"Welcome the Little Lemon"}
        </Text>

        <Text
          style={{
            color: "white",
            fontSize: 20,
            textAlign: "center",
            margin : 30,
          }}
        >
          {
            "Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!"
          }
        </Text>
      </SafeAreaView>
    );
}