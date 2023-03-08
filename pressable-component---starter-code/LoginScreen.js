import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Pressable } from 'react-native';

export default function LoginScreen() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [logged, setLogged] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>
        {logged ? "You are logged in!" : "Login to continue "}
      </Text>
      {!logged && (
        <>
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={onChangeEmail}
            placeholder={"email"}
            keyboardType={"email-address"}
          />
          <TextInput
            style={styles.inputBox}
            value={password}
            onChangeText={onChangePassword}
            placeholder={"password"}
            keyboardType={"default"}
            secureTextEntry={true}
          />
          <Pressable style={styles.loginBtn} onPress={() => setLogged(!logged)}>
            <Text style={styles.loginText}>Log in</Text>
          </Pressable>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loginBtn: {
    backgroundColor: "#EE9972",
    height: 45,
    width: 150,
    margin: 15,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },

  loginText: {
    fontSize: 20,
    color: "#333333",
    fontWeight: "600",
  },

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
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#EDEFEE",
  },
});
