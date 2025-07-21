import { StyleSheet, View, Text, Pressable } from "react-native"
import { Colors } from "../../constants/styles";

function Button({children, onPress}) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => [styles.button, pressed && styles.pressed]}>
    <View>
        <Text style={styles.buttonText}>{children}</Text>
    </View>
    </Pressable>
    );
    
}

export default Button;

const styles = StyleSheet.create({
    button: {
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    // backgroundColor: "#1B6B93",
    backgroundColor: Colors.skyTeal,
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: "sans-serif-light"
  },
});