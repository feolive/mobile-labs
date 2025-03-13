import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import getUsers from "../lib/supabase_crud";
import { useState, useEffect } from "react";
import { LabUser } from "../lib/supabase_crud";

export default function Lab6() {
  const [users, setUsers] = useState<LabUser[]>([]);

  const fetchUsers = async () => {
    let res = await getUsers();
    setUsers(res);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
      <View style={styles.container}>
        <FlatList
          style={{height: 300}}
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.itemContent}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.clazz}>class: {item.class}</Text>
                <Text style={styles.grade}>grade: {item.grade}</Text>
              </View>
            </View>
          )}
        ></FlatList>
        <TouchableOpacity style={styles.btn} onPress={fetchUsers}><Text>Refresh</Text></TouchableOpacity>
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
  title: {
    fontSize: 20,
    color: "green",
  },
  clazz: {
    fontSize: 16,
    color: "#000",
  },
  grade: {
    fontSize: 16,
    color: "#000",
  },
  item: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemContent: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  btn: {
    width: "80%",
    padding: 10,
    backgroundColor: "#cc6699",
    borderRadius: 15,
  },
});
