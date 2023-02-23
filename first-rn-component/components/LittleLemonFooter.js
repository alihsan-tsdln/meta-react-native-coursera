import { View, Text, SafeAreaView } from "react-native";

export default function LittleLemonHeader() {
    return (
      <View
        style={{
          bottom: 23,
          position: "absolute",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#F4CE14",
        }}
      >
        <Text>{"All rights reserved by Little Lemon, 2022"}</Text>
      </View>
    );
 }