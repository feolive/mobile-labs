import { StyleSheet, View, Text, Image } from "react-native";

export default function orange() {
    return (
        <Image style={styles.orange} source={{uri:"https://www.quanta.org/orange/orange.jpg"}} />
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
    orange: {
        width: 200,
        height: 200,
        marginTop: 20,
    },
})