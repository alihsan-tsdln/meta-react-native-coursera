import * as React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import Constants from 'expo-constants';
import { Switch } from 'react-native-paper';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [preferences, setPreferences] = React.useState({
    pushNotifications: false,
    emailMarketing: false,
    latestNews: false,
  });

  const [isGetDone, setGetDone] = React.useState(false)

  React.useEffect(() => {
    (async () => {
      try {
        const values = await AsyncStorage.multiGet(["@push", "@email", "@news"]);
        const res = values.map(([key, value]) => value);
        setPreferences(() => ({
          pushNotifications: res[0] === "true",
          emailMarketing: res[1] === "true",
          latestNews: res[2] === "true",
        }));
        setGetDone(true);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  React.useEffect(() => {
    if(isGetDone) {
      (async () => {
        const push = ["@push", JSON.stringify(preferences.pushNotifications)];
        const email = ["@email", JSON.stringify(preferences.emailMarketing)];
        const news = ["@news", JSON.stringify(preferences.latestNews)];
        try {
          console.log("SET");
          await AsyncStorage.multiSet([push, email, news]);
          console.log("SET 2");
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, [isGetDone, preferences]);

  const updateState = (key) => () =>
    setPreferences((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account Preferences</Text>
      <View style={styles.row}>
        <Text>Push notifications</Text>
        <Switch
          value={preferences.pushNotifications}
          onValueChange={updateState('pushNotifications')}
        />
      </View>
      <View style={styles.row}>
        <Text>Marketing emails</Text>
        <Switch
          value={preferences.emailMarketing}
          onValueChange={updateState('emailMarketing')}
        />
      </View>
      <View style={styles.row}>
        <Text>Latest news</Text>
        <Switch
          value={preferences.latestNews}
          onValueChange={updateState('latestNews')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  header: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
