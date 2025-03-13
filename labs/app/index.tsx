import {StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {

    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.Title}>Home</Text>
            <TouchableOpacity style={styles.btn} onPress={() => {
                router.push("/lab4")
            }}>
                <Text style={styles.text}>Lab 4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
                router.push("/lab5")
            }}>
                <Text style={styles.text}>Lab 5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
                router.push("/lab6")
            }}>
                <Text style={styles.text}>Lab 6</Text>
            </TouchableOpacity>
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
        padding: 5,
        gap: 5,
    },
    Title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#ff0000",
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        color: "#ffffff",
    },
    btn: {
        backgroundColor: "#000000",
        padding: 10,
        borderRadius: 5,
    },
});