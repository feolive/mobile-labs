import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import Decrement from "../components/decrement";
import Increment from "../components/increment";

export default function lab4() {
  const [value, setValue] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>My Value: {value}</Text>
      <View style={styles.btnLayout}>
        <Decrement value={value} setValue={setValue} />
        <Increment value={value} setValue={setValue} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    padding: 0,
  },
  Title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ff0000",
    marginBottom: 20,
  },
  btnLayout: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
});
