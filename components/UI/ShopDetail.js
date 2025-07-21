import { View, Text, StyleSheet } from "react-native";
import {Ionicons} from "@expo/vector-icons";

function ShopDetail({distance, category}) {
    return <View style={styles.details}>
    <Text style={styles.category}>{category}</Text>
    <Text style={styles.distance}><Ionicons name="location"/> {distance}m</Text>
</View>
}

export default ShopDetail;

const styles = StyleSheet.create({
    details: {
        // flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        padding: 2
    },
    category: {
        fontSize: 14,
        // marginBottom: 4
    },
    distance: {
        marginVertical: 4,
        fontSize: 12
    }
});