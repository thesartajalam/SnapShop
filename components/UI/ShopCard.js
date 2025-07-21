import { StyleSheet, View, Platform, Pressable, Text, Image } from "react-native";
// import { Image } from "react-native-expo-image-cache";
import ShopDetail from "./ShopDetail";

function ShopCard({ title, imageUri, category, distance }) {
    return (
    <View style={styles.shopItem}>
            <Pressable android_ripple={{ color: '#ccc'}} style={({pressed}) => 
            pressed && styles.buttonPressed} >
                <View>
                    <View>
                        <Image source={{uri: imageUri}} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <ShopDetail distance={distance} category={category}/>
                </View>
            </Pressable>
        </View>
    ); 
}

export default ShopCard;

const styles = StyleSheet.create({shopItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
    },
    buttonPressed : {
        opacity: 0.5
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden"
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: "center",
        fontSize: 18,
        margin: 8
    },
});