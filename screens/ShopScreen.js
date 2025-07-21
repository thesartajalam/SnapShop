import { useLayoutEffect } from "react";
import { StyleSheet, View, Text, FlatList, Alert } from "react-native"
import ShopCard from "../components/UI/ShopCard";
import { shops } from "../data/shops";


function ShopScreen() {

    function renderShopItem(itemData) {
        const item = itemData.item;

        const shopCardProps = {
            title: item.name,
            imageUri: item.image,
            category: item.category,
            distance: item.distance,
        };

        return <ShopCard {...shopCardProps}/>
    }


    return <View style={styles.container}>
        <FlatList data={shops} keyExtractor={(item) => item.id} renderItem={renderShopItem} showsVerticalScrollIndicator={false}/>
    </View>
}

export default ShopScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});