import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

type Article = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export default function CallAPI() {
  const [data, setData] = useState<Article>();

  const fetchData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const json = await response.json();
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.id}>ID: {data?.id}</Text>
        <Text>user ID: {data?.userId}</Text>
      </View>
      <Text style={styles.title}>{data?.title}</Text>
      <Text style={styles.body}>{data?.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#cc6699",
  },
  id: {
    fontSize: 20,
    color: "white",
    fontStyle: "italic",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 15,
    padding: 5,
  },
  header: {
    marginBottom: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    marginTop: 10,
    fontSize: 16,
  },
});
