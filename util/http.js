import axios from "axios";
import { Alert } from "react-native";

const GEOAPIFY_API_KEY = "5eccdbc458e94cc98c9ac7a013754c83";

export async function checkNearbyShops(latitude, longitude) {
    const radius = 300;
    const categories = "commercial";
    const url = `https://api.geoapify.com/v2/places`;
    const params = {
        categories: categories,
        filter: `circle:${longitude},${latitude},${radius}`,
        limit: 1,
        apiKey: GEOAPIFY_API_KEY,
    };

    console.log("Sending request with params: ", params);

    try {
        const response = await axios.get(url, {params, timeout: 5000});
        console.log("Response : ", response.data);
        if(response.data?.features.length > 0){
            const shop = response.data.features[0].properties;
            console.log("Shop found : ", shop.name || "UnNamed Shop");
            return true;
        }
        else{
            console.log("No shops within 300m");
            return false;
        }
    } catch (error) {
        if(error.code === 'ECONNABORTED'){
            Alert.alert("Request Timeout", "It took too long to check for shops nearby. Please try again.", 
                [{text: "Retry", onPress: () => checkNearbyShops(latitude, longitude)}]
            );
        }
        else{
            Alert.alert("Network Error", "Something went wrong while checking for nearby shops.", [{text: "OK"}]);
        }

        console.error("Axios Error occured: ", error.message);
        return;
    }
}