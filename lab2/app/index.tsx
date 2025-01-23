import {StyleSheet, View, Text } from "react-native";
import list from "./components/fruits";
import { Link } from "expo-router";

export default function Home() {
    const fruits = list();

    return (
        <View style={styles.container}>
            <Text style={styles.Title}>Home</Text>
            {
                (fruits && fruits.length > 0) &&
                fruits.map((fruit) => {
                    return <Link key={fruit} href={`/${fruit}`} style={styles.text}>{fruit}</Link>
                })
            }
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
    text: {
        fontSize: 18,
    },
   
});