import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

function LoadingOverlay({message, size}) {
    return <View style={styles.rootContainer}>
        <Text style={styles.message}>{message}</Text>
        <ActivityIndicator size={size}/>
    </View>
}

export default LoadingOverlay;

const styles = StyleSheet.create({
    rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  message: {
    fontSize: 16,
    marginBottom: 12,
  },
});