import { View, Text, SafeAreaView } from 'react-native';

import LittleLemonFooter from './LittleLemonFooter';

export default function LittleLemonHeader() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#F4CE14" }}>
        <Text
          style={{
            padding: 40,
            fontSize: 30,
            color: "black",
            textAlign: "center",
          }}
        >
          Little Lemon
        </Text>
      </View>
      <LittleLemonFooter />
    </SafeAreaView>
  );
}
