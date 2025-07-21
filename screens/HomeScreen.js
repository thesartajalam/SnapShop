import { useLayoutEffect } from "react";
import { StyleSheet, View, Text, Image, Alert } from "react-native"

function HomeScreen() {

    return (
        <View style={styles.OuterContainer}>
            <Image style={styles.image} source={require('../assets/sadEmoji-removebg-preview.png')} resizeMode="contain"/>
            <Text style={styles.text}>We are not operational in your area!</Text>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    OuterContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: 125,
        width: 125,
    },
    text: {
        marginTop: 20,
        fontWeight: "bold",
    }
});