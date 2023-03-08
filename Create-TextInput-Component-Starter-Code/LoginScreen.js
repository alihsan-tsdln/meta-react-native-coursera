import React from "react";
import { ScrollView, Text, StyleSheet, Alert } from "react-native";
import { TextInput } from "react-native-paper";

export default function LoginScreen() {

    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue </Text>
      <TextInput
        style={{
          margin: 10,
          fontSize: 14,
          height: 45,
        }}
        value={email}
        onChange={onChangeEmail}
        placeholder="email"
        keyboardType="email-address"
      />
      <TextInput
        style={{
          margin: 10,
          fontSize: 14,
          height: 45,
        }}
        value={password}
        onChange={onChangePassword}
        placeholder="password"
        secureTextEntry={true}
        maxLength={21}
        onFocus={() => {Alert.alert("First name is focussed")}}
        onBlur={() => {Alert.alert("First name is now blurred")}} 
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
});
