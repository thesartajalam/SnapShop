import { StyleSheet, Text, TextInput, View } from "react-native"
import { Colors } from "../../constants/styles";

function Input({label, value, onUpdateValue}) {
    return <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.input} onChangeText={onUpdateValue} value={value}/>
    </View>
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        // marginVertical: 4,
        height: 90,
        width: "100%",
        alignItems: "stretch"
    },
    label: {
        color: "white",
        marginBottom: 10,
        fontFamily: "sans-serif",
        fontSize: 18
    },
    input: {
        paddingVertical: 8,
        paddingHorizontal: 6,
        // backgroundColor: "#FAF6E9",
        backgroundColor: Colors.paleCream,
        // color: "#164B60",
        color: Colors.oceanBlue,
        borderRadius: 4,
        fontSize: 20
    }
});