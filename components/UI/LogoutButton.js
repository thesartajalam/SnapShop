import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"

function LogoutButton({ onPress }) {
    return <Pressable onPress={onPress} style={({pressed}) => [styles.button, pressed && styles.pressed]}>
        <Ionicons name="log-out-outline" size={28} color="white"/>
    </Pressable>
}

export default LogoutButton;

const styles = StyleSheet.create({
    button: {
        marginRight: 18,
        // padding: 8
    },
    pressed: {
        opacity: 0.5
    }
});