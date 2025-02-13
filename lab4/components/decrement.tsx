import {StyleSheet, View, Text, TouchableOpacity } from "react-native";

type DecrementProps = {
    value: number;
    setValue: (value: number) => void;
}

const Decrement: React.FC<DecrementProps> = ({value, setValue}) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.minusBtn} onPress={() => setValue(value - 1)}>
                <Text style={styles.Title}>Decrement</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Decrement;

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
    minusBtn: {
        borderWidth: 1,
        borderColor: "#006699",
        backgroundColor: "red",
        borderRadius: 10,
        padding: 10,
        boxShadow: "0px 4px 4px #006699",
    },
   
});