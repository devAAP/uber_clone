import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Set up redux

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>My Uber Clone!</Text>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
