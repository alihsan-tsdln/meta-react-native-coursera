import * as React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function WelcomeScreen() {

  const [value, onChangeValue] = React.useState("");

  return (
    <ScrollView indicatorStyle="white" style={styles.container}>
      <Text style={styles.headerText}>{"Welcome to Little Lemon"}</Text>
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChange={onChangeValue}
        placeholder={"First Name"}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },

  textInput: {
    backgroundColor: "#EDEFEE",
    height : 40,
    margin : 12,
    borderWidth : 1,
    fontSize : 16,
    borderColor : "#EDEFEE",
  },
});
