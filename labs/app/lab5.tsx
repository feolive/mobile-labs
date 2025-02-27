import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import CallAPI from "../components/callAPI";

export default function Lab5() {
  const [showCallAPI, setShowCallAPI] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Lab 5</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setShowCallAPI(!showCallAPI)}
          >
            <Text style={styles.text}> Call API</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.callAPI}>{showCallAPI && <CallAPI />}</View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    padding: 20,
  },
  header: {
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    color: "#ffffff",
  },
  btn: {
    backgroundColor: "#000000",
    padding: 10,
    borderRadius: 5,
  },
  callAPI: {
    marginTop: 20,
  },
});
