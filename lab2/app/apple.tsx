import { StyleSheet, View, Text, Image } from "react-native";

export default function apple() {
    return (
        <Image style={styles.apple} source={{uri:"https://static.vecteezy.com/system/resources/thumbnails/016/940/260/small_2x/apple-fruit-isolated-on-white-background-photo.jpg"}} />
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
    apple: {
        width: 200,
        height: 200,
        marginTop: 20,
    },
})