import {StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function increment({value, setValue}: {value: number, setValue: (value: number) => void}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.plusBtn} onPress={() => setValue(value + 1)}>
                <Text style={styles.Title}>Increment</Text>
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
        padding: 0,
    },
    Title: {
        fontSize: 20,
        color: "#ffffff",
    },
    plusBtn: {
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#006699",
        backgroundColor: "green",
        borderRadius: 10,
        padding: 10,
        boxShadow: "0px 4px 4px #006699",
    },
   
});