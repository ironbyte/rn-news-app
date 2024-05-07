import React from "react";

import { StyleSheet } from "react-native";
import { useFocusEffect } from "expo-router";
import { Text, View } from "@/components/Themed";

export default function SearchTabScreen() {
  useFocusEffect(
    React.useCallback(() => {
      console.log("Hello");
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab [Home|Search]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
