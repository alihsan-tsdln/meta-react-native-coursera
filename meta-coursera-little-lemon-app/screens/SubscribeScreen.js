import * as React from 'react';
import { View, Image, Text, TextInput, Pressable, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import { validateEmail } from "../utils";

const SubscribeScreen = () => {

  const [fit, setFit] = React.useState(false);

  return (
    <View>
      <Image
        style={styles.logo}
        source={require("../assets/little-lemon-logo-grey.png")}
      />
      <Text style={styles.describe}>
        {"Subscribe to our newsletter for our latest delicious recipes!"}
      </Text>
      <TextInput
        placeholder="    Type your email"
        keyboardType="email-address"
        style={styles.emailArea}
        onChangeText={(value) => {
          setFit(validateEmail(value))
          }}
      />
      <Pressable
        onPress={() =>
          fit ? Alert.alert("Thanks for subscribing,\n stay tuned!") : null
        }
      >
        <View style={[styles.button, fit ? {backgroundColor: "#40524C",} : null]}>
          <Text style={styles.buttonText}>{"Subscribe"}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 35,
    width: 280,
    backgroundColor: "#B7B7B7",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 10,
    justifyContent: "center",
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },

  logo: {
    height: 120,
    width: 120,
    alignSelf: "center",
    margin: 30,
  },

  describe: {
    marginTop: 0,
    marginBottom: 20,
    margin:20,
    textAlign: "center",
    fontSize: 20,
  },

  emailArea: {
    height: 35,
    width: 300,
    alignSelf: "center",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#40524C",
  },
});

export default SubscribeScreen;
