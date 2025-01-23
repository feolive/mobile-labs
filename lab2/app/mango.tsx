import { StyleSheet, View, Text, Image } from "react-native";

export default function mango() {
    return (
        <Image style={styles.mango} source={{uri:"https://product-images.metro.ca/images/h18/he5/10460988276766.jpg"}} />
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
    mango: {
        width: 200,
        height: 200,
        marginTop: 20,
    },
})