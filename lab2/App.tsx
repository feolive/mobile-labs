import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { vacationDestination, vacationPrice } from "./app/vacation";
import { ExpoRouter } from "expo-router";

export default ExpoRouter;

export function App() {
  type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    height: number;
  };

  const name: string = "john";
  const age: number = 20;
  const isStudent: boolean = true;
  const height: number = 1.8;

  interface Person2 {
    name: string;
    occupation: string;
    vacation: string;
    vacationPrice: number;
  }

  const data3: Person2 = {
    name: "john",
    occupation: "student",
    vacation: vacationDestination("Tokyo"),
    vacationPrice: vacationPrice(1000),
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>
        Start working on your app! {data3.name}
      </Text>
      <StatusBar style="auto" />
      <View>
        <Text>Vacation destination: {data3.vacation}</Text>
        <Text>Vacation price: {data3.vacationPrice}</Text>
      </View>
      <View style={styles.clickLayout}>
        <TouchableOpacity style={styles.clickBtn} onPress={() => {
          alert("Success! This is the click");
        }}> 
          <Text style={styles.clickText}>click me</Text>
        </TouchableOpacity>
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
    color: "#66ff99",
  },
  text: {
    fontSize: 20,
  },
  clickLayout:{
    position: "relative",
    marginTop: 20
  },
  clickBtn: {
    borderWidth: 1,
    borderColor: "#006699",
    borderRadius: 10,
    padding: 10,
    boxShadow: "0px 4px 4px #006699",
  },
  clickText: {
    fontSize: 20,
    gap: 10,
    fontWeight: "bold",
    color: "#006699",
    width: 100,
    textAlign: "center",
  },
});
